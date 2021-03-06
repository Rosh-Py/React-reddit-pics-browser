import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useGlobalContext } from "../globalContext";
import { Loading } from ".";

function ImageDetails() {
  const route = useLocation();
  const pathName = route.pathname.slice(1);
  const [details, setDetails] = useState(false);
  const { filteredImages, allImages, isLoading } = useGlobalContext();

  // Scroll to top
  window.scrollTo(0, 0);
  const imageDetails = () => {
    let image;
    // console.log(pathName);
    image = allImages.find((c) => c.id === pathName);
    if (image) {
      let {
        title,
        name,
        url,
        author_fullname,
        score,
        upvote_ratio,
        content_categories,
      } = image;

      setDetails({
        title,
        name,
        url,
        author_fullname,
        score,
        upvote_ratio,
        content_categories,
      });
    }
    // console.log("image", image);
  };

  useEffect(imageDetails, [filteredImages, pathName, allImages]);
  const history = useHistory();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="section-center section">
      {details && (
        <Wrapper>
          <div className="image">
            <img src={details.url} alt={`${details.title}`} />
          </div>
          <div className="details">
            <h4 className="heading">{details.title}</h4>
            <div className="main">
              <div className="main-1">
                <div>
                  <span className="title">Name: </span>
                  <span className="text">{details.name}</span>
                </div>
                <div>
                  <span className="title">Author Full Name: </span>
                  <span className="text">{details.author_fullname}</span>
                </div>
                <div>
                  <span className="title">Score: </span>
                  <span className="text">{details.score}</span>
                </div>
                <div>
                  <span className="title">Upvote ratio: </span>
                  <span className="text">{details.upvote_ratio}</span>
                </div>
              </div>
              <div className="main-2">
                <div>
                  <span className="title">Categories: </span>
                  <span className="text">
                    {details.content_categories.toString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  row-gap: 2rem;
  .image {
    width: 100%;
    margin: 0 auto;
  }
  .text {
    font-size: 0.85rem;
  }
  .main {
    display: grid;
    row-gap: 2rem;
    margin-top: 2rem;
  }
  .image img {
    object-fit: auto;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    .main {
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (min-width: 1170px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    align-items: flex-start;
    .image {
      height: 22rem;
      width: 80%;
      box-shadow: var(--light-shadow);
    }
    .heading {
      font-size: 1.75rem;
    }
    .main {
      display: flex;
      justify-content: space-between;
    }
    .main-1 {
      margin-right: 2rem;
    }
    .text {
      font-size: 1rem;
      margin-left: 0.5rem;
    }
    .details {
      margin-top: 3rem;
    }
  }
`;

export default ImageDetails;
