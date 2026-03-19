import { usePage } from "@inertiajs/react";
import { useState } from "react";
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { props } = usePage();
    console.log(props)
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

                <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} serverProps={props} />

                <div className="p-4">
                    {children}
                </div>

            </div>

        </main>
    )
}
