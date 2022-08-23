import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveHospitals
} from "../actions/hospitals";
import { Link } from "react-router-dom";

class HospitalsList extends Component {
  constructor(props) {
    super(props);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveHospital = this.setActiveHospital.bind(this);
    this.state = {
      currentHospital: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.props.retrieveHospitals();
  }

  refreshData() {
    this.setState({
      currentHospital: null,
      currentIndex: -1,
    });
  }

  setActiveHospital(hospital, index) {
    this.setState({
      currentHospital: hospital,
      currentIndex: index,
    });
  }

  render() {
    const { currentHospital, currentIndex } = this.state;
    const { hospitals} = this.props;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Hospitals List</h4>
          <ul className="list-group">
            {hospitals &&
              hospitals.map((hospital, index) => (
                <li
                  className={"list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveHospital(hospital, index)}
                                     key={index}>
                  {hospital.name}
                </li>
              ))}
          </ul>
        </div>

       <div className="col-md-6">
                {currentHospital ? (
                  <div>
                    <h4>Hospital</h4>
                    <div>
                      <label>
                        <strong>Name:</strong>
                      </label>{" "}
                      {currentHospital.name}
                    </div>
                    <div>
                      <label>
                        <strong>Description:</strong>
                      </label>{" "}
                      {currentHospital.description}
                    </div>
                  </div>
                ) : (
                  <div>
                    <br />
                    <p>Please click on a Hospital...</p>
                  </div>
                )}
              </div>
            </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hospitals: state.hospitals,
  };
};

export default connect(mapStateToProps, {
  retrieveHospitals
})(HospitalsList);