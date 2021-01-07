import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
<>
           
<div>
    <div data-spy="scroll" data-target=".navbar" data-offset="0" >
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a class="navbar-brand" href="#">Dyzstudios</a>
            
                    <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                <Link  to="/home">
                                <li class="nav-item active">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                </Link>
                                <Link  to="/products">
                                <li className="nav-item">
                                    <a className="nav-link" href="#products">Products</a>
                                </li>
                                </Link>
                                <Link  to="/stacks">
                                <li className="nav-item">
                                    <a className="nav-link" href="#stacks">Stacks</a>
                                </li>
                                </Link>
                                <Link  to="/testimonials">
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonials">Testimonials</a>
                                </li>
                                </Link>
                                <Link  to="/contact">
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                                </Link>
                            </ul>
                        </div>
                     </div>
                    </nav>
                    </div>
                </div>



  </>

 
    );
}

export default Navbar;