import React, { Component } from 'react';
import NavBar from './../NavBar';
import Data from './../Data';
import '../../App.css';

class Nurses extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { room_no } = this.props;
    return (
      <div>

        {
           ({ loading, error, data }) => {
              if(loading)
                return <h5 className="head_val">loading...</h5>
              if(error)
                return <h5 className="head_val">Error</h5>

                return data.nurse.map((n) => (
                  <div key={n.id}>
                    <h5 className="head_val">{n.name}</h5>
                  </div>
                ))
           }
         }

      </div>
    );
  }
}

export default Nurses;
