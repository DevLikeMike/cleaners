import styled from "styled-components";

const Content = styled.section`
  padding: 1rem 3rem;
`;

export default function ContentContainer({ children, pageName }) {
  return <Content className={pageName}>{children}</Content>;
}
