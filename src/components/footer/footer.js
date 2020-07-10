import React from "react";
import './footer.css'

const Footer = () => {
    const foot = React.createElement('footer', null, '© Copyright Matthew Farrel Corporation')
        return (
            <nav className="footer navbar navbar-expand-md bg-info navbar-dark">
                <span className="navbar-brand">
                </span>
                <button className="navbar-toggler"
                        type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbarFooter">

                </button>
                <div className="collapse navbar-collapse"
                     id="collapsibleNavbarFooter">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <h5>{foot}</h5>
                        </li>
                        <li className="nav-item">
                            <h5><span>{(new Date()).toString()}</span></h5>
                        </li>
                    </ul>
                </div>
            </nav>
        )
}
export default Footer;