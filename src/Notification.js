import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap"
import { FiMoreHorizontal } from "react-icons/fi";
const notifications = require("./notification.json")
const moment = require("moment")

export default function Notification() {

    return (
        <Card className="m-2 bg-light w-100 d-flex" >
            {notifications.map((notification) => (
                <div className="m-2 d-flex align-items-start justify-content-between align-items-start">

                <div>
                    <div className="d-flex">
                        <Card.Text as="small" style={{ marginBottom: '0rem', marginRight: 10 }}>{notification.title}</Card.Text>
                        <Card.Text as="small">{moment.utc(notification.date).fromNow(true)}</Card.Text>
                    </div>
                    <Card.Text as="small">{notification.content}</Card.Text>
                </div>
                <Button className="btn btn-light p-0">...</Button>
                </div>
            ))}
        </Card>
    )
}