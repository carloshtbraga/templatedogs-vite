import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import './ModalG.css'

export default function GridG() {
  const [openDialog, setOpenDialog] = useState(null);

  const openModal = (itemId) => {
    setOpenDialog(itemId);
  };

  const closeModal = () => {
    setOpenDialog(null);
  };

  const grid = [1, 2, 3, 4];

  return (
    <>
      {grid.map((item) => (
        <Container key={item} className="animate__animated animate__fadeInUp">
          <Row>
            <Col>
              <button onClick={() => openModal(item)} className='button-x'>
                <img
                  src="https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg"
                  alt=""
                />
              </button>
              <dialog
                open={openDialog === item}
                id={item}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 9999, // Define um z-index alto para o modal
                }}
              >
                <div className="dialog-container">
                  <button onClick={closeModal}>X</button>
                  <section>
                    <p>
                      Você pode me encontrar através do meu portfólio pessoal,
                      LinkedIn ou GitHub!
                    </p>
                  </section>
                </div>
              </dialog>
            </Col>
            <Col>
              <button onClick={() => openModal(item)} className='button-x'>
                <img
                  src="https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg"
                  alt=""
                />
              </button>
              <dialog
                open={openDialog === item}
                id={item}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 9999, // Define um z-index alto para o modal
                }}
              >
                <div className="dialog-container">
                  <button onClick={closeModal}>X</button>
                  <section>
                    <p>
                      Você pode me encontrar através do meu portfólio pessoal,
                      LinkedIn ou GitHub!
                    </p>
                  </section>
                </div>
              </dialog>
            </Col>
            <Col>
              <button onClick={() => openModal(item)} className='button-x'>
                <img
                  src="https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg"
                  alt=""
                />
              </button>
              <dialog
                open={openDialog === item}
                id={item}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 9999, // Define um z-index alto para o modal
                }}
              >
                <div className="dialog-container">
                  <button onClick={closeModal}>X</button>
                  <section>
                    <p>
                      Você pode me encontrar através do meu portfólio pessoal,
                      LinkedIn ou GitHub!
                    </p>
                  </section>
                </div>
              </dialog>
            </Col>
            <Col>
              <button onClick={() => openModal(item)} className='button-x'>
                <img
                  src="https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg"
                  alt=""
                />
              </button>
              <dialog
                open={openDialog === item}
                id={item}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 9999, // Define um z-index alto para o modal
                }}
              >
                <div className="dialog-container">
                  <button onClick={closeModal}>X</button>
                  <section>
                    <p>
                      Você pode me encontrar através do meu portfólio pessoal,
                      LinkedIn ou GitHub!
                    </p>
                  </section>
                </div>
              </dialog>
            </Col>
          </Row>
          <br />
        </Container>
      ))}
    </>
  );
}
