import React, { Component } from 'react'
//Custom components
import Navbar from "./components/Navbar/Navbar"
import Card from "./components/Card/Card"
//Boostrap most used components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




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
          <input type="text" onChange={this.updateName} placeholder="Name" />{" "}
          <input type="text" onChange={this.updateRole} placeholder="Role" />{" "}
          <input type="text" onChange={this.updatePhone} placeholder="Phone" />{" "}
          <input type="text" onChange={this.updateURL} placeholder="Website" />{" "}
          <br></br>
          <br></br>
          <Row className="">
            <Col><Card cardName="No website URL" cardId="copy1" innerContentIndex={0} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName="No phone number" cardId="copy2" innerContentIndex={1} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>
          <Row className="pt-4">
            <Col><Card cardName="Phone number and website" cardId="copy3" innerContentIndex={2} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
            <Col><Card cardName="Simple" cardId="copy4" innerContentIndex={3} name={this.state.name} role={this.state.role} phone={this.state.phone} url={this.state.url}></Card></Col>
          </Row>


        </Container>
      </div>

    )
  }
}

export default App;
