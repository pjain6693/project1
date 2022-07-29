import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  let color = "#4826b9";
  if (props.value <= 1000) {
    color = "#4826b9";
  } else if (props.value > 1000 && props.value <= 3000) {
    color = "yellow";
  } else if (props.value > 3000) {
    color = "red";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: color }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
      <div className="chart-bar__label">{props.value}</div>
    </div>
  );
};

export default ChartBar;
