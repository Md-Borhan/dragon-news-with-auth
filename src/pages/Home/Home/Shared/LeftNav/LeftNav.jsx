import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink";
import EditorsInsight from "../../../../News/EditorsInsight/EditorsInsight";
import { Col, Row } from "react-bootstrap";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4 className="fw-bold mb-3">All Category</h4>
      <div>
        {categories.map((category) => (
          <p className="text-center" key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className=" text-secondary text-decoration-none"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <Row lg={1}>
        <Col>
          <EditorsInsight></EditorsInsight>
        </Col>
      </Row>
    </div>
  );
};

export default LeftNav;
