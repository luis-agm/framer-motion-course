import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.header`
  background: var(--black);
  color: white;
  padding: 20px;
  display: flex;
  > svg {
    margin-right: 20px;
  }
  > * {
    margin: 0;
  }
  h1 {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background: var(--blue);
  border: 0;
  border-radius: 6px;
  outline: none;
  height: 35px;
  width: 100px;
  font-weight: 600;
  color: white;
`;

export const Container = styled.div`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 60px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const Card = motion.custom(styled.div`
  border-radius: 15px;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
  h3 {
    margin-top: 0;
    font-size: 2rem;
  }
  img {
    width: 100%;
  }
`);
