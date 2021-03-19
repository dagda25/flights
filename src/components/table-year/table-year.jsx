import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const TableYear = (props) => {
  const {data, year} = props;
  const [openMonths, setOpenMonths] = React.useState(false);
  const handleToggleMonths = () => {
    setOpenMonths((prev) => !prev);
  };

  const getMonthsList = (data) => {

    const months = new Set();

    let formatter = new Intl.DateTimeFormat(`ru`, {
      month: `long`
    });

    data.forEach((el) => {
      if ((new Date(Date.parse(el.dateFlight))).getFullYear() === +year) {
        months.add(
            formatter.format(
                new Date(Date.parse(el.dateFlight))
            )
        );
      }
    });

    return [...months];
  };

  const getFlightTime = (year, month) => {
    let flightTime = 0;

    let formatter = new Intl.DateTimeFormat(`ru`, {
      month: `long`
    });

    data.forEach((el) => {
      if (month) {
        if ((new Date(Date.parse(el.dateFlight))).getFullYear() === +year &&
         formatter.format(new Date(Date.parse(el.dateFlight))) === month) {
          flightTime += el.timeFlight;
        }
      } else {
        if ((new Date(Date.parse(el.dateFlight))).getFullYear() === +year) {
          flightTime += el.timeFlight;
        }
      }
    });
    return flightTime;
  };

  const getWorkTime = (year, month) => {
    let workTime = {
      fact: 0,
      plan: 0
    };

    let formatter = new Intl.DateTimeFormat(`ru`, {
      month: `long`
    });

    data.forEach((el) => {
      if (month) {
        if ((new Date(Date.parse(el.dateFlight))).getFullYear() === +year &&
         formatter.format(new Date(Date.parse(el.dateFlight))) === month) {
          el.type === 0 ? workTime.fact += el.timeWork : workTime.plan += el.timeWork;
        }
      } else {
        if ((new Date(Date.parse(el.dateFlight))).getFullYear() === +year) {
          el.type === 0 ? workTime.fact += el.timeWork : workTime.plan += el.timeWork;
        }
      }
    });
    return workTime;
  };


  return (
  <>
    <tr className="table-row table-row-year">
      <td><a href={year}>{parseInt(year, 10)}</a></td>
      <td onClick={handleToggleMonths}>
        {openMonths ?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            version="1.1"
            viewBox="0 0 128 128"
          >
            <g
              fill="none"
              stroke="#2F3435"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="12"
            >
              <path d="M111 40.5L64 87.499"></path>
              <path d="M64 87.499L17 40.5"></path>
            </g>
          </svg>
          :
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            enableBackground="new 0 0 128 128"
            version="1.1"
            viewBox="0 0 128 128"
          >
            <g
              fill="none"
              stroke="#2F3435"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="12"
            >
              <path d="M40.5 17L87.5 64"></path>
              <path d="M87.5 64L40.5 111"></path>
            </g>
          </svg>
        }
      </td>
      <td>{getFlightTime(year)}</td>
      <td>{getWorkTime(year).fact}</td>
      <td>{getWorkTime(year).plan}</td>
    </tr>
    {
      openMonths &&
      getMonthsList(data, year).map((month) =>
        <tr className="table-row table-row-month" key={month}>
          <td></td>
          <td><a href={year + `/` + month}>{month}</a></td>
          <td>{getFlightTime(year, month)}</td>
          <td>{getWorkTime(year, month).fact}</td>
          <td>{getWorkTime(year, month).plan}</td>
        </tr>
      )


    }
  </>

  );
};

TableYear.propTypes = {
  data: PropTypes.array.isRequired,
  year: PropTypes.number,
};

const mapStateToProps = ({APP}) => ({
  data: APP.data,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TableYear);
