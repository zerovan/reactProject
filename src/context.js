import React, { Component } from 'react';
const Context = React.createContext();

const reducer = (state, action) => {

    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
}
export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "ali",
                phone: "09158787242"
            },
            {
                id: 2,
                name: "mohammmad",
                phone: "09355187991"
            },
            {
                id: 3,
                name: "ashraf",
                phone: "09151506382"
            }
        ],
        dispatch: action => {
            this.setState(state =>
                reducer(state, action)
            )
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;