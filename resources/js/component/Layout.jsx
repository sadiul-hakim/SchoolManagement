import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children, openedMenu, openedSubMenu }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { props } = usePage();

    useEffect(function () {
        if (props.flash?.success) {
            toast.success(props.flash.success, { id: 'success-toast' });
        }

        if (props.flash?.error) {
            toast.error(props.flash.error, { id: 'error-toast' });
        }
    }, [props.flash])

    return (
        <main className="bg-light min-vh-100">

            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                openedMenu={openedMenu ? openedMenu : 'Dashboard'}
                openedSubMenu={openedSubMenu ? openedSubMenu : ''}
                serverProps={props}
            />

            <div className="content-area d-flex flex-column flex-grow-1">

                <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} serverProps={props} />

                <div className="p-4 flex-grow-1 overflow-aut">
                    {children}
                </div>

            </div>

            <Toaster position="top-right" />
        </main>
    )
}
