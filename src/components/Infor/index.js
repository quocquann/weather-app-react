
import style from './Infor.module.scss';

import classNames from 'classnames/bind';
import { faDroplet, faEye, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CityContext } from '../../Contexts/CityContext'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(style);

function Infor() {


    const [cityName, setCityName] = useContext(CityContext);
    const [notify, setNotify] = useState('');

    const [dataWeather, setDataWeather] = useState();


    useEffect(() => {


        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f4234cf997a5e271af1259c59c8c3152&lang=vi&units=metric`)
            .then(data => {
                setDataWeather(data.data);
                // setNotify('');
            })
            .catch((e) => {
                setDataWeather(null);
                setNotify('Thành phố không hợp lệ')
            })


        return () => {
            setNotify('')
        }
    }, [cityName]);



    return (
        <div className={cx('wrapper')} key={cityName}>
            <div className={cx('notify')}>{notify}</div>
            <div className={cx('main-infor')}>
                <p className={cx('location')}>
                    <span>{dataWeather ? `${dataWeather.name}, ` : null}</span> <span> {dataWeather ? dataWeather.sys.country : null}</span>
                </p>
                <div className={cx('image')} >
                    {dataWeather ? <img src={`http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt='icon' /> : null}
                    {/* <img src={`http://openweathermap.org/img/wn/${dataWeather ? dataWeather.weather[0].icon : '01d'}@2x.png`} alt='icon' /> */}
                </div>
                {dataWeather ? <div className={cx('temperature')}>{Math.round(dataWeather.main.temp)}</div> : null}
                <p className={cx('desc')}>{dataWeather ? dataWeather.weather[0].description : null}</p>
            </div>
            <div className={cx('more-infor')}>
                <div className={cx('item', 'eye')}>
                    <span>Tầm nhìn</span>
                    <FontAwesomeIcon icon={faEye} className={cx('icon')} />
                    <span>{dataWeather ? `${dataWeather.visibility} m` : null}</span>
                </div>
                <div className={cx('item', 'wind')}>
                    <span>Tốc độ gió</span>
                    <FontAwesomeIcon icon={faWind} className={cx('icon')} />
                    <span>{dataWeather ? `${dataWeather.wind.speed} m/s` : null}</span>
                </div>
                <div className={cx('item', 'droplet')}>
                    <span>Độ ẩm</span>
                    <FontAwesomeIcon icon={faDroplet} className={cx('icon')} />
                    <span>{dataWeather ? `${dataWeather.main.humidity} %` : null}</span>
                </div>
            </div>
        </div>
    );
}

export default Infor;