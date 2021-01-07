import React from 'react'
import './Testimonials.css';


function Testimonials() {
    return (

       
            
          <>
                <div className="container-fluid px-2 px-md-4 py-5 mx-auto">
                  <div className="card card0 border-0">
                    <div className="row d-flex">
                      <div className="col-lg-5">
                        <div className="card1 pb-5">
                          <div className="row px-3">
                            <h5 className="logo"><u>Dyzstudios</u></h5>
                          </div>
                          <div className="row px-3 justify-content-center mt-4 mb-5">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                              <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to={0} id="li1" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} id="li2" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} id="li3" className="active" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={3} id="li4" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={4} id="li5" />
                              </ol>
                              <div className="carousel-inner">
                                <div className="carousel-item card border-0 card-0">
                                  <div className="text-center"> <img src="https://i.imgur.com/IjkibdE.jpg" className="img-fluid profile-pic" /> </div>
                                  <h6 className="font-weight-bold mt-5">John Paul</h6> <small className="mb-2">UI/UX Designer</small>
                                  <hr width="50%" />
                                  <p className="content mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.<br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="carousel-item card border-0 card-0">
                                  <div className="text-center"> <img src="https://i.imgur.com/oW8Wpwi.jpg" className="img-fluid profile-pic" /> </div>
                                  <h6 className="font-weight-bold mt-5">Ximena Vegara</h6> <small className="mb-2">UI/UX Designer</small>
                                  <hr width="50%" />
                                  <p className="content mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.<br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="carousel-item active card border-0 card-0">
                                  <div className="text-center"> <img src="https://i.imgur.com/EUYNvE1.jpg" className="img-fluid profile-pic" /> </div>
                                  <h6 className="font-weight-bold mt-5">Lena Maria</h6> <small className="mb-2">Backend Developer</small>
                                  <hr width="50%" />
                                  <p className="content mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.<br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="carousel-item card border-0 card-0">
                                  <div className="text-center"> <img src="https://i.imgur.com/ndQx2Rg.jpg" className="img-fluid profile-pic" /> </div>
                                  <h6 className="font-weight-bold mt-5">Richard Finch</h6> <small className="mb-2">UI/UX Designer</small>
                                  <hr width="50%" />
                                  <p className="content mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.<br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="carousel-item card border-0 card-0">
                                  <div className="text-center"> <img src="https://i.imgur.com/gazoShk.jpg" className="img-fluid profile-pic" /> </div>
                                  <h6 className="font-weight-bold mt-5">Marielle Haag</h6> <small className="mb-2">Backend Developer</small>
                                  <hr width="50%" />
                                  <p className="content mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.<br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row px-3 text-center justify-content-center mb-0 social"> <span className="fa fa-facebook-square mx-2" /> <span className="fa fa-twitter mx-2" /> <span className="fa fa-instagram mx-2" /> <span className="fa fa-youtube-play mx-2" /> </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="card2 card border-0 px-4 px-sm-5 py-5"> <small className="text-right mb-3"><a href><u>I already have an account</u></a></small>
                          <h3 className="mb-1">Sign up to Dyzstudios</h3>
                          <p className="mb-4 text-sm">Create our account and start learning with thousands of courses</p>
                          <div className="row mt-3">
                            <div className="col-md-6"> <label className="mb-0">
                                <h6 className="mb-0 text-sm">Full Name</h6>
                              </label> <input type="text" name="fname" placeholder="John Doe" /> </div>
                            <div className="col-md-6"> <label className="mb-0">
                                <h6 className="mb-0 text-sm">Username</h6>
                              </label> <input type="text" name="uname" placeholder="johndoe123" /> </div>
                          </div>
                          <div className="row px-3"> <label className="mb-0">
                              <h6 className="mb-0 text-sm">Email Address</h6>
                            </label> <input type="text" name="email" placeholder="john.doe@email.com" /> </div>
                          <div className="row px-3"> <label className="mb-0">
                              <h6 className="mb-0 text-sm">Password</h6>
                            </label> <input type="password" name="password" placeholder="●●●●●●●●●●" /> </div>
                          <div className="row px-3 mb-3"> <small className="text-muted">By signing up, you agree our <a href className="text-primary">Terms of services</a> and <a href className="text-primary">Privacy Policy</a></small> </div>
                          <div className="row mb-4">
                            <div className="col-md-6"> <button className="btn btn-blue text-center mb-1 py-2">Create Account</button> </div>
                          </div>
                          <div className="row px-3 mb-4">
                            <div className="line" /> <small className="text-muted or text-center">OR</small>
                            <div className="line" />
                          </div>
                          <div className="row text-center">
                            <div className="col-sm-6">
                              <p className="social-connect"><span className="fa fa-facebook-square" /><small className="pl-3 pr-1">Sign up with facebook</small></p>
                            </div>
                            <div className="col-sm-6">
                              <p className="social-connect"><span className="fa fa-google-plus" /><small className="pl-3 pr-1">Sign up with google+</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </>
              );
       
    
}

export default Testimonials;