import styled from "styled-components";

const Foot = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export default function Footer() {
  return (
    <Foot>
      <h4>Mama Bear Cleaning Services copyright &copy; 2021</h4>
    </Foot>
  );
}
