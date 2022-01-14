import { React, Component } from 'react';
import styles from './CardComponent.module.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default class CardComponent extends Component {
    render() {
        return (
            <Card>
                <Card.Header as="h5">{this.props.cardName}</Card.Header>
                <Card.Body>
                    {/*<Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        sdfsdf
                    </Card.Text>*/}
                    <div className="copyContainer">
                        <p> <b>cograts</b> copied this<br></br>succesfully</p>
                    </div>
                    <hr></hr>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}