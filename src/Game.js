import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CoinHeads from './CoinHeads';
import CoinTails from './CoinTails';
import './Game.css'

class Game extends Component {
    render() {
        return(
            <Container className="Game">
                <Row><Col><h1>Let's flip a coin!</h1></Col></Row>
                <Row><CoinHeads /></Row>
                <Button className="Game-btn">PLAY ME</Button>
                <Row><p>Out of flips, there have been heads and tails.</p></Row>
            </Container>
        )
    }
}

export default Game;