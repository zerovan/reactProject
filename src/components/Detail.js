import React, { Component } from 'react';
import propType from 'prop-types';
import { Consumer } from '../context';

class Detail extends Component {
    state = {
        count: false
    };

    Myclick(e) {
        this.setState({
            count: !this.state.count
        });
    }

    trash = (id, dispatch) => {
        const action = {
            type: "DELETE_CONTACT",
            payload: id
        }
        dispatch(action);

    }

    render() {
        const contact = this.props.contact;
        return (
            <Consumer>
                {value => {
                    return (
                        <React.Fragment>
                            <h1>
                                <div className="container">
                                    {this.state.count ?
                                        (<div className='alert alert-primary'>
                                            <span onClick={this.Myclick.bind(this)}>{contact.name}</span>
                                            <span className="float-right"><i className="fa fa-trash" onClick={this.trash.bind(this, contact.id, value.dispatch)}></i></span>
                                        </div>) :
                                        (<div className='alert alert-danger'>
                                            <span onClick={this.Myclick.bind(this)}>{contact.phone}</span>
                                            <span className="float-right"><i className="fa fa-trash" onClick={this.trash.bind(this, contact.id, value.dispatch)}></i></span>
                                        </div>)
                                    }
                                </div>

                            </h1>
                        </React.Fragment>
                    );
                }
                }
            </Consumer>
        );
    }

}

Detail.propType = {
    contact: propType.object.isRequired

}
export default Detail;
