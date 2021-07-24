import React, { useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { ImageCard, SearchFilter, Loading } from ".";
import { useGlobalContext } from "../globalContext";
import { MdKeyboardArrowUp } from "react-icons/md";

function Images() {
  const {
    allImages,
    filteredImages,
    updateFilteredImages,
    searchValue,
    isLoading,
  } = useGlobalContext();

  // Filtering logic starts
  useEffect(() => {
    let updatedResult = [...allImages];
    if (searchValue) {
      updatedResult = updatedResult.filter((image) =>
        image.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    updateFilteredImages(updatedResult);
  }, [searchValue, allImages]);
  // Filtering logic ends
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Filters className="section-center">
        <SearchFilter />
      </Filters>
      <Wrapper className="section-center">
        {filteredImages.map((image) => {
          const { title, thumbnail, id } = image;
          return (
            <ImageCard
              key={uuidv4()}
              id={id}
              title={title}
              thumbnail={thumbnail}
            />
          );
        })}
        <MdKeyboardArrowUp
          className="scroll-top"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  margin: 2rem auto;
  grid-template-columns: repeat(auto-fill, 270px);
  transition: var(--transition);
  gap: 3rem;

  .scroll-top {
    font-size: 2rem;
    position: fixed;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid var(--clr-text-2);
    bottom: 2rem;
    right: 2rem;
    animation: bounce 2s ease infinite;
  }
  @media screen and (min-width: 768px) {
    .scroll-top {
      font-size: 3rem;
    }
  }
`;

const Filters = styled.div`
  display: grid;
  margin: 1rem auto;
  row-gap: 2rem;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 6.8rem;
    padding-right: 6.8rem;
  }
`;

export default Images;
