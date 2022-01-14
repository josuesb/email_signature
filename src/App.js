/*import logo from './logo.svg';*/
import './App.css';
//Custom components
import Navbar from "./components/Navbar/Navbar"
import Card from "./components/Card/Card"
//Boostrap most used components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>



      <Container className="pt-5">
        <Row className="">
          <Col><Card cardName="Just Text"></Card></Col>
          <Col><Card cardName="Just Text"></Card></Col>
        </Row>
        <Row className="pt-4">
          <Col><Card cardName="Just Text"></Card></Col>
          <Col><Card cardName="Just Text"></Card></Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
