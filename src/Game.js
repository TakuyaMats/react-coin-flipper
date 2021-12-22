import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CoinHeads from './CoinHeads';
import CoinTails from './CoinTails';
import './Game.css'

class Game extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: `${CoinHeads}` },
            {side: 'tails', imgSrc: `${CoinTails}` }
        ]
    }
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
    }
    // flip() {

    // }
    // handleClick() {
    //     this.flip();
    // }
    render() {
        return(
            <Container className="Game">
                <Row><Col><h1>Let's flip a coin!</h1></Col></Row>
                <Row><CoinHeads /></Row>
                <Button 
                    className="Game-btn"
                    onClick={this.handleClick}
                    >PLAY ME</Button>
                <Row><p>Out of {this.state.nFlips}, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p></Row>
            </Container>
        )
    }
}

export default Game;