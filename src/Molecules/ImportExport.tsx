import Button from "../Components/Button";
import TextArea from "../Components/TextArea";
import TextField from "../Components/TextField";

function ImportExport() {
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
        >
          Copy
        </Button>
      </div>
      <TextArea
        style={{ height: "90%", width: "100%", resize: "none" }}
        placeholder="Kuvata JSON here. "
      />
    </div>
  );
}

export default ImportExport;
