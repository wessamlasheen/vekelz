import Dashboardcard from "../dashboardCard/Dashboardcard";
import Recommendedcar from "../Recommendedcar/Recomendedcar";
import Vchart2 from "../vcharts/Vchart2";
import Example from "../vcharts/Vcharts";

function Dashboard() {
  return (
    <div className="dashboard-content">
      <div className="row mt-3">
        <Dashboardcard />
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <Example />
        </div>
        <div className="col-lg-6 col-sm-12">
          <Vchart2 />
        </div>
      </div>
      <div className="row">
        <Recommendedcar />
      </div>
    </div>
  );
}
export default Dashboard;
