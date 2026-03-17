import { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

export default function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <main className="bg-light min-vh-100">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        openedMenu="Dashboard"
        openedSubMenu=""
      />

      <div className="content-area">

        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="p-4">
          Dashboard Content Here
        </div>

      </div>

    </main>
  );
}