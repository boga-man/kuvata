import React, { useState } from "react";
import Modal from "../Components/Modal";

function KVInput() {
  const [modal, showModal] = useState(false);
  return <div>{modal && <Modal cSize="small" />}</div>;
}

export default KVInput;
