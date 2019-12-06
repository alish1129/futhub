import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../Components/Post/Post';
import Row from 'react-bootstrap/Row';


export default class Highlights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: [],
        }
    }
    componentDidMount() {
        axios.get('https://www.scorebat.com/video-api/v1/')
            .then(response => {
                console.log(response.data);
                this.setState({ matches: response.data });
                return response.data;
            });
    }

    render() {
        const post = this.state.matches.map((match, key) => {
            return <Post key={key} thumbnail={match.thumbnail} title={match.title} date={match.date} competition={match.competition} embed={match.embed}/>
        })

        return (
            <Row>{post}</Row>
        )
    }
}
