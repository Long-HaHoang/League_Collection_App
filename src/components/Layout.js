import styled from "styled-components";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <StyledLayout>
      {children}
      <Footer />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  border: lightcoral;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
