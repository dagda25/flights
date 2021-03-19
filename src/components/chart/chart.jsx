import React from "react";
import PropTypes from "prop-types";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

const Chart = (props) => {
  const {chartData} = props;

  return (
    <ResponsiveContainer width="100%">
      <LineChart width={800} height={500} data={chartData} margin={{top: 25, right: 20, bottom: 5, left: 20}}>
        <Line type="monotone" dataKey="timeFlight" stroke="#8884d8" />
        <Line type="monotone" dataKey="timeWork" stroke="#aa3444" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  chartData: PropTypes.array,
};

export default Chart;
