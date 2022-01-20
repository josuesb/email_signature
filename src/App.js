import React, { Component, useState } from 'react'
//Custom components
import Navbar from "./components/Navbar/Navbar"
import Card from "./components/Card/Card"
//Boostrap most used components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import Alert from 'react-bootstrap/Alert'
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
      url: 'josuesb.com',
      showAlert: true
    }

    // Binding this keyword
    this.updateName = this.updateName.bind(this)
    this.updateRole = this.updateRole.bind(this)
    this.updatePhone = this.updatePhone.bind(this)
    this.updateURL = this.updateURL.bind(this)
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

  updateURL(e) {
    // Changing state
    this.setState({
      url:
        e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Container className="pt-3">
          <h1 className="text-center">Email Signature formater</h1>
          {/*}
          <AlertDismissible></AlertDismissible>
    {*/}
          <Accordion defaultActiveKey="0">
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
                  <Col>
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Website</Form.Label>
                      <Form.Control type="text" placeholder="Enter your website URL" onChange={this.updateURL} />
                    </Form.Group>
                    <Form.Text id="passwordHelpBlock" muted>
                      Please include the full URL of your website, including protocols like https.
                    </Form.Text>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>









          <br></br>
          <Row className="">
            <Col><Card cardName="No website URL" cardId="copy1" innerContentIndex={0} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName="No phone number" cardId="copy2" innerContentIndex={1} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>
          <Row className="pt-4">
            <Col><Card cardName="Phone number and website" cardId="copy3" innerContentIndex={2} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName="Simple" cardId="copy4" innerContentIndex={3} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>
          {/**ADDED TO TEST SCROLL - START */}
          <Row className="pt-4">
            <Col><Card cardName="Phone number and website" cardId="copy3" innerContentIndex={2} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName="Simple" cardId="copy4" innerContentIndex={3} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>

          <Row className="pt-4">
            <Col><Card cardName="Phone number and website" cardId="copy3" innerContentIndex={2} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName="Simple" cardId="copy4" innerContentIndex={3} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>

          <Row className="pt-4">
            <Col><Card cardName="Phone number and website" cardId="copy3" innerContentIndex={2} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName="Simple" cardId="copy4" innerContentIndex={3} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>

          {/**ADDED TO TEST SCROLL - END */}
        </Container>
        <br></br>
      </div>

    )
  }
}

export default App;
