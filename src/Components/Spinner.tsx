import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { ComponentSize } from "../Global/Type";
const SSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
`;
const SDots = styled.div`
  background: ${(p) => p.theme.color};
  height: ${(p) => p.theme.size + "px"};
  width: ${(p) => p.theme.size + "px"};
  margin: 2px;
  transition: all 1.5s;
  border-radius: 50px;
`;
interface SpinnerProps {
  cSize?: ComponentSize;
  color?: string;
}

function getSpinnerTheme(p: SpinnerProps): any {
  let size = 6;
  switch (p.cSize) {
    case "small":
      size = 5;
      break;
    case "large":
      size = 7;
      break;
  }
  let color = p.color || "#2c63ff";
  return { size, color };
}
function Spinner(props: SpinnerProps) {
  const [glow, setGlow] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setGlow((prevState) => (prevState + 1) % 3);
    }, 1000);
  }, []);
  const spinnerTheme = useMemo(() => getSpinnerTheme(props), [props]);
  return (
    <SSpinner>
      <SDots style={{ opacity: glow === 0 ? 1 : 0.3 }} theme={spinnerTheme} />
      <SDots style={{ opacity: glow === 1 ? 1 : 0.3 }} theme={spinnerTheme} />
      <SDots style={{ opacity: glow === 2 ? 1 : 0.3 }} theme={spinnerTheme} />
    </SSpinner>
  );
}

export default Spinner;
