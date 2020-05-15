import React, { Component } from 'react';
import Service from './Service';

export default class ServiceList extends Component {
  componentDidMount() {
    this.props.getServices();
  }

  render() {
    return (
      <ul className="services">
        {this.props.services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </ul>
    );
  }
}
