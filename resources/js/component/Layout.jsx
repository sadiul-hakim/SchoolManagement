import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children, openedMenu, openedSubMenu }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { props } = usePage();
    console.log(props)

    useEffect(() => {
        if (props.flash?.success) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: props.flash.success,
                timer: 2000,
                showConfirmButton: false,
                toast: true,
                position: 'top-end'
            });
        }

        if (props.flash?.error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: props.flash.error,
                timer: 3000,
                showConfirmButton: false,
                toast: true,
                position: 'top-end'
            });
        }
    }, [props.flash]);

    return (
        <main className="bg-light vh-100 d-flex overflow-hidden">

            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                openedMenu={openedMenu ? openedMenu : 'Dashboard'}
                openedSubMenu={openedSubMenu ? openedSubMenu : ''}
                serverProps={props}
            />

            <div className="content-area d-flex flex-column flex-grow-1">

                <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} serverProps={props} />

                <div className="p-4 flex-grow-1 overflow-auto">
                    {children}
                </div>

            </div>
        </main>
    )
}
