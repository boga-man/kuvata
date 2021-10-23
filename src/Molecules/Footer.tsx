import styled from "styled-components";

const SFooter = styled.div`
  height: 4vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
  display: flex;
  justify-content: center;
  font-size: small;
  color: #8d8d8d;
  align-items: center;
  position: fixed;
  bottom: 0;
`;
function Footer() {
  return (
    <SFooter>
      Created with ⚡️ by &nbsp;
      <a style={{ color: "#98ff9d" }} href="https://github.com/orted-org">
        ORTED
      </a>
    </SFooter>
  );
}

export default Footer;
