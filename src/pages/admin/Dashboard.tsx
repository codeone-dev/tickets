import "../../styles/DashboardAdmin.css";

// icons
import { IoIosInformationCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import HorizontalStats from "../../components/HorizontalStats";

export default function Dashboard() {
  return (
    <div className="container-dashboard-admin">
      <h2>Dashboard</h2>
      <div className="container-top-tickets-stats">
        <HorizontalStats
          icon={<IoIosInformationCircle className="info-icon" />}
          stats={32}
          title="Pending tickets"
        />
        <HorizontalStats
          icon={<FaCheckCircle className="check-icon" />}
          stats={10}
          title="Completed tickets"
        />
      </div>
    </div>
  );
}
