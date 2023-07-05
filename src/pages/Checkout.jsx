import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";

const Checkout = () => {
  const [enterCard, setEnterCard] = useState("");
  const [enterExp, setEnterExp] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCVV, setEnterCVV] = useState("");
  const [enterAdress, setEnterAdress] = useState("");
  const [enterDetail, setDetail] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 15;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      card: enterCard,
      exp: enterExp,
      phone: enterNumber,
      cvv: enterCVV,
      adress: enterAdress,
      datail: enterDetail,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Comprar" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Datos</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Numero de tarjeta"
                    required
                    onChange={(e) => setEnterCard(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Expiracion (ej: 12/24)"
                    required
                    onChange={(e) => setEnterExp(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="CVV"
                    required
                    onChange={(e) => setEnterCVV(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Direccion"
                    required
                    onChange={(e) => setEnterAdress(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Detalle adicional"
                    required
                    onChange={(e) => setDetail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Telefono"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Pagar
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>{cartTotalAmount} Bs</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Envio: <span>{shippingCost} Bs</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>{totalAmount} Bs</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
