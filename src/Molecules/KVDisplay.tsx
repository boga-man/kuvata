import Badge from "../Components/Badge";
import { IKeyValue } from "../Interfaces/Global";
interface KVDProps {
  data: IKeyValue<any, any>[];
  intent?: "info" | "danger" | "success" | "warning" | "grey";
}
function KVDisplay(props: KVDProps) {
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div key={item.kei + item.value + index + new Date().getMilliseconds}>
            <Badge style={{ marginRight: "10px" }}>{item.kei}</Badge>
            <Badge style={{ background: "none" }} intent={props.intent}>
              {item.value}
            </Badge>
          </div>
        );
      })}
    </div>
  );
}

export default KVDisplay;
