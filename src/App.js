
import Search from './components/Search';
import Infor from './components/Infor';


import style from './App.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function App() {
  return (
    <div className={cx('wrapper')}>
      <Search />
      <Infor />
    </div>
  );
}

export default App;
