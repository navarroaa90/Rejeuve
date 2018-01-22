import React from 'react';
import './HomePage.css';


const HomePage = () => {
    return (
        
        <div className="container" >
    <div className="section">

      <div className="row">
        <div className="col s12 center">
          <h3><i className="mdi-content-send brown-text"></i></h3>
          <h4>What is Pilates?</h4>
          <img className="responsive-img" src={'https://i.imgur.com/sOXym5p.jpg'} />
        
          <p className="left-align light">Pilates is a systematic form of exercise comprised of over 600 deliberate movements designed to engage the mind while conditioning the whole body. The movements combine elements of strength, flexibility and stabilization to bring the body into greater alignment, balance and harmony. <br/> <br/>
        Pilates is a movement form that improves your quality of life in many ways. Pilates can be performed on the mat as well as the apparatus with the repertoire ranging from the novice to advance level and when the exercises are done properly with good form, you will see results!
        </p> <br/> <br/>
        <h4> Benefits of Pilates</h4>
            <ul className="collection">
                <li className="collection-item left-align"><i className="tiny material-icons">check</i>Improved posture alignment</li>
                <li className="collection-item left-align"><i className="tiny material-icons">check</i>Strength without bulk</li>
                <li className="collection-item left-align"><i className="tiny material-icons">check</i>Body Awareness, The Mind and Body connection</li>
                <li className="collection-item left-align"><i className="tiny material-icons">check</i>Increased flexibility</li>
                <li className="collection-item left-align"><i className="tiny material-icons">check</i>Low back pain prevention and management </li>
                <li className="collection-item left-align"><i className="tiny material-icons">check</i>Weight loss</li>
                <li className="collection-item left-align"><i className="tiny material-icons">check</i>Beautiful and long lean muscles</li>
                <li className="collection-item left-align"><i className="tiny material-icons">check</i>Core strength</li>
                <li className="collection-item left-align"><i className="tiny material-icons">check</i>Injury prevention</li>
                <li className="collection-item left-align"><i className="tiny material-icons">check</i>Improved circulation</li>
            </ul>
        </div>
      </div>

    </div>
  </div>
    )
}

export default HomePage