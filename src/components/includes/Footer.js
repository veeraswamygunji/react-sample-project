import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <div>
                <section className="footer bg-dark text-white py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h6>Company info</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <Link to="/about" className="btn btn-link">Read more</Link>
                            </div>
                            <div className="col-md-4">
                                <h6>Quick Links</h6>
                                <ul className="quickLinks">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h6>Contact info</h6>
                                <address>#3-1-449, L B Nagar, Hyderabad, TS, India <br/>
                                +919700036196 <br/> +91980006753 <br/> <Link to="/" className="btn btn-link">info@gmail.com</Link></address>
                            </div>
                            <div className="copyrights col-md-12">
                                <p>Copyright &copy; 2021 VS App</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer
