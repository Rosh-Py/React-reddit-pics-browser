import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ImageCard({ title, thumbnail, id }) {
  return (
    <Wrapper>
      <Link to={`/${id}`}>
        <div className="thumbnail-img">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="heading">
          <strong>{title}</strong>
        </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background: var(--bgc-2);
  box-shadow: var(--dark-shadow);
  border-radius: var(--radius);
  overflow: hidden;
  transition: var(--transition);
  :hover {
    transform: scale(1.05);
  }
  .thumbnail-img {
    height: 160px;
    width: 100%;
  }
  .thumbnail-img img {
    object-fit: auto;
  }
  .heading {
    padding: 1.5rem;
    font-size: 1rem;
    color: var(--clr-text-1);
  }
  .details {
    padding: 0rem 1.5rem;
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
  }
  .text {
    font-size: 0.85rem;
  }
`;
export default ImageCard;
