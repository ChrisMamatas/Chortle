import React from "react";
import { Card } from "react-bootstrap";

export default function CurrentPage() {

    return (
        <Card className="m-2 bg-light" style={{marginTop: 10}}>
            <Card.Body>
                <Card.Title>Home</Card.Title>
                <Card.Text>Your home page. Check out your followed users and community here!</Card.Text>
            </Card.Body>
        </Card>
    )
}