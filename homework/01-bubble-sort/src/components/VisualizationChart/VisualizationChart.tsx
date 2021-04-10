import React from 'react';
import Column from './Element/Element';
import './VisualizationChart.css';

type Props = {
  chart: number[];
};

const VisualizationChart: React.FC<Props> = ({ chart }) => {
  let chartArray = chart.map((col, index) => {
    return <Column key={index} height={col} />}
  );

  return <div className='Chart'>{chartArray}</div>;
};
export default VisualizationChart;