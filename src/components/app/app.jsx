
import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import MainPage from "../main-page/main-page";
import YearPage from "../year-page/year-page";
import browserHistory from "../../browser-history";
import {Redirect} from "react-router-dom";
import {AppRoute} from "../../utils/const";
import '../../App.css';


const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact path={AppRoute.ROOT}
          render={() => (
            <MainPage/>
          )}
        />
        <Route exact path="/:year?"
          render={({match}) => {
            const {year} = match.params;
            return (
              <YearPage
                year={year}
              />
            );
          }} />
        <Route exact path="/:year/:month?"
          render={({match}) => {
            const {year, month} = match.params;
            return (
              <YearPage
                year={year}
                month={month}
              />
            );
          }} />
        <Route
          render={() => (
            <Redirect to={AppRoute.ROOT} />
          )}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {

};

const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

