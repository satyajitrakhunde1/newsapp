import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <>
          <section className="">
            <footer className="text-center text-white" style={{ backgroundColor: '#0a4275' }}>
              <div className="container p-4 pb-0">
                <section className="">
                  <p className="d-flex justify-content-center align-items-center">
                    <span className="me-3">Enjoy a daily dose of news </span>
                    </p>
                </section>
              </div>
              <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">Newsify.com</a>
              </div>
            </footer>
          </section>
        </>
      </div>
    );
  }
}
