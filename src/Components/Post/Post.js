import React from 'react';
import './Post.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import TimeAgo from 'react-timeago';
import Button from 'react-bootstrap/Button';

const Post = (props) => (
    <Col className="column" md={3}>
        <Card className="cardComponent">
            <Card.Img className="thumbnail" src={props.thumbnail} />
            <Card.Body>
                <Card.Title>
                    <span>{props.title}</span>
                </Card.Title>
                <p>{props.competition.name}</p>
                <Button variant="info" onClick={() => {
                    
                }}
                >Watch Now</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted"><TimeAgo date={props.date} /></small>
            </Card.Footer>
        </Card>
    </Col>
);

export default Post;