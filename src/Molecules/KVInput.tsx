import { useEffect, useState } from "react";
import Button from "../Components/Button";
import { IconPlus } from "../Components/Icons";
import TextField from "../Components/TextField";
import { IKeyValue } from "../Interfaces/Global";
import KVDisplay from "./KVDisplay";
function addKeyValue(
  data: IKeyValue<string, string>,
  to: IKeyValue<string, string>[]
): IKeyValue<string, string>[] {
  const temp: IKeyValue<string, string>[] = [];
  for (let i = 0; i < to.length; i++) {
    temp.push(to[i]);
  }
  temp.push(data);
  return temp;
}
function removeKeyValue(
  index: number,
  from: IKeyValue<string, string>[]
): IKeyValue<string, string>[] {
  const temp: IKeyValue<string, string>[] = [];
  for (let i = 0; i < from.length; i++) {
    if (i !== index) {
      temp.push(from[i]);
    }
  }
  return temp;
}
interface KVInputProps {
  title?: string;
  data?: IKeyValue<string, string>[];
  onChange?: (data: IKeyValue<string, string>[]) => void;
  intent?: "info" | "danger" | "success" | "warning" | "grey";
}

// cmp
function KVInput(props: KVInputProps) {
  const [editKV, setEditKV] = useState<IKeyValue<string, string>>({
    kei: "",
    value: "",
  });
  const [kvStore, setKvStore] = useState<IKeyValue<string, string>[]>([]);
  useEffect(() => {
    if (props.data) setKvStore(props.data);
  }, [props.data]);
  return (
    <div style={{ marginTop: "10px" }}>
      <p>{props.title}</p>
      <KVDisplay
        pointer
        intent={props.intent}
        data={kvStore}
        onItemClick={(index) => {
          const temp = removeKeyValue(index, kvStore);
          setKvStore(temp);
          props.onChange && props.onChange(temp);
        }}
      />
      <div style={{ display: "flex", width: "100%", margin: "5px 0" }}>
        <TextField
          value={editKV.kei}
          onChange={(e) => {
            setEditKV((ps) => {
              return { ...ps, kei: e.target.value };
            });
          }}
          placeholder="Key"
          containerStyle={{ width: "100%" }}
        />
        <TextField
          value={editKV.value}
          onChange={(e) => {
            setEditKV((ps) => {
              return { ...ps, value: e.target.value };
            });
          }}
          placeholder="Value"
          containerStyle={{ width: "100%", margin: "0 10px" }}
        />
        <Button
          appearance="secondary"
          iconAfter={IconPlus}
          isIconButton
          onClick={() => {
            if (editKV.kei !== "" && editKV.value !== "") {
              const temp = addKeyValue(editKV, kvStore);
              setKvStore((ps) => {
                return temp;
              });
              props.onChange && props.onChange(temp);
              setEditKV({ kei: "", value: "" });
            } else {
              alert("Invalid Key Value");
            }
          }}
        />
      </div>
    </div>
  );
}

export default KVInput;
