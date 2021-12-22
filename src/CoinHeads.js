import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import './CoinHeads.css';

class CoinHeads extends Component {
    render() {
        return(
            <Row>
                <Col xs={6} md={4}>
                    <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/70/2021-P_US_Quarter_Obverse.jpg"
                        className="Coin-heads"
                        alt=""
                        rounded />
                </Col>
            </Row>
        )
    }
}

export default CoinHeads;