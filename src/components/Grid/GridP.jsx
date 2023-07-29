import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function GridP() {
  const grid = [1, 2, 3, 4];
  return (
    <>
      {grid.map((item) => (
        <Container key={item} className="animate__animated animate__fadeInUp">
          <Row>
            <Col>
              <img
                src="https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg"
                alt=""
              />
            </Col>
            <Col>
              <img
                src="https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg"
                alt=""
              />
            </Col>
          </Row>
          <br />
        </Container>
      ))}
    </>
  );
}
