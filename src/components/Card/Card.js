import { React, Component } from 'react';
import styles from './Card.module.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function SignatureTemplate(props) {
    switch (props.index) {
        case 0:
            return <table>
                <tbody><tr>
                    <td style={{ borderRight: '1px solid rgb(185,185,185)', paddingRight: '13px', paddingLeft: '4px' }}>
                        <img src="https://firstfactory-assets.s3.amazonaws.com/FF_Logo_50px-03.png" width={55} height={55} alt="logotype" style={{ borderRadius: 0, width: '55px', height: '55px' }} />
                    </td>
                    <td style={{ fontFamily: 'Arial', textAlign: 'initial', fontStretch: 'normal', lineHeight: 'normal', padding: '0px 13px' }}>
                        <span style={{ color: '#000000', fontSize: '13px', fontWeight: "400", lineHeight: "20px" }}>{props.name}</span>
                        <br />
                        <span style={{ color: '#000000', fontSize: '13px', fontWeight: "400", lineHeight: "20px" }}>{props.role}, <a style={{ color: "#15c" }} href="https://firstfactory.com/" target="_blank" rel="noreferrer">First Factory, Inc.</a></span>
                        <br />
                        <span style={{ color: '#000000', fontSize: '13px', fontWeight: "400", lineHeight: "20px" }}>{props.phone} | <a style={{ color: "#15c" }} href="https://calendly.com/firstfactory" target="_blank" rel="noreferrer">Book some time</a></span>

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
                        <img src="https://ci6.googleusercontent.com/proxy/36gWHxTeUQNCuj7D_l9e_G-XBl5j2ppIoMowpAiqMO1NrlSU5Y9NUHjo-Mj6GEyQuGgRlsoJUlar_W-NH8iToaJEOYimN2-9XR6llgtS3232ksQSy7V-UKpw9K3hL7pJNHNpq0BH-EQ-3p3TiMNnN3BZm6k8YgQ1g9q-ETdyYeLwL42Ev_w=s0-d-e1-ft#https://d36urhup7zbd7q.cloudfront.net/1527c31a-089c-40e0-a14d-11e3711c9133/Intersection1.format_png.resize_200x.png" width={65} height={65} alt="logotype" style={{ borderRadius: 0, width: '65px', height: '65px', maxWidth: '120px' }} />
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
                <Card.Header>
                    {this.props.cardName}
                    <Button className={styles.floatButtonRight} variant="primary" onClick={this.copy.bind(this.e, this.props.cardId)}>Copy this signature</Button>
                </Card.Header>
                <Card.Body>
                    {/*<Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        sdfsdf
                    </Card.Text>*/}
                    <div className="copyContainer" id={this.props.cardId}>
                        {/*this.signatureTemplate.bind(this.props.innerContentIndex)*/}
                        <SignatureTemplate index={this.props.innerContentIndex} name={this.props.name} role={this.props.role} phone={this.props.phone} url={this.props.url}></SignatureTemplate>
                    </div>

                </Card.Body>
            </Card >
        )
    }
}


