import React from "react";
import { Row, Col, Form, Label } from "reactstrap";
import { InputField, FormBtn, } from "../Form";
import MainContainer from "../Container";
import "./style.css";

// Profile that appears with current info for user.
function UserProfile(props) {
    return (
        // Default will show user's current profile. Once update button is clicked, an update form will be displayed
        !props.updateProfile ? (
            <MainContainer>
            <Row className="mt-4">
                <Col md={{ size: 6, offset: 3 }}>
                    <h4>Your Current Profile</h4>
                    <div className="profile mt-3">
                        <p>{props.results.first_name} {props.results.last_name}</p>
                        <p>{props.results.address}</p>
                        <p>{props.results.city}, {props.results.state} {props.results.zip}</p>
                        <FormBtn
                            onClick={props.onClick}
                            btnText="Update"
                            className="btn-sm mt-1"
                        />
                    </div>
                </Col>
            </Row>
            </MainContainer>
        ) : (
                <MainContainer>
                <Row className="my-4">
                    <Col md={{ size: 6, offset: 3 }} >
                        <h4>Update Your Current Profile</h4>
                        <Form className="mt-3">
                            <Label>First Name</Label>
                            <InputField
                                value={props.firstNameValue}
                                onChange={props.onChange}
                                name={props.firstName}
                            />
                            <Label>Last Name</Label>
                            <InputField
                                value={props.lastNameValue}
                                onChange={props.onChange}
                                name={props.lastName}
                            />
                            <Label>Street Address</Label>
                            <InputField
                                value={props.addressValue}
                                onChange={props.onChange}
                                name={props.addressName}
                            />
                            <Label>City</Label>
                            <InputField
                                value={props.cityValue}
                                onChange={props.onChange}
                                name={props.cityName}
                            />
                            <Label>State</Label>
                            <InputField
                                value={props.stateValue}
                                onChange={props.onChange}
                                name={props.stateName}
                            />
                            <Label>Zip Code</Label>
                            <InputField
                                value={props.zipValue}
                                onChange={props.onChange}
                                name={props.zipName}
                            />
                            <FormBtn
                                onClick={props.onClickSubmit}
                                btnText="Submit"
                                type="submit"
                            />{' '}
                            <FormBtn
                                onClick={props.onClick}
                                btnText="Cancel"
                            />
                        </Form>
                    </Col>
                </Row>
                </MainContainer>
            )
    )
}

export default UserProfile

