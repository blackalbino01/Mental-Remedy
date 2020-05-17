import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Specialist from './Specialist';

class SpecialistsLists extends Component {
  componentDidMount() {
    this.props.getSpecialists();
  }

  render() {
    return (
      <ul className="specialists">
        {this.props.specialists.map((specialist) => (
          <Specialist specialist={specialist} key={specialist.id} specialists={this.props.specialists} />
        ))}
      </ul>
    );
  }
}

SpecialistsLists.propTypes = {
  // Name all the props and set their type
  specialists: PropTypes.array.isRequired
};

export default SpecialistsLists;
