import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {

    const [openMenu, setOpenMenu] = useState(null);
    const [selected, setSelected] = useState(null);

    const menu = [
        {
            title: "Home",
            link: "/",
            icon: "bi bi-house-door me-2",
            roles: []
        },
        {
            title: "Students",
            children: [
                { title: "All Students", link: "/students" },
                { title: "Add Student", link: "/students/create" }
            ],
            icon: "bi bi-person me-2",
            roles: []
        },
        {
            title: "Teachers",
            children: [
                { title: "All Teachers", link: "/teachers" },
                { title: "Add Teacher", link: "/teachers/create" }
            ],
            icon: "bi bi-person me-2",
            roles: []
        },
        {
            title: "Guardian",
            link: "/guardians",
            icon: "bi bi-people me-2",
            roles: []
        },
        {
            title: "Classes",
            link: "/classes",
            icon: "bi bi-easel me-2",
            roles: []
        },
        {
            title: "Examinations",
            link: "/exams",
            icon: "bi bi-file-earmark-text me-2",
            roles: []
        },
        {
            title: "Fees Collection",
            link: "/fees",
            icon: "bi bi-cash-stack me-2",
            roles: []
        },
        {
            title: "Attendance",
            link: "/attendance",
            icon: "bi bi-calendar-check me-2",
            roles: []
        },
        {
            title: "Leaves",
            link: "/leaves",
            icon: "bi bi-clock-history me-2",
            roles: []
        },
        {
            title: "Certificate",
            link: "/certificates",
            icon: "bi bi-award me-2",
            roles: []
        },
        {
            title: "Library",
            link: "/library",
            icon: "bi bi-book me-2",
            roles: []
        },
        {
            title: "Accounts",
            link: "/accounts",
            icon: "bi bi-wallet2 me-2",
            roles: []
        },
        {
            title: "HRM",
            link: "/hrm",
            icon: "bi bi-people-fill me-2",
            roles: []
        },
        {
            title: "Notice Board",
            link: "/notices",
            icon: "bi bi-megaphone me-2",
            roles: []
        },
        {
            title: "Event",
            link: "/events",
            icon: "bi bi-calendar-event me-2",
            roles: []
        },
        {
            title: "Message",
            link: "/messages",
            icon: "bi bi-chat-dots me-2",
            roles: []
        },
        {
            title: "Subscription Plan",
            link: "/subscriptions",
            icon: "bi bi-tags me-2",
            roles: []
        },
        {
            title: "Role & Access",
            link: "/roles",
            icon: "bi bi-shield-lock me-2",
            roles: []
        },
        {
            title: "Authentication",
            icon: "bi bi-shield-check me-2",
            children: [
                { title: "Login Logs", link: "/auth/logs" }
            ],
            roles: []
        },
        {
            title: "Assign Role",
            link: "/assign-role",
            icon: "bi bi-person-check me-2",
            roles: []
        },
        {
            title: "Settings",
            link: "/settings",
            icon: "bi bi-gear me-2",
            roles: []
        }
    ];

    return (
        <>
            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark d-md-none"
                    style={{ opacity: 0.4, zIndex: 1040 }}
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className="bg-dark text-white p-3 position-fixed position-md-static overflow-auto"
                style={{
                    width: "250px",
                    height: "100vh",
                    zIndex: 1050,
                    left: sidebarOpen ? "0" : "-250px",
                    transition: "left 0.3s"
                }}
            >

                <img src="/images/logo.png" width="200" height="50" alt="logo" />

                <ul className="nav flex-column mt-4">

                    {menu.map((item, index) => (

                        <li key={index} className={`nav-item ${selected===item.title ? 'open' :''}`} onClick={()=>setSelected(item.title)}>

                            {/* Normal Link */}
                            {!item.children && (
                                <Link className="nav-link sidebar-link text-white" href={item.link}>
                                    <i className={item.icon}></i> {item.title}
                                </Link>
                            )}

                            {/* Menu With Submenu */}
                            {item.children && (

                                <>
                                    <a
                                        className="nav-link sidebar-link text-white d-flex justify-content-between align-items-center"
                                        onClick={() =>
                                            setOpenMenu(openMenu === index ? null : index)
                                        }
                                        style={{ cursor: "pointer" }}
                                    >
                                        <span className="d-flex align-items-center">
                                            <i className={item.icon}></i> {item.title}
                                        </span>
                                        <span>{openMenu === index ? "▾" : "▸"}</span>
                                    </a>

                                    {openMenu === index && (
                                        <ul className="nav flex-column ms-3">

                                            {item.children.map((sub, i) => (
                                                <li key={i} className="nav-item">

                                                    <Link className="nav-link text-white-50 sidebar-sub" href={sub.link}>
                                                        → {sub.title}
                                                    </Link>

                                                </li>
                                            ))}

                                        </ul>
                                    )}

                                </>
                            )}

                        </li>

                    ))}

                </ul>

            </aside>
        </>
    );
}