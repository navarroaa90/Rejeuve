import React from 'react'
import './Prices.css'

const Prices = () => {
    return(
        <div className= "container">
        <h1>Services</h1>
        <p>I teach at my In-Home Private Pilates Studio with prices varying depending on the service.You are welcome to contact me to discuss the services that is best for you!</p><br/>
        <h5 className="left-align">Description of Services</h5>
        <p className="left-align">A 55 Minute Pilates Session on All Pilates Apparatus, Reformer, Wunda Chair, Cadillac/Tower as well as additional equipment (Avalon Step Barrel, Pilates Arc,  BOSU, TRX, Indorow, Barre and MOTR) will be used.</p>
        <div className="left-align">
        <h6>Privates</h6>
        <p>One on one training that provides individual and undivided attention between teacher and client. This session is customized to you, your body and your goals.</p>
        </div>
        <div  className="center-align">
          <h5 id="initial">*First time initial assessment is to discuss and observe your body alignment as well your fitness goals.</h5>
        </div>
          <table className="highlight">
        <thead>
          <tr>
              <th>Private Sessions</th>
              <th></th>
              <th>Price</th>
              
          </tr>
        </thead>
         <tbody>
          <tr>
            <td>*Inital Assessment</td>
            <td>Only for New Clients</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>Single</td>
            <td>Regular Price</td>
            <td>$75</td> 
          </tr>
          <tr>
            <td>4 Prepaid Package</td>
            <td>$70 per session</td>
            <td>$280</td>
          </tr>
          <tr>
            <td>8 Prepaid Package</td>
            <td>$65 per session</td>
            <td>$520</td>
          </tr>
          <tr>
            <td>10 Prepaid Package</td>
            <td>$60 per session</td>
            <td>$600</td>
          </tr>
        <thead>
          <tr>
              <th>Semi-Private(2 people)</th> 
               <th></th>
              <th></th>
              </tr>
        </thead>
         
          <tr>
            <td>1 Semi-Private</td>
            <td>$40 per person</td>
            <td>$80/couple</td>
          </tr>
          <thead>
          <tr>
              <th>Group(up to 4)</th> 
               <th></th>
              <th></th>
              </tr>
        </thead>
         
          <tr>
            <td>Barre/Pilates Mat</td>
            <td></td>
            <td>$20/person</td>
          </tr>
        </tbody>
      </table>
      <h5 className="left-align">Cancellation Policy</h5>
      <p className="left-align">I kindly ask that you provide a 24 hour cancellation notice in order to allow me enough time to fill your spot. Less than 24 hour cancellation notice, Prepaid session will be charged in full. NO EXCUSES!</p>
      <p className="left-align">Prepaid session or packages are non-negotiable, non-refundable and non-transferable.  All Sales are FiNAL and there are NO Refunds.  Prepaid sessions expire six (6) months from the date of purchase.</p>
      
      
            </div>
            
    )
}

export default Prices