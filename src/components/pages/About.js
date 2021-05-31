import React, { Component } from 'react'
import VMC from './inc/VMC'

class About extends Component {
    render() {
        return (
            <div>
                <section className="py-4 bg-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 my-auto">
                                <h5>About Us</h5>
                            </div>
                            <div className="col-md-8 my-auto">
                                <h5 className="float-end">Home / About</h5>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-c-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <h3 className="main-heading">Our Company</h3>
                                <div className="underline mb-2"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <VMC />

            </div>
        )
    }
}

export default About
