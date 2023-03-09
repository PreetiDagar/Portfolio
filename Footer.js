import { Container, Row, Col } from "react-bootstrap";


import navIcon1 from "../assets/img/navIcon1.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
           
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/PreetiDagar"><img src={navIcon1} alt="Icon" /></a>
              
            </div>
           
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
