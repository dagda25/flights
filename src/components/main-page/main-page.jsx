import React from "react";
import {connect} from "react-redux";
import Table from "../table/table";


const MainPage = () => {

  return (
    <div className="page main-page">
      <Table />
    </div>
  );
};


const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
