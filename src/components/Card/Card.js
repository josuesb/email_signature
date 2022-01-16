import { React, Component } from 'react';
/*import styles from './CardComponent.module.css'*/
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function SignatureTemplate(props) {
    switch (props.index) {
        case 0:
            return <table>
                <tbody><tr>
                    <td style={{ borderRight: '2px solid rgba(69,102,142,0.5)', paddingRight: '10px' }}>
                        <img src="https://d36urhup7zbd7q.cloudfront.net/1527c31a-089c-40e0-a14d-11e3711c9133/Intersection1.format_png.resize_200x.png" width={65} height={65} alt="logotype" style={{ borderRadius: 0, width: '65px', height: '65px', maxWidth: '120px' }} />
                    </td>
                    <td style={{ fontFamily: 'Arial', textAlign: 'initial', fontStretch: 'normal', lineHeight: 'normal', padding: '0px 10px' }}>
                        <span style={{ color: '#0b5394' }} size={4}><b>{props.name}</b></span>
                        <br />
                        <span style={{ color: '#444444', fontSize: '12px' }}>{props.role}</span><br /><br />
                        <a href={"tel:" + props.phone} style={{ fontFamily: 'Arial' }} target="_blank" rel="noreferrer">
                            <span style={{ color: '#444444', fontSize: '12px' }}>{props.phone}</span></a>
                    </td>
                </tr>
                </tbody>
            </table>;

        case 1:
            return <table>
                <tbody><tr>
                    <td style={{ borderRight: '2px solid rgba(69,102,142,0.5)', paddingRight: '10px' }}>
                        <img src="https://d36urhup7zbd7q.cloudfront.net/1527c31a-089c-40e0-a14d-11e3711c9133/Intersection1.format_png.resize_200x.png" width={65} height={65} alt="logotype" style={{ borderRadius: 0, width: '65px', height: '65px', maxWidth: '120px' }} />
                    </td>
                    <td style={{ fontFamily: 'Arial', textAlign: 'initial', fontStretch: 'normal', lineHeight: 'normal', padding: '0px 10px' }}>
                        <span style={{ color: '#0b5394' }} size={4}><b>{props.name}</b></span>
                        <br />
                        <span style={{ color: '#444444', fontSize: '12px' }}>{props.role}</span><br /><br />
                        <a href={"" + props.url} style={{ fontFamily: 'Arial' }} target="_blank" rel="noreferrer">
                            <span style={{ color: '#444444', fontSize: '12px' }}>{props.url}</span></a>
                    </td>
                </tr>
                </tbody>
            </table>;

        case 2:
            return <table>
                <tbody><tr>
                    <td style={{ borderRight: '2px solid rgba(69,102,142,0.5)', paddingRight: '10px' }}>
                        <img src="https://d36urhup7zbd7q.cloudfront.net/1527c31a-089c-40e0-a14d-11e3711c9133/Intersection1.format_png.resize_200x.png" width={65} height={65} alt="logotype" style={{ borderRadius: 0, width: '65px', height: '65px', maxWidth: '120px' }} />
                    </td>
                    <td style={{ fontFamily: 'Arial', textAlign: 'initial', fontStretch: 'normal', lineHeight: 'normal', padding: '0px 10px' }}>
                        <span style={{ color: '#0b5394' }} size={4}><b>{props.name}</b></span>
                        <br />
                        <span style={{ color: '#444444', fontSize: '12px' }}>{props.role}</span><br /><br />
                        <a href={"" + props.url} style={{ fontFamily: 'Arial' }} target="_blank" rel="noreferrer">
                            <span style={{ color: '#444444', fontSize: '12px' }}>{props.url}</span></a> | <a href={"tel:" + props.phone} style={{ fontFamily: 'Arial' }} target="_blank" rel="noreferrer">
                            <span style={{ color: '#444444', fontSize: '12px' }}>{props.phone}</span></a>
                    </td>
                </tr>
                </tbody>
            </table>;

        default:
            return <table>
                <tbody><tr>
                    <td style={{ borderRight: '2px solid rgba(69,102,142,0.5)', paddingRight: '10px' }}>
                        <img src="https://d36urhup7zbd7q.cloudfront.net/1527c31a-089c-40e0-a14d-11e3711c9133/Intersection1.format_png.resize_200x.png" width={65} height={65} alt="logotype" style={{ borderRadius: 0, width: '65px', height: '65px', maxWidth: '120px' }} />
                    </td>
                    <td style={{ fontFamily: 'Arial', textAlign: 'initial', fontStretch: 'normal', lineHeight: 'normal', padding: '0px 10px' }}>
                        <span style={{ color: '#0b5394' }} size={4}><b>{props.name}</b></span>
                        <br />
                        <span style={{ color: '#444444', fontSize: '12px' }}>{props.role}</span><br /><br />

                    </td>
                </tr>
                </tbody>
            </table>;
    }
}

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
        //copy element in clipboard
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
                        {/*this.signatureTemplate.bind(this.props.innerContentIndex)*/}
                        <SignatureTemplate index={this.props.innerContentIndex} name={this.props.name} role={this.props.role} phone={this.props.phone} url={this.props.url}></SignatureTemplate>
                    </div>
                    <hr></hr>




                    <Button variant="primary" onClick={this.copy.bind(this.e, this.props.cardId)}>Copy this signature</Button>
                </Card.Body>
            </Card>
        )
    }
}


