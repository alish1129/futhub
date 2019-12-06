import React, {Component} from 'react';

export default class MatchHighlight extends Component {

    render() {
        const data = this.props.location.state;

        console.log(data);
        
        return (
            <div>MatchHighlight</div>
        )
    }
}