import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";


const YearPage = (props) => {
  const {data, year, month} = props;

  if (!data || !data.length) {
    return <Loader
      type="Circles"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
      style={{marginLeft: `48%`, marginTop: `10%`}}
    />;
  }

  const [localData, setLocalData] = React.useState(data);

  const getTableData = (flight) => {
    let formatter = new Intl.DateTimeFormat(`ru`, {
      month: `long`
    });

    if ((month && ((new Date(Date.parse(flight.dateFlight))).getFullYear() === +year) && (formatter.format(new Date(Date.parse(flight.dateFlight))) === month)) ||
    (!month && new Date(Date.parse(flight.dateFlight)).getFullYear() === +year)) {
      return (
        <tr key={flight.dateFlight} className="table-row">
          <td>{flight.flight}</td>
          <td>{new Date(Date.parse(flight.dateFlight)).toLocaleDateString()}</td>
          <td>{flight.plnType}</td>
          <td>{flight.pln}</td>
          <td>{flight.timeFlight}</td>
          <td>{flight.timeBlock}</td>
          <td>{flight.timeNight}</td>
          <td>{flight.timeBiologicalNight}</td>
          <td>{flight.timeWork}</td>
          <td>{flight.type ? `План` : `Факт`}</td>
          <td>{flight.takeoff.name}</td>
          <td>{flight.landing.name}</td>
        </tr>
      );
    }

    return false;
  };

  const handleSearch = (evt) => {
    evt.preventDefault();

    let searchResult = data.filter((el) => {
      if (el.flight.toLowerCase().includes(evt.target.value.trim().toLowerCase()) ||
         (new Date(Date.parse(el.dateFlight)).toLocaleDateString().includes(evt.target.value))
      ) {
        return true;
      }
      return false;
    });

    setLocalData(searchResult);

  };

  return (
    <div className="page year-page">
      {
        month ?
          <h2 className="title">Статистика за {month} {year} года</h2> :
          <h2 className="title">Статистика за {year} год</h2>
      }
      <form>
        <input type="text" className="table-search" placeholder="Введите номер рейса или дату" onChange={handleSearch}/>
      </form>
      <p>Найдено {localData.length} рейс(ов)</p>
      <table className="table table-detail">
        <thead>
          <tr className="table-header">
            <th>Номер рейса
            </th>
            <th>Дата полёта</th>
            <th>Тип воздушного судна</th>
            <th>Бортовой номер ВС</th>
            <th>Время налёта</th>
            <th>Полётное время</th>
            <th>Ночное лётное время</th>
            <th>Биологическая ночь</th>
            <th>Рабочее время</th>
            <th>Тип</th>
            <th>Аэропорт вылета</th>
            <th>Аэропорт посадки</th>
          </tr>
        </thead>
        <tbody>
          {
            localData.map(getTableData)
          }
        </tbody>
      </table>
    </div>

  );
};

YearPage.propTypes = {
  data: PropTypes.array.isRequired,
};

const mapStateToProps = ({APP}) => ({
  data: APP.data,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(YearPage);
