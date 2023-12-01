import BarChart from './components/BarChart';

import './index.scss';

const Home = () => {

  return (
    <div className="home">
      <BarChart title="三大框架下载次数" series={[180, 200, 80]} />
      <BarChart title="三大框架增长数" series={[30, 40, 2]} />
      <BarChart title="三大框架满意度" series={[180, 150, 20]} />
    </div>
  );
};

export default Home;