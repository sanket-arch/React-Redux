import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps,mapStateToProps } from '../redux/cake/selectors';
function Cakecontainer(props) {
  return (
    <div>
      <h1>Number of Cakes-{props.numberOfCake}</h1>
      <button
        onClick={() => {
          props.buyCake();
        }}
      >
        Buy Cake
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer);
