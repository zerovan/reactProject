import React, { Component } from 'react'
import { Consumer } from '../context';
import InputDryCode from './header/InputDryCode';
class Edit extends Component {

    constructor() {
        super();
        this.flag = true;
    }

    state = {
        name: "",
        phone: "",
        error: {},
    }

    onSubmitEditContact = (id, callback, e) => {
        e.preventDefault();

        if (this.state.name === "") {
            this.setState({
                error: {
                    name: "نام باید وارد شود",
                }
            });
            return;
        }
        if (this.state.phone === "") {
            this.setState({
                error: {
                    phone: "موبایل باید وارد شود",
                }
            });
            return;
        }

        const newContact = {
            id,
            name: this.state.name,
            phone: this.state.phone,
        }
        const action = {
            type: 'EDIT_CONTACT',
            payload: newContact,
        }

        callback(action);
        this.props.history.push("/details");
    }
    updateFirstState = (name, phone) => {
        this.setState({
            name,
            phone,
            error: {},
        })
        this.flag = false;

    }
    updateState = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    render() {
        const { editid } = this.props.match.params;
        // contacts[contactIndex].name

        return (
            <Consumer>
                {value => {
                    const { contacts, dispatch } = value;
                    let contactIndex;
                    contacts.forEach((row, index) => {
                        if (row.id == editid) {
                            contactIndex = index;
                            if (this.flag === true) {
                                this.updateFirstState(row.name, row.phone);
                            }
                        }
                    });
                    const { name, phone, error } = this.state;
                    console.log(contactIndex);
                    return (
                        <React.Fragment>
                            <br />
                            <div className="container text-right" style={{ direction: 'rtl' }}>
                                <form action="#" onSubmit={this.onSubmitEditContact.bind(this, editid, dispatch)}>
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
                                    <button type="submit" className="btn btn-primary">اصلاح</button>
                                </form>
                            </div>
                            <br />
                        </React.Fragment>
                    );
                }
                }
            </Consumer>
        );
    }
}
export default Edit