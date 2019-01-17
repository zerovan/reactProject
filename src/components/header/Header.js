import React, { Component } from 'react';
import { Consumer } from '../../context';
import InputDryCode from './InputDryCode';
import uuid from 'uuid';
class Headers extends Component {
    state = {
        name: "",
        phone: "",
        error: {}
    };

    updateState = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    onSubmitContact = (callback, e) => {
        e.preventDefault();

        let flag = false;
        let validator = {};
        if (this.state.name === "") {
            validator.name = "نام باید وارد شود";
            flag = true;
        }
        if (this.state.phone === "") {
            validator.phone = "موبایل باید وارد شود";
            flag = true;
        }
        if (flag) {
            this.setState({
                error: validator
            });
            return;
        }


        const newContact = {
            id: uuid(),
            name: this.state.name,
            phone: this.state.phone,
        }
        const action = {
            type: 'ADD_CONTACT',
            payload: newContact,
        }
        callback(action);
        this.setState({
            name: '',
            phone: '',
            error: {}
        })
    }

    render() {
        const { name, phone, error } = this.state;
        return (
            <Consumer >
                {value => {
                    const { dispatch } = value;
                    return (
                        <React.Fragment>
                            <br />
                            <div className="container text-right" style={{ direction: 'rtl' }}>
                                <form action="#" onSubmit={this.onSubmitContact.bind(this, dispatch)}>
                                    <InputDryCode
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={this.updateState}
                                        label={"نام"}
                                        error={error.name}
                                    />
                                    <InputDryCode
                                        type="text"
                                        id="phone"
                                        value={phone}
                                        onChange={this.updateState}
                                        label={"تلفن"}
                                        error={this.state.error.phone}
                                    />
                                    <button type="submit" className="btn btn-primary">افزودن</button>
                                </form>
                            </div>
                            <br />
                        </React.Fragment>
                    )
                }
                }
            </Consumer>


        );
    }

}
export default Headers;
