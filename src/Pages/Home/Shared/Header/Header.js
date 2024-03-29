import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"> <span className='green-color'>Fitness Habit</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home"><span className="text-white">Home</span></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services"><span className="text-white">Services</span></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#trainer"><span className="text-white">Trainer</span></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#offers"><span className="text-white">Offers</span></Nav.Link>
                        <Nav.Link as={Link} to="/shop"><span className="text-white">Shop</span></Nav.Link>
                        <Nav.Link as={Link} to="/timetable"><span className="text-white">TimeTable</span></Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light"> Logout </Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login" >{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;