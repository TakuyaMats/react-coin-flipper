import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { choice } from './helpers'
import Coin from './Coin';
import './Game.css'

class Game extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/70/2021-P_US_Quarter_Obverse.jpg' },
            {side: 'tails', imgSrc: 'https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png' }
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flip() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            };
        })
    }
    handleClick(e) {
        this.flip();
    }
    render() {
        return(
            <Container className="Game">
                <Row><Col><h1>Let's flip a coin!</h1></Col></Row>
                <Row>{this.state.currCoin && <Coin info={this.state.currCoin}/>}</Row>
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