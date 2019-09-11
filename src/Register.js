import {Button, Col, Form} from "react-bootstrap";
import React, {Component} from "react";
import axios from 'axios';
class Register extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            email: '',
            name: '',
            role: '',
            password: '',
            errors: {}

        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangeRole(e) {
        this.setState({role: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }
    submituserRegistrationForm(e) {
        e.preventDefault();
        const data = {
            "user_name": this.state.name,
            "user_email": this.state.email,
            "user_role": this.state.role,
            "password": this.state.password
        };
        console.log(data);
        /*        if (this.validateForm()) {
                    console.log(this.state);
                    // var apiBaseUrl = "http://localhost:1288/api/";
                    const data = {
                        "name": this.state.name,
                        "user_email": this.state.email,
                        "user_role": this.state.role,
                        "password": this.state.password
                    };
                    const headers = {
                        'Content-Type': 'application/json',
                    }
                    console.log(data);
                    axios.post(/users/ + 'createUsers', data, {headers: headers}).then(function (response) {
                        console.log("api response: " ,response);
                        if (response.data.success) {
                              localStorage.setItem("u_code", encodeURIComponent(JSON.stringify(response.data.data)));
                              localStorage.setItem('is_done', true);
                              window.location.href = "/";
                            console.log("Login successfull");
                        } else {
                            alert(response.data.message);
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                }*/
    }
    /*validateForm() {

        let errors = {};
        let formIsValid = true;
        if (!this.state.name) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }
        if (typeof this.state.name !== "undefined") {
            if (!this.state.name.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }
        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }
        if (typeof this.state.email !== "undefined") {
//regular expression for email validation
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(this.state.email)) {
                    formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }
        if (!this.state.role) {
            formIsValid = false;
            errors["role"] = "*Please enter your Role no.";
        }
        if (typeof this.state.role !== "undefined") {
            if (!this.state.role.match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["role"] = "*Please enter valid Role no.";
            }
        }

        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }
        if (typeof this.state.password !== "undefined") {
            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });

        return formIsValid;

    }*/


    render() {
        return (
            <div>
                <Col md={{span: 4, offset: 4}}>
                    <Form style={{marginTop: '30px'}} onSubmit= {this.submituserRegistrationForm}>
                        <Form.Group >
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control id="name" type="text" name="name" value={this.state.name} onChange={this.handleChangeName} placeholder="Enter Name"/>
                            <Form.Text   className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" id="exampleEmail" value={this.state.email} onChange={this.handleChangeEmail} type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" id="examplePassword" value={this.state.password} onChange={this.handleChangePassword} type="password" placeholder="Password"/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Select Role</Form.Label>
                            <Form.Control name="role" id="exampleRole" value={this.state.role} onChange={this.handleChangeRole} as="select">
                                <option value="admin">Admin</option>
                                <option value="user">User</option>

                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </div>
        );
    }

}

export default Register;