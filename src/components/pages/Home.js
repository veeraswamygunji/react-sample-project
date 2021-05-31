import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../includes/Slider'
import VMC from './inc/VMC'
import Service1 from '../Images/s-img-1.jpg'
import Service2 from '../Images/s-img-2.jpg'
import Service3 from '../Images/s-img-3.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="main-heading">Our Company</h3>
                                <div className="underline mx-auto mb-3"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision, Mission and Values */}
                <VMC />

                {/* Our services */}
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-4 text-center">
                                <h3 className="main-heading">Our Services</h3>
                                <div className="underline mx-auto"></div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={Service1} className="w-100 border-bottom" alt="Services" />
                                    <div className="card-body">
                                        <h6>Services one</h6>
                                        <div className="underline md-3"></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <Link to="/services" className="btn btn-link">Read more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={Service2} className="w-100 border-bottom" alt="Services" />
                                    <div className="card-body">
                                        <h6>Services two</h6>
                                        <div className="underline md-3"></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <Link to="/services" className="btn btn-link">Read more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={Service3} className="w-100 border-bottom" alt="Services" />
                                    <div className="card-body">
                                        <h6>Services three</h6>
                                        <div className="underline md-3"></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <Link to="/services" className="btn btn-link">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
