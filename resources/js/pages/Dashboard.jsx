import { usePage } from "@inertiajs/react";
import { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

export default function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {props} = usePage();
  return (
    <main className="bg-light min-vh-100">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        openedMenu="Dashboard"
        openedSubMenu=""
        serverProps={props}
      />

      <div className="content-area">

        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} serverProps={props}/>

        <div className="p-4">
          Dashboard Content Here
        </div>

      </div>

    </main>
  );
}