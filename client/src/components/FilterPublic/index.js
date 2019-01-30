import React, { Component } from "react";
import { Col, Form, Label} 
from "reactstrap";
import "./style.css";
import {GenderField, LocationField, SubmitBtn} from "../Form"
import axios from "axios";
import API from "../../utils/API";

// Provides search options on /kids page
class FilterPublic extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        kids: [],
        location: "",
        gender: ""
    }
    
    render() {
    return (
        <Col md="2" className="my-4 p-0">
            <div className="label p-0 m-0">
                <h6 className="text-uppercase text-center py-2 label-text">Search options</h6>
            </div>
            <Form className="px-2 pt-2">
            <Label>Location</Label>
            <LocationField name="location" value={this.props.value.location} onChange={this.props.onChange}/>
            <Label>Gender</Label>
                <GenderField name="gender" value={this.props.value.gender} onChange={this.props.onChange}/>
            <SubmitBtn onClick={this.props.onClick}/>
            </Form>           
        </Col>
        )
    }
}
        
export default FilterPublic