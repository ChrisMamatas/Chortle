import React, { useState } from "react";
import NavBar from "./NavBar";
import Post from "./Post";
import CreatePost from "./CreatePost";
import CurrentPage from "./CurrentPage";
import Notification from "./Notification";
import { Container, Row, Col } from "react-bootstrap";
const posts = require("./posts.json");

export default function Home() {

    const [notifcationsOpen, setNotificationOpen] = useState(false)

    function ToggleNotifications() {
        console.log("called")
        setNotificationOpen(!notifcationsOpen)
    }

    return (
        <div style={{paddingTop: 70}}>
        <NavBar toggleNotifications={ToggleNotifications}/>
        <Container>
            <Row>
                <Col xs={3}>
                    <CurrentPage />
                </Col>
                <Col xs={6} >
                    <div style={{marginBottom: 10}}>
                    <CreatePost />
                    {posts.map((post) => (
                        <Post data={post} />
                    ))}
                    </div>
                </Col>
                <Col xs={3}>
                    {notifcationsOpen === true && (<Notification />)}
                </Col>
            </Row>
        </Container>
        </div>
    );
}
