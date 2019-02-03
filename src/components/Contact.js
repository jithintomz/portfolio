import React, { Component } from "react";
import "./Contact.css";

class ContactForm extends Component {
  render() {
    return (
      <div id="contact">
        <form style={{ width: "700px", margin: "auto" }}>
          <div className="form-group">
            <label htmlFor="nameField">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameField"
              autoComplete="false"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailField"
              aria-describedby="emailHelp"
              autoComplete="false"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subjectField">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subjectField"
              autoComplete="false"
              placeholder="Enter Subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea className="form-control" rows="5" id="body" />
          </div>
          <button type="submit" className="btn btn-primary">
            Send <i className="fa fa-rocket" />
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
