import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaShareAlt,
  FaRegBookmark,
  FaEye,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCardd = ({ news }) => {
  const { _id, title, image_url, details, author, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex gap-3 align-items-center">
        <Image
          style={{ height: "40px", width: "40px" }}
          src={
            author
              ? author.img
              : "https://loremflickr.com/cache/resized/8431_7740889660_06098e7bcf_z_640_360_nofilter.jpg"
          }
          roundedCircle
        />
        <div className="flex-grow-1">
          <p className="mb-0">{author.name}</p>
          <p>
            <small>{moment(author.published_date).format("yyyy-MM-DD")}</small>
          </p>
        </div>
        <div>
          <FaShareAlt className="me-3" />
          <FaRegBookmark />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`} className="fw-semi-bold">
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="d-flex gap-2 flex-grow-1">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <p>{rating.number}</p>
        </div>
        <div>
          {" "}
          <p>
            <FaEye className="me-2"></FaEye>
            {total_view}
          </p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCardd;
