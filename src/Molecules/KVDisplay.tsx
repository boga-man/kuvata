import Badge from "../Components/Badge";
import { IKeyValue } from "../Interfaces/Global";
interface KVDProps {
  data: IKeyValue<any, any>[];
  intent?: "info" | "danger" | "success" | "warning" | "grey";
  onItemClick?: (index: number) => void;
  pointer?: boolean;
}
function KVDisplay(props: KVDProps) {
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div
            style={{ cursor: props.pointer ? "pointer" : "" }}
            key={item.kei + item.value + index + new Date().getMilliseconds}
            onClick={() => {
              props.onItemClick && props.onItemClick(index);
            }}
          >
            <Badge intent={props.intent} style={{ marginRight: "10px" }}>
              {item.kei}
            </Badge>
            <Badge style={{ background: "none" }} intent="grey">
              {item.value}
            </Badge>
          </div>
        );
      })}
    </div>
  );
}

export default KVDisplay;
