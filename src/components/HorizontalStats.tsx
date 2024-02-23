import "../styles/HorizontalStats.css";

const HorizontalStats: React.FC<{
  title: string;
  icon: any;
  stats: number;
}> = ({ title, icon, stats }) => {
  return (
    <div className="container-horizontal-stats">
      <div className="title">
        <p>{title}</p>
        {icon}
      </div>
      <div className="stats">
        <p>{stats} tickets</p>
      </div>
    </div>
  );
};
export default HorizontalStats;
