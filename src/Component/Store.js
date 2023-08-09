import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Store = () => {
  const products = productsArr.map((item) => {
    return (
      <Col>
        <Card
          style={{ width: "310px", border: "none" }}
          className="mx-auto mt-5 "
        >
          <Card.Header
            className="mx-auto mb-4"
            style={{
              backgroundColor: "transparent",
              borderBottom: "transparent",
              marginTop: "16px",
            }}
          >
            <h4>{item.title}</h4>
          </Card.Header>

          <Card.Img
            src={`${item.imageUrl}`}
            className="mx-auto "
            style={{
              height: "250px",
              width: "250px",
            }}
          />

          <Card.Text className="mt-5">
            ${item.price}
            <Button className="float-end">ADD TO CART</Button>
          </Card.Text>

          {/* <Card.Img src=`${item.imageUrl}"/250px250"` alt="Card image" /> */}
        </Card>
      </Col>
    );
  });
  return (
    <>
      <Row xs={1} md={2} className="g-4 mx-auto" style={{ width: "60%" }}>
        {products}
      </Row>
    </>
  );
};

export default Store;