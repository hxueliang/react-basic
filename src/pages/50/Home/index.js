import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

import './index.scss';

const Home = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const chartDom = barRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [200, 150, 80],
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);
  }, []);

  return (
    <div className="home">
      <div className="bar" ref={barRef}></div>
    </div>
  );
};

export default Home;