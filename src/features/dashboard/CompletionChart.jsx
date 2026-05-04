import style from "./CompletionChart.module.css";

const CompletionChart = () => {
  return (
    <div className={style.CompletionChart}>
      <div className="d-flex align-items-center justify-content-between">
        <p>Completion Rate</p>
        <select name="" id="">
          <option value="">This Month</option>
          <option value="">This Week</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div>Chart</div>
        <div className="d-flex flex-column">
          <p>50%</p>
          <span>12 of 24 tasks</span>
          <span>completed</span>
        </div>
      </div>
    </div>
  );
};

export default CompletionChart;
