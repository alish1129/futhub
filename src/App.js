import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Post from './Components/Post/Post';
import Header from './Components/Header/Header';

export default class App extends Component {
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
            this.setState({matches: response.data});
            return response.data;
        });
    }

    render () {
        const post = this.state.matches.map((match) => {
           return <Post thumbnail={match.thumbnail} title={match.title} date={match.date} competition={match.competition}/>
        });
        return (
            <div className="main">
                <Header/>
                <div className="App">
                    <Row>
                            {post}
                    </Row>
                </div>
            </div>   
        );
    }
}
