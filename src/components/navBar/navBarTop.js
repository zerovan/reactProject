import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class navBarTop extends Component {
    render() {
        return (
            <div className="mb-5" style={{ direction: 'rtl' }}>
                <nav className="navbar navbar-dark bg-danger navbar-expand-lg">
                    <span className="navbar-brand">دفترچه تلفن من</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/details">مخاطبین<span className="sr-only">current</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/add">افزودن</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/contact-us/0514-333-4487">تماس با ما</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default navBarTop;