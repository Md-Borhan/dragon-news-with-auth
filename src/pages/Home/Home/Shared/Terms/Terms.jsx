import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        natus esse, aspernatur illum doloribus hic, quasi similique voluptate
        vero vel praesentium consequuntur labore corrupti sapiente itaque
        officiis nobis. Eaque eveniet aliquam expedita necessitatibus error
        modi! Excepturi voluptatum ab reprehenderit tenetur odio, animi omnis
        nobis nulla quos similique quidem voluptatem ipsum sapiente eos mollitia
        maiores esse consectetur totam vero dignissimos veritatis amet. Quia
        dolorum facilis accusamus earum ex. In assumenda non, quas blanditiis
        facere harum eaque voluptatem hic eius quam fuga suscipit optio amet
        iure laboriosam maiores sequi sint cupiditate dicta nisi quaerat
        perspiciatis iusto dolores! Perspiciatis vero atque quod nulla.
      </p>
      <p>
        Go Back <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
