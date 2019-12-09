import React from 'react';
import './Footer.css';

function Footer() {
    return (
      <div className="copyrights">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <p>&copy; 2017 Landy.com. All rights reserved.                        </p>
            </div>
            <div className="col-md-5 text-right">
              <p>Template By <a href="https://bootstrapious.com/" className="external">Bootstrapious</a>  </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;