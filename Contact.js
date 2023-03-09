import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "Preeti",
    lastName: "Dagar",
    email: "dagarp72@gmail.com",
    phone: "9671132099",
    message: "I wanted to take a moment to express my sincerest gratitude for taking the time to visit my portfolio.I hope that we will have the chance to connect and collaborate in the future.",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({
        success: true,
        message: "Message sent successfully",
      });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <form
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                  onSubmit={handleSubmit}
                >
                  <h2>Get In Touch</h2>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        readOnly
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        readOnly
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        readOnly
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        readOnly
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows={4}
                        value={formDetails.message}
                        placeholder="Message"
                        readOnly
                      />
                    </Col>
                    
                    {status.message && (
                      <Col size={12}>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    )}
                  </Row>
                </form>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        </Container>
    </section>
  )
}
