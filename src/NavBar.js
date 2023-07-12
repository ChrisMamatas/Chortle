import { Container, Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap"
import { FiBell } from "react-icons/fi"
import { FiMessageCircle } from "react-icons/fi"

export default function NavBar(props) {

    function Title() {
        return (
            <span style={{alignItems: "center"}}>
                <img src={require("./assets/profile-default.png")} width={25} height={25} style={{marginRight: 10}} alt=""/>
                <span>Username</span>
            </span>
        )
    }

    return (
        <Navbar collapseOnSelect className="bg-light" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Chortler</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Browse</Nav.Link>
                </Nav>
                <Form className="d-flex flex-grow-1 m-2">
                    <Form.Control type="search" placeholder="Search"/>
                </Form>
                <Nav>
                    <Button className="btn btn-light btn-small" onClick={() => console.log("hi")}><FiMessageCircle size={20}/></Button>
                    <Button className="btn btn-light btn-small" onClick={props.toggleNotifications}><FiBell size={20} /></Button>
                    <NavDropdown className="m-2" title={<Title />} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}