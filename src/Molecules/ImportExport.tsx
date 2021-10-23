import { useSelector } from "react-redux";
import Button from "../Components/Button";
import TextArea from "../Components/TextArea";
import { useSimaraToast } from "../Global/Context";
import { IStore } from "../Store/store";

interface IImportExport{
  onCloseRequest: ()=>void;
}

function ImportExport(props: IImportExport) {
  const requestStore = useSelector((state: IStore) => state.requestStore);
  const textareaVal = JSON.stringify(requestStore);
  const toast = useSimaraToast();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        padding: "30px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          fontSize: "small",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: "small" }}>JSON</p>
        <Button
          appearance="secondary"
          style={{ marginLeft: "10px" }}
          cSize="small"
          onClick={() => {
            navigator.clipboard.writeText(textareaVal);
            toast({
              title: `Copied!`,
              message: `JSON copied to the clipboard`,
              intent: "success",
            });
            props.onCloseRequest();
          }}
        >
          Copy
        </Button>
      </div>
      <TextArea
        style={{ height: "90%", width: "100%", resize: "none" }}
        placeholder="Add atleast one endpoint to export into JSON"
        value={textareaVal === "[]" ? "" : textareaVal}
      />
    </div>
  );
}

export default ImportExport;
