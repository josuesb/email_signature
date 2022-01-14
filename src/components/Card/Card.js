import { React, Component } from 'react';
/*import styles from './CardComponent.module.css'*/
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class CardComponent extends Component {
    constructor(props) {
        super(props);

        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.copy = this.copy.bind(this);
        this.copyToClip = this.copyFormated.bind(this);
    }

    copy(id) {
        //get element
        let element = document.getElementById("" + id).innerHTML;
        this.copyFormated(element);
    }

    copyFormated(str) {
        function listener(e) {
            e.clipboardData.setData("text/html", str);
            e.clipboardData.setData("text/plain", str);
            e.preventDefault();
        }
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        document.removeEventListener("copy", listener);
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">{this.props.cardName}</Card.Header>
                <Card.Body>
                    {/*<Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        sdfsdf
                    </Card.Text>*/}
                    <div className="copyContainer" id={this.props.cardId}>
                        {this.props.innerContent}
                    </div>
                    <hr></hr>




                    <Button variant="primary" onClick={this.copy.bind(this.e, this.props.cardId)}>Copy this signature</Button>
                </Card.Body>
            </Card>
        )
    }
}


