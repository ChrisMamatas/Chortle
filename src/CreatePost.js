import React from "react";
import { Form } from "react-bootstrap"
import "./CreatePost.css"
import { FiImage, FiLink } from "react-icons/fi";
import { Button } from "react-bootstrap"

export default function CreatePost() {

    return (
        <div className="bg-light" style={{border: "1px solid lightgray", borderRadius: 5, marginTop: 10}}>
            <Form className="form d-flex justify-content-between">
            <Button className="btn btn-light">
                <img src={require("./assets/profile-default.png")} width={50} height={50} className="p-2" alt=""/>
            </Button>
            <Form.Control className="textInput" type="text" placeholder="Create Post" style={{margin: 5}} />
            <Button className="btn btn-light">
                <FiImage size={20}/>
            </Button>
            <Button className="btn btn-light">
                <FiLink size={20}/>
            </Button>
            </Form>
        </div>
    )
}