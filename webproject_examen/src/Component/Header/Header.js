import React from 'react';
import {Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink} from "reactstrap";
import {NavLink as ReactNavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={ReactNavLink} to="/">Contacts</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={ReactNavLink} to="/addContact/">Add new contact</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Adilet uulu Nuradil</NavbarText>
            </Navbar>
        </header>
    );
};

export default Header;