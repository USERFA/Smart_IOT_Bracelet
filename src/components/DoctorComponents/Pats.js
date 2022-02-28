import React, { Component } from 'react';

import '../../App.css';

class Pats extends Component {
  constructor(props) {
    super(props);
  }

  select(val, e) {
    this.props.func(val);
  }

  render() {
    const { doc_id } = this.props;
    console.log("In Pats");
    return (
      <div className="container-fluid patient">
        <h1 className="title">Subscribed Patients</h1>
        <br />
        <>
        {
          ({ loading, error, data }) => {
            if(loading)
              return <>
            if(error)
              return <p>Check your internet connection</p>;

            console.log(data.doctors[0].patients);

            return </>;
          }
        }
        </>
      </div>
    )
  }
}

export default Pats;
