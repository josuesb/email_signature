//import React, { Component, useState } from 'react'
import React, { Component } from 'react'
//Custom components
import Navbar from "./components/Navbar/Navbar"
import Card from "./components/Card/Card"
//Boostrap most used components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
//import Alert from 'react-bootstrap/Alert'
/*
function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert key={"idx"} variant={"info"} onClose={() => setShow(false)} dismissible>
        Wondering how to setup your email signature? Please refer to this{' '}
        <Alert.Link href="#">quick guide</Alert.Link> and <Alert.Link href="#">reach out if you have any questions</Alert.Link>.
      </Alert>
    );
  }
  return <></>;
}*/


class App extends Component {
  constructor(props) {
    super(props)

    // Set initial state
    this.state = {
      name: 'John Smith',
      role: 'Developer',
      phone: '(+506) 8888-8888',
      url: 'https://firstfactory.com/',
      showAlert: true
    }

    // Binding this keyword
    this.updateName = this.updateName.bind(this)
    this.updateRole = this.updateRole.bind(this)
    this.updatePhone = this.updatePhone.bind(this)
  }


  updateName(e) {
    // Changing state
    this.setState({
      name:
        e.target.value
    })
  }

  updateRole(e) {
    // Changing state
    this.setState({
      role:
        e.target.value
    })
  }

  updatePhone(e) {
    // Changing state
    this.setState({
      phone:
        e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Container className="pt-3">
          <h1 className="text-center">Email Signature formater</h1>
          <Accordion > {/*defaultActiveKey="0"*/}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Showing email signatures for&nbsp;<b>{this.state.name}, {this.state.role}</b>. Open this section to change the configuration</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" onChange={this.updateName} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="role">
                      <Form.Label>Role</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" onChange={this.updateRole} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" onChange={this.updatePhone} />
                    </Form.Group>
                    <Form.Text id="passwordHelpBlock" muted>
                      Phone numbers must be added in an international format.
                    </Form.Text>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br></br>
          <Row className="">
            <Col><Card cardName={<span><b>1.</b> Simple image signature</span>} cardId="copy1" innerContentIndex={0} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName={<span><b>2.</b> Complete image signature</span>} cardId="copy2" innerContentIndex={1} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>
          <Row className="pt-4">
            <Col><Card cardName={<span><b>3.</b> Simple text signature</span>} cardId="copy3" innerContentIndex={2} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName={<span><b>4.</b> Complete text signature</span>} cardId="copy4" innerContentIndex={3} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>
        </Container>
        <br></br>
      </div>

    )
  }
}

export default App;
