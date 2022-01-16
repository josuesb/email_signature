import React, { Component } from 'react'
//Custom components
import Navbar from "./components/Navbar/Navbar"
import Card from "./components/Card/Card"
//Boostrap most used components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'




class App extends Component {
  constructor(props) {
    super(props)

    // Set initial state
    this.state = {
      name: 'John Smith',
      role: 'Developer',
      phone: '(+506) 8888-8888',
      url: 'josuesb.com'
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
        <Container className="pt-5">
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



          <br></br>
          <Row className="">
            <Col><Card cardName="No website URL" cardId="copy1" innerContentIndex={0} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName="No phone number" cardId="copy2" innerContentIndex={1} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>
          <Row className="pt-4">
            <Col><Card cardName="Phone number and website" cardId="copy3" innerContentIndex={2} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName="Simple" cardId="copy4" innerContentIndex={3} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>
          {/**ADDED TO TEST SCROLL - START *}
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
