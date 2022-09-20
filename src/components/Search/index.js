

import style from './Search.module.scss'
import classNames from 'classnames/bind'
import { useContext, useState } from 'react';
import { CityContext } from '../../Contexts/CityContext'

const cx = classNames.bind(style);



function Search() {

    const [cityName, setCityName] = useContext(CityContext);


    const [text, setText] = useState('');

    const handelChangeInput = (e) => {
        setText(e.target.value)
    }

    const handleEnter = (e) => {
        if (e.which === 13) {
            setCityName(text.trim());
            setText('');
        }
    }



    return (
        <div className={cx('wrapper')}>
            <input
                value={text}
                onChange={handelChangeInput}
                onKeyDown={handleEnter}
                className={cx('input-search')}
                placeholder="Nhập tên thành phố" />
        </div>
    );
}

export default Search;