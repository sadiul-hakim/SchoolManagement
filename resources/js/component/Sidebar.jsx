import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {

    const [openMenu, setOpenMenu] = useState(null);

    const menu = [
        {
            title: "Home",
            link: "/",
            icon:"bi bi-house-door fs-4 me-2"
        },
        {
            title: "Students",
            children: [
                { title: "All Students", link: "/students" },
                { title: "Add Student", link: "/students/create" }
            ],
            icon:"bi bi-person fs-4 me-2"
        },
        {
            title: "Teachers",
            children: [
                { title: "All Teachers", link: "/teachers" },
                { title: "Add Teacher", link: "/teachers/create" }
            ],
            icon:"bi bi-person fs-4 me-2"
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
                className={`bg-dark text-white p-3 position-fixed position-md-static`}
                style={{
                    width: "250px",
                    height: "100vh",
                    zIndex: 1050,
                    left: sidebarOpen ? "0" : "-250px",
                    transition: "left 0.3s"
                }}
            >

                <h5 className="p-3">Logo</h5>

                <ul className="nav flex-column mt-4">

                    {menu.map((item, index) => (

                        <li key={index} className="nav-item">

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