import React, {Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Leagues.css';

export default class Leagues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leagues: [],
            topFiveLeagues: []
        }
    }
    componentDidMount() {
        axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(response => {
                const leagues =response.data.leagues;
                const soccerLeagues = leagues.filter((res)=> {
                    return res.strSport === 'Soccer';
                })
                console.log(soccerLeagues);
                this.setState({ leagues: soccerLeagues });
                return soccerLeagues;
            });
    }

    render() {
        const post = this.state.leagues.map((match) => {
        return (
            <Col key={match.idLeague} md={4}>
                <Card className="leagueRow" >
                {match.strLeague}
                </Card>
            </Col>
        ) 
        })

        return (
            <div className="leaguesPage">
                <Row>{post}</Row>
            </div>
        )
    }
}
