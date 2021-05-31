import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="py-4 bg-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 my-auto">
                                <h5>Contact Us</h5>
                            </div>
                            <div className="col-md-8 my-auto">
                                <h5 className="float-end">Home / Contact Us</h5>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Contact Form</h5>
                                        <hr/>
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control" placeholder="Enter full name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone number</label>
                                            <input type="number" className="form-control" placeholder="Enter phone number" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea rows="3" className="form-control" placeholder="Type your message"></textarea>
                                        </div>
                                        <div className="form-group my-2">
                                            <button type="submit" className="btn btn-primary btn-lg float-end">Send Message</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 border-start">
                                        <h3 className="main-heading">Address Info</h3>
                                        <div className="underline mb-2"></div>
                                        <p>
                                            XXX, Hyderabad, Telangana - 500XXX, India.
                                        </p>
                                        <p>
                                            Phone: +919700089732
                                        </p>
                                        <p>
                                            Email: info@gmail.com
                                        </p>
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

export default Contact
