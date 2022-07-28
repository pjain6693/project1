import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const itemsValue = props.items.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...itemsValue);
  return (
    <div className="chart">
      {props.items.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMaximum}
          lable={item.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
