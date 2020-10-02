import React, { useState, Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    render() {
        // const [isOpen, setIsOpen] = useState(false);
        // const toggle = () => setIsOpen(!isOpen);
        const { navCollapsed } = this.state
        const loginRegLink = (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/register">Register</NavLink>
                </NavItem>
            </Nav>
        )
        const userLink = (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} onClick={this.logOut.bind(this)}>Logout</NavLink>
                </NavItem>
            </Nav>
        )
        return (
            <div>
                <Navbar color="info" dark expand="md">
                    <NavbarBrand tag={Link} to="/">Thanatip</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/category">category</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/products">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/users">Users</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/fileupload">upload</NavLink>
                            </NavItem>
                        </Nav>
                        {localStorage.usertoken ? userLink : loginRegLink}
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default withRouter(Header);