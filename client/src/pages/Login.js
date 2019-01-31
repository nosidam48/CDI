import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Form, Label } from "reactstrap";
import { InputField, SubmitBtn } from "../components/Form";
import axios from 'axios'
import MainContainer from "../components/Container"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            id: '',
            password: '',
            loggedIn: false,
            redirectTo: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        let formData = {
            email: this.state.email,
            password: this.state.password
        }
        axios({
            method: "post",
            url: 'user/login',
            data: formData,
        }).then(response => {
            if (response.status === 200) {
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    email: response.data.email,
                    password: response.data.password,
                    id: response.data.id
                })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/'
                })

            }
        }).catch(err => console.log(err))
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <MainContainer>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <h4>Log In</h4>
                            <Form className="mt-3">
                                <Label>Email address</Label>
                                <InputField
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    name="email"
                                    placeholder="Email address"
                                />
                                <Label>Password</Label>
                                <InputField
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    name="password"
                                    placeholder="Password"
                                />
                                <SubmitBtn
                                    disabled={!(this.state.email && this.state.password)}
                                    onClick={this.handleSubmit}
                                />
                            </Form>
                        </Col>
                    </Row>
                </MainContainer>
            )
        }
    }
}

export default Login;