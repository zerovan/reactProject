import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
class Headers extends Component {
    state = {
        name: "",
        phone: "",
    };

    updateState = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    onSubmitContact = (callback, e) => {
        e.preventDefault();
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
    }

    render() {
        const { name, phone } = this.state;
        return (
            <Consumer >
                {value => {
                    const { dispatch } = value;
                    return (
                        <React.Fragment>
                            <br />
                            <div className="container text-right" style={{ direction: 'rtl' }}>
                                <form action="#" onSubmit={this.onSubmitContact.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">نام</label>
                                        <input
                                            type="text" className="form-control"
                                            id="name"
                                            value={name}
                                            onChange={this.updateState} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">تلفن</label>
                                        <input type="text" className="form-control" id="phone" value={phone} onChange={this.updateState} />
                                    </div>
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
