import { useState } from "react";
import styled from "styled-components";
import { SimaraToastManagerContext } from "../Global/Context";
import { ISimaraToast } from "../Global/Interface";
import Toast from "./Toast";
let globalCounter = 0;
const STM = styled.section`
  box-sizing: border-box;
  width: 400px;
  max-width: 90%;
  z-index: 99;
  width: fit-content;
  height: fit-content;
  position: fixed;
  right: 10px;
  bottom: 20px;
  @media (max-width: 480px) {
    right: 50%;
    transform: translate(50%, 0);
  }
`;
interface STMProps {
  children?: React.ReactNode;
}
interface ISimaraToastExtended extends ISimaraToast {
  id: string;
}
function ToastManager(props: STMProps) {
  const [toasts, setToasts] = useState<ISimaraToastExtended[]>([]);
  function showToast(data: ISimaraToast) {
    setToasts((prevState) => {
      const temp: ISimaraToastExtended[] = [];
      for (let i = 0; i < prevState.length; i++) {
        temp.push(prevState[i]);
      }
      temp.push({ ...data, id: "toast" + globalCounter++ });
      return temp;
    });
  }
  function removeToast(id: string) {
    setToasts((prevState) => {
      const temp: ISimaraToastExtended[] = [];
      for (let i = 0; i < prevState.length; i++) {
        if (id !== prevState[i].id) temp.push(prevState[i]);
      }
      return temp;
    });
  }
  return (
    <SimaraToastManagerContext.Provider
      value={{ toastData: toasts, showToast }}
    >
      {props.children}
      <STM>
        {toasts.map((item, index) => {
          return (
            <Toast
              key={item.id}
              {...item}
              onClose={() => {
                removeToast(item.id);
              }}
            />
          );
        })}
      </STM>
    </SimaraToastManagerContext.Provider>
  );
}

export default ToastManager;
