import { Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./components/content/Content";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/nav/NavBar";
import Name from "./components/pageName/Name";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Name title="booking" />
      <NavBar />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-sm-4">
              <Sidebar />
            </div>
            <div className="col-lg-10 col-sm-8">
              <Routes>
                <Route path="/booking" element={<Booking />} />
                <Route path="/vekelz" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
