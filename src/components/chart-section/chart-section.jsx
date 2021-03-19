import React from "react";
import PropTypes from "prop-types";
import Chart from "../chart/chart";
import {connect} from "react-redux";

const ChartSection = (props) => {
  const {data} = props;

  const getChartData = (d) => {
    const years = new Set();
    d.forEach((el) => {
      years.add(`${(new Date(Date.parse(el.dateFlight))).getFullYear()}`);
    });

    const chartData = [];
    [...years].forEach((year) => {
      const yearObj = {
        name: year,
        timeFlight: 0,
        timeWork: 0
      };
      chartData.push(yearObj);

    });

    d.forEach((el) => {
      chartData.forEach((year) => {
        if (+year.name === (new Date(Date.parse(el.dateFlight))).getFullYear()) {
          year.timeFlight += el.timeFlight;
          year.timeWork += el.timeWork;
        }
      });
    });

    return chartData;
  };

  return (
    <Chart chartData={getChartData(data)}/>
  );
};

ChartSection.propTypes = {
  data: PropTypes.array.isRequired,
};

const mapStateToProps = ({APP}) => ({
  data: APP.data,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChartSection);
