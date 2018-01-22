import React from 'react'
import './ContactMe.css'

const ContactMe = (props) => {
    return (
        <div className="container">
             <div className="section">
                <div className="col s12 center">
                <h3>Contact Me</h3>
                    <p>Thank you for visiting my website. If you're interested in private pilates instruction or have any questions or comments, please feel free to contact me at the Phone number or email below.
</p>
             </div>
             <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons">gps_fixed</i></h2>
            <h5 className="center">Location</h5>

            <p className="light">Claremont,CA</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons">email</i></h2>
            <h5 className="center">Email</h5>

            <p className="light">rejeuvepilates@yahoo.com</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons">phone_iphone</i></h2>
            <h5 className="center">Phone Number</h5>

            <p className="light">(909) 568-7295</p>
          </div>
        </div>
      </div>

    </div>
    <br/><br/>
  </div>
         
             </div>
             <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
            <h5 className="center">Social Media</h5>

            <p className="light">Come checkout my Facebook Page here!</p>
          </div>
        </div>
           
         </div>
    )
}

export default ContactMe 