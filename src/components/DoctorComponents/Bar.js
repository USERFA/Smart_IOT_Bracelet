import React, { Component } from 'react';

import '../../App.css';

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribed: "",
    }
  }

  select(val, e) {
    this.props.func(val);
  }

  render() {
    // var { meds } = this.props;
    // // console.log(meds["med"]);
    // // console.log(meds["med"].length);
    // var total = 0, completed = 0;
    // for(var i = 0; i < meds["med"].length; i++) {
    //   total += meds["med"][i].doses;
    //   completed += meds["med"][i].completed;
    // }
    // var percy = (completed*100)/total;
    var min = 0, max = 100;
    const per = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
      <div className="container-fluid patient">

        <h6 style={{ color: 'black', fontSize: '11px' }}>{per} %</h6>
      </div>
    )
  }
}

export default Bar;
