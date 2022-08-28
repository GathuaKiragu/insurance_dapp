import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="display-4">About the Project</h1>
                    <hr style={{ width: "10rem" }} />
                    <p className="text-left mt-3">In this project, the subscriber periodically pays some amount of money to insurance company and they can sometimes arbitrarily request money from the company.
                    When the company approves this request, the amount requested by the subscriber is then transferred to the subscriber's account.
                  </p>
               
                    <h2 className="text-left">How to Use</h2>
                    <p className="text-left mt-3">
                    Firstly, the insurance company sets the minimum Algo limit balance for the application. If subscriber's account is lower than this ALGO limit, the 
                    subscriber stops the regular payment.  After this process, they are free to set any payment amount and start to pay this amount periodically. 
                    While the subscriber makes their regular payment, they can also request some amount of ALGO from the insurance company. When the insurance company
                    receive their request, it's being assessed and and awaits approval. When insurance company approves this request, the requested amount of ALGOs is then transferred 
                    to subscriber. 

                 
                 </p>
                
                </Col>
                <Col xs={2} />
            </Row>
        </Container>
    );
}

export default About;