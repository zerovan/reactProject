import React, { Component } from 'react';
import axios from 'axios';

export default class apiTest extends Component {
    state = {

    }
    componentDidMount() {
        axios.get('https://api.github.com/users/zerovan')
            .then(res => console.log(res));

    }
    render() {
        return (
            <div>
                in test
            </div>
        )
    }
}
