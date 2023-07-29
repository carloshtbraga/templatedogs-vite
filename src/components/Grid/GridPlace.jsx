import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function GridPlace() {

  return (
    <>
     
        <Container className="animate__animated animate__fadeInUp">
          <Row>
            
            <Col>
              <img
                src="https://curitibacult.com.br/wp-content/uploads/2015/01/5891374376_d6515c9feb.jpg"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://infonet.com.br/wp-content/uploads/2022/01/caesnaadasfa_foto_adasfa_01022022.jpg"
                alt=""
              />
            </Col>
          </Row>
          <br />
        </Container>
        <Container className="animate__animated animate__fadeInUp">
          <Row>
            
            <Col>
              <img
                src="https://simoesfilhofm.com.br/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-19-at-11.47.10-1-1.jpeg"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://cdn6.campograndenews.com.br/uploads/noticias/2022/03/04/e43541c46cdf5d80b49a0efd1404042aa6af0387.jpeg"
                alt=""
              />
            </Col>
          </Row>
          <br />
        </Container>
    </>
  );
}
