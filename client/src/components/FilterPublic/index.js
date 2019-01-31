import React, { Component } from "react";
import { Col, Form, Label }
    from "reactstrap";
import "./style.css";
import { GenderField, LocationField, SubmitBtn } from "../Form"

// Provides search options on /kids page
class FilterPublic extends Component {

    render() {
        return (
            <Col md="2" className="my-4 p-0">
                <div className="label p-0 m-0">
                    <h6 className="text-uppercase text-center py-2 label-text">Search options</h6>
                </div>
                <Form className="pt-2">
                    <LocationField name="location" value={this.props.value.location} onChange={this.props.onChange} />
                    
                    <GenderField name="gender" value={this.props.value.gender} onChange={this.props.onChange} />
                    <SubmitBtn onClick={this.props.onClick} />
                </Form>
            </Col>
        )
    }
}

export default FilterPublic