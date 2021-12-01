import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import './CoinTails.css';

class CoinTails extends Component {
    render() {
        return(
            <Row>
                <Col xs={6} md={4}>
                    <Image 
                        src="https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"
                        className="Coin-tails"
                        rounded />
                </Col>
            </Row>
        )
    }
}

export default CoinTails;