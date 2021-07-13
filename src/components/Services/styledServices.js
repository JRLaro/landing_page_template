import styled from "styled-components";

export const Container = styled.div`
  /* height: 800px; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
    /* height: 100vh; */
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
    /* height: 100vh; */
  }
`;
export const Wrapper = styled.div`
  max-width: 1000px;
  /* max-width: 100vh; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 36px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const Card = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
`;
export const H1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const P = styled.p`
  font-size: .8rem;
  text-align: center;
`;
