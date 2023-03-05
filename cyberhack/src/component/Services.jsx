import React from "react";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-2 text-center">Our Cyber Security Services</h3>
            </div>
          </div>
          <div className="row mt-0">
          <div className="col-md-4 text-center">
              <div className="card p-3">
                <div className="card-body">
                  <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h1 className="card-title mb-3 fs-6 fw-bold text-center">Volunteer</h1>
                  <p className="card-text">Cyber Security Specialists 
                  </p>
                  <a
                    className="btn btn-outline-primary px-4 py-2"
                    href="http://localhost:3000/volunteers"
                    role="button">
                    Join Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card p-3">
                <div className="card-body">
                  <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h1 className="card-title mb-3 fs-6 fw-bold text-center">Service Request</h1>
                  <p className="card-text">
                    Submit a service request
                  </p>
                  <a
                    className="btn btn-outline-primary px-4 py-2"
                    href="http://localhost:3000/cruds/new"
                    role="button"
                  >
                    Submit
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card p-3">
                <div className="card-body">
                  <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h1 className="card-title mb-3 fs-6 fw-bold text-center">Registration</h1>
                  <p className="card-text">
                    Charity Application.
                  </p>
                  <a
                    className="btn btn-outline-primary px-4 py-2"
                    href="http://localhost:3000/charities"
                    role="button"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
