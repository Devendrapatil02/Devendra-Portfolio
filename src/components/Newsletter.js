import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   if (status === 'success') clearFields();
  // }, [status])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   email &&
  //   email.indexOf("@") > -1 &&
  //   onValidated({
  //     EMAIL: email
  //   })
  // }

  // const clearFields = () => {
  //   setEmail('');
  // }

  return (
    <Col lg={15}>
    <div className="newsletter-bx wow slideInUp" style={{ height: "200px" }}> {/* Adjust the height as needed */}
      <Row>
        <Col lg={{ span: 12, offset: 3 }} md={5} xl={{ span: 12, offset: 0 }}>
          <h3 className="text-center">"In a world of constant evolution, technology is the compass that guides us toward a brighter tomorrow"<br></br> </h3>
        </Col>
      </Row>
    </div>
  </Col>
  
  
  )
}
