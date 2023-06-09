import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const News = () => {
  const news = useLoaderData();
  const { _id, title, image_url, details, category_id } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              {" "}
              <FaArrowLeft></FaArrowLeft> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Row sm={1} md={2} lg={3}>
        <Col>
          <EditorsInsight></EditorsInsight>
        </Col>
      </Row>
    </div>
  );
};

export default News;
