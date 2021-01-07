import React from 'react';
import background from '../images/contact.png';
import './App.css';

 function Contact() {
    return (
    
    <div>
       
       <div className="container-fluid text-center py-4 mt-4" id="contact" style={{backgroundImage:`url(${background}) no-repeat center`}} >
        <h2 className="display-4 pb-4 my-4">Get in touch with us today!</h2>
        <p className="lead pb-3">Send us a message and we will get back to 
        you as soon as possible.</p>
        <button type="button" class="btn btn-primary btn-lg mb-4" data-toggle="modal" data-target="#contactUs" role="button">Contact us</button>

        <div className="modal fade" id="contactUs" tabindex="-1" role="dialog" aria-labelledby="contactUs" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="contactUs">New message</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                 <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label for="recipient-name" class="col-form-label">Name:</label>
                      <input type="text" class="form-control" id="recipient-name" />
                    </div>
                   
                      <div className="form-group">
                        <label for="recipient-email" class="col-form-label">Email:</label>
                        <input type="text" class="form-control" id="recipient-email" />
                      </div>

                    <div className="form-group">
                      <label for="message-text" class="col-form-label">Message:</label>
                      <textarea className="form-control" id="message-text"></textarea> 
                    </div>

                  </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Send message</button>
                </div>
              </div>
            </div>
        </div>
            </div>
        
  

    );
    
  
}

export default Contact;