import React from "react";

const Charities = () => {
  return (
    <div>
      <section id="charities">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-3">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Charities
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section id="Mission">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-center text-white justify-content-center order-2">
              <img
                src="/assets/helping.jpg"
                alt="About"
                className="w-75 mt-5"
              />
            </div>
            <div className="col-md-6">
              <hr />
              <p className="lead">
                <p>
                As a small business or NGO, is your cybersecurity program
                strong enough to protect against today's sophisticated cyber
                threats? Can you offer paying for a cyber specialist to fix
                you system problems?
                </p>
                <p>
                Cyber hack is a company that connects the providers of the cyber
                security specialists to the clients that they need this service.
                Our clients are mainly non-for-profit organizations for free.
                Our cyber security sepecialists are volunteers that will use our 
                web application to apply and then assist you with the required cyber 
                services. The NGO will also apply to be a client for our company. 
                </p>
                <p>
                Our main goal is to connect both parties and ensure that the 
                need for help is fulfilled. The client (i.e., Charity) will post a 
                work request on the "Tickets" page.  Here one of our volunteers will assist 
                you with your software and / or network needs.  The ticket will be updated by 
                the cyber security specialist to indicate that it is active and in the process of 
                being completed.  When the ticket is closed our cyber security volunteer will delete 
                the ticket to indicated that the service request has been addressed.
                </p>
                <h5 className="card-title mb-3 fs-4 fw-bold">Charity Registration</h5>
                  <p className="card-text">
                    Please register with Cyber Hack to start receiving our services.
                  </p>
                  <a
                    className="btn btn-outline-primary px-4 py-2"
                    href="http://localhost:3000/charities"
                    role="button"
                  >
                    Register
                  </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Charities;
