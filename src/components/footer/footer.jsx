import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="container">
         <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <p className="grey-text text-lighten-4"></p>
              </div>
              
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Rejeuve Pilates
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
      </div>      
    )
}

export default Footer;