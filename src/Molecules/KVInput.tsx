import React, { useState } from "react";
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
}
function KVInput(props: KVInputProps) {
  const [editKV, setEditKV] = useState<IKeyValue<string, string>>({
    kei: "",
    value: "",
  });
  const [kvStore, setKvStore] = useState<IKeyValue<string, string>[]>(
    props.data || []
  );
  return (
    <div style={{ marginTop: "10px" }}>
      <p>{props.title}</p>
      <KVDisplay
        pointer
        data={kvStore}
        onItemClick={(index) => {
          setKvStore((ps) => removeKeyValue(index, ps));
        }}
      />
      <div style={{ display: "flex", width: "100%", margin: "10px 0" }}>
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
              setKvStore((ps) => addKeyValue(editKV, ps));
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
