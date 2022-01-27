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
                       
                    </td>
                </tr>
                </tbody>
            </table>;

        case 1:
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

        case 2:
            return <table>
                <tbody><tr>
                    <td style={{ fontFamily: 'Arial', textAlign: 'initial', fontStretch: 'normal', lineHeight: 'normal', padding: '0px 13px' }}>
                        <span style={{ color: '#000000', fontSize: '13px', fontWeight: "400", lineHeight: "20px" }}>{props.name}</span>
                        <br />
                        <span style={{ color: '#000000', fontSize: '13px', fontWeight: "400", lineHeight: "20px" }}>{props.role}, <a style={{ color: "#15c" }} href="https://firstfactory.com/" target="_blank" rel="noreferrer">First Factory, Inc.</a></span>
                      
                    </td>
                </tr>
                </tbody>
            </table>;

        default:
            let signatureSecondLine;
            if (props.role.length>=20) 
            signatureSecondLine=<span style={{ color: '#000000', fontSize: '13px', fontWeight: "400", lineHeight: "20px" }}>{props.role}<br></br> <a style={{ color: "#15c" }} href="https://firstfactory.com/" target="_blank" rel="noreferrer">First Factory, Inc.</a></span>;
            else
            signatureSecondLine=<span style={{ color: '#000000', fontSize: '13px', fontWeight: "400", lineHeight: "20px" }}>{props.role}, <a style={{ color: "#15c" }} href="https://firstfactory.com/" target="_blank" rel="noreferrer">First Factory, Inc.</a></span>;

            return <table>
                <tbody><tr>
                    <td style={{ fontFamily: 'Arial', textAlign: 'initial', fontStretch: 'normal', lineHeight: 'normal', padding: '0px 13px' }}>
                        <span style={{ color: '#000000', fontSize: '13px', fontWeight: "400", lineHeight: "20px" }}>{props.name}</span>
                        <br />
                        {signatureSecondLine}
                        <br />
                        <span style={{ color: '#000000', fontSize: '13px', fontWeight: "400", lineHeight: "20px" }}>{props.phone} | <a style={{ color: "#15c" }} href="https://calendly.com/firstfactory" target="_blank" rel="noreferrer">Book some time</a></span>
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
                    <div className={styles.cardBodyContainter}>
                        <div className="copyContainer" id={this.props.cardId}>
                            <SignatureTemplate index={this.props.innerContentIndex} name={this.props.name} role={this.props.role} phone={this.props.phone} url={this.props.url}></SignatureTemplate>
                        </div>
                    </div>
                </Card.Body>
            </Card >
        )
    }
}


