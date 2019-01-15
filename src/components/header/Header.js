import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
class Headers extends Component {

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmitContact = (callback, e) => {
        e.preventDefault();
        const newContact = {
            id: uuid(),
            name: this.nameInput.current.value,
            phone: this.phoneInput.current.value,
        }

        const action = {
            type: 'ADD_CONTACT',
            payload: newContact,
        }
        callback(action);
    }

    static defaultProps = {
        name: "محمد",
        phone: "099999999"
    }

    render() {
        const { name, phone } = this.props;
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
                                            defaultValue={name}
                                            ref={this.nameInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">تلفن</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            defaultValue={phone}
                                            ref={this.phoneInput}
                                        />
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
