import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="main-footer">
          <div className="footer-container">
            <div className="row">
              {/* column 1*/}
              <div className="col">
                <h1 className="medium-text">Contact Info</h1>
                <ul className="list-unstyled">
                  <li>Phone:000 000 0000</li>
                  <li>Temp place</li>
                  <li>345 holder street</li>
                  <li>Africa</li>
                </ul>
              </div>
              {/* column 1*/}
              <div className="col">
                <ul className="list-unstyled">
                  <li className="small-text">Home</li>
                  <li className="small-text">About</li>
                  <li className="small-text">Mental Disoders</li>
                  <li className="small-text">Specialists</li>
                  <li className="small-text">My account</li>
                </ul>
              </div>
            </div>
            {/* footer bottom */}
            <div className="footer-bottom">
              <p className="xxsmall-text">&copy;{new Date().getFullYear()} team 158 - all rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
