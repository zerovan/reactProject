import React, { Component } from 'react';
import Detail from './Detail.js';
import { Consumer } from '../context';

class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    console.log(contacts);
                    return (
                        <React.Fragment>
                            {contacts.map(row => (
                                <Detail key={row.id} contact={row} />
                            )
                            )}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}
export default Contacts;