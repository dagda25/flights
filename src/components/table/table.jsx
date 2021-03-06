import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TableYear from "../table-year/table-year";
import ChartSection from "../chart-section/chart-section";
import Loader from "react-loader-spinner";

const Table = (props) => {
  const {data} = props;

  if (!data || !data.length) {
    return <Loader
      type="Circles"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
      style={{marginLeft: `calc(50% - 50px)`, marginTop: `10%`}}
    />;
  }


  const getRowsData = (data) => {
    const years = new Set();
    data.forEach((el) => {
      years.add(`${(new Date(Date.parse(el.dateFlight))).getFullYear()}`);
    });

    return [...years];
  };

  return (
    <section className="container">
      <h2 className="title">Статистика за весь период</h2>
      <table className="table table-main">
        <tbody>
          <tr className="table-header">
            <th>Год</th>
            <th>Месяц</th>
            <th>Налёт</th>
            <th>Рабочее время (факт)</th>
            <th>Рабочее время (план)</th>
          </tr>
          {getRowsData(data).map((year) =>
            <TableYear year={year} key={year}/>
          )
          }

        </tbody>
      </table>
      <ChartSection/>
    </section>

  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
};

const mapStateToProps = ({APP}) => ({
  data: APP.data,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
