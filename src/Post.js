import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Post.css";
import { Button } from 'react-bootstrap';
import { FiArrowUp, FiArrowDown, FiMessageSquare, FiShare } from 'react-icons/fi';

export default function Post({ data }) {

    return (
        <Card className="bg-light" style={{marginTop: 10}}>
            <Card.Header style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                {data.community !== null && <a href='' className='head comunity'>{data.community} | </a>}
                <a href="" className='head username'>Posted by {data.user}</a>
                <small className='ms-auto'>{data.date}</small>
            </Card.Header> 
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.content}</Card.Text>
                {data.image !== null && <Card.Img src={require(`./assets/interesting.jpeg`)} alt='' />}
                <span>
                    <Button className="btn btn-light align-items-center" onClick={() => console.log("hi")}>
                        <FiArrowUp style={{marginRight: 5}}/>
                        {data.likes}
                    </Button>
                    <Button className="btn btn-light d-inline-flex align-items-center">
                        <FiArrowDown style={{marginRight: 5}}/>
                        {data.dislikes}
                    </Button>
                    <Button className="btn btn-light d-inline-flex align-items-center">
                        <FiMessageSquare style={{marginRight: 5}}/>
                        Comment
                    </Button>
                    <Button className="btn btn-light d-inline-flex align-items-center">
                        <FiShare style={{marginRight: 5}} />
                        Share
                    </Button>
                </span>     
            </Card.Body>
                       
        </Card>
    )
}