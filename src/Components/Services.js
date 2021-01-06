import React from 'react'
import card1 from '../images/undraw_Business_decisions_re_84ag.svg'

function Services() {
    return (
        <div id="services" class="container">
    
        <h2 className="display-4 text-center mt-5 mb-3">Our Services</h2>
        
        <div className="row text-center">
           <div className="col-md-4 mb-4">
              <div className="card h-100">
                 <img className="card-img-top" src={card1} alt="Design" />
                 <div className="card-body">
                    <h4 className="card-title">Design</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat qui est ratione!</p>
                 </div>
                 <div className="card-footer py-4">
                    <a href="#" class="btn btn-secondary">See portfolio &raquo;</a>
                 </div>
              </div>
           </div>
           
           <div className="col-md-4 mb-4">
              <div className="card h-100">
                 <img className="card-img-top" src={card1} alt="Development"/>
                 <div className="card-body">
                    <h4 className="card-title">Development</h4>
                       <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur beatae ut quibusdam ipsam! Repellendus, non quibusdam!</p>
                 </div>
                 <div className="card-footer py-4">
                    <a href="#" className="btn btn-secondary">See projects &raquo;</a>
                 </div>
              </div>
           </div>
           
           <div className="col-md-4 mb-4">
              <div className="card h-100">
                 <img className="card-img-top" src={card1} alt="Analytics" />
                 <div className="card-body">
                    <h4 className="card-title">Analytics</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptate ut tenetur quo dolorum officia animi molestias?</p>
                 </div>
                 <div className="card-footer py-4">
                    <a href="#" className="btn btn-secondary">See testimonials &raquo;</a>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
}
export default Services;