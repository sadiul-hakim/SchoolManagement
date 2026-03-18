import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Sidebar({ openedMenu,openedSubMenu, sidebarOpen, setSidebarOpen }) {

    const [openMenu, setOpenMenu] = useState(null);
    const {props} = usePage();
    console.log(props);

    const menu = [
        {
            title: "Dashboard",
            link: "/",
            icon: "bi bi-house-door me-2",
            roles: []
        },
        {
            title: "Students",
            children: [
                { title: "Add New Student", link: "/students/create" },
                { title: "Students List", link: "/students" },
                { title: "Suspend Student", link: "/students/suspend" },
                { title: "Student Categories", link: "/students/categories" },
                { title: "Edit Student", link: "/students/edit" },
                { title: "Student Details", link: "/students/details" }
            ],
            icon: "bi bi-person me-2",
            roles: []
        },
        {
            title: "Teachers",
            children: [
                { title: "Add New Teacher", link: "/teachers/create" },
                { title: "Teachers List ", link: "/teachers" },
                { title: "Edit Teacher ", link: "/teachers/edit" },
                { title: "Teacher Details", link: "/teachers/details" },
                { title: "Teacher Timetable", link: "/teachers/timetable" },
            ],
            icon: "bi bi-person me-2",
            roles: []
        },
        {
            title: "Guardian",
            children: [
                { title: "Add New Guardian", link: "/guardians/create" },
                { title: "Guardians List", link: "/guardians" },
                { title: "Edit Guardian", link: "/guardians/edit" },
                { title: "Guardian Details", link: "/guardians/details" },
            ],
            icon: "bi bi-people me-2",
            roles: []
        },
        {
            title: "Classes",
            children: [
                { title: "Section", link: "/classes/section" },
                { title: "Subjects", link: "/classes/subjects" },
                { title: "Class List", link: "/classes" },
                { title: "Class Room", link: "/classes/room" },
            ],
            icon: "bi bi-easel me-2",
            roles: []
        },
        {
            title: "Examinations",
            children: [
                { title: "Exam", link: "/exams" },
                { title: "Exam Schedule", link: "/exams/schedule" },
                { title: "Exam Result", link: "/exams/result" }
            ],
            icon: "bi bi-file-earmark-text me-2",
            roles: []
        },
        {
            title: "Fees Collection",
            children: [
                { title: "Fees Collection", link: "/fees/collect" },
                { title: "Fees Type", link: "/fees/type" },
                { title: "Fees Group", link: "/fees/group" },
                { title: "Fees Discount", link: "/fees/discount" },
            ],
            icon: "bi bi-cash-stack me-2",
            roles: []
        },
        {
            title: "Attendance",
            children: [
                { title: "Student Attendance", link: "/attendance/student" },
                { title: "Teacher Attendance", link: "/attendance/teacher" },
                { title: "Employee Attendance", link: "/attendance/employee" },
            ],
            icon: "bi bi-calendar-check me-2",
            roles: []
        },
        {
            title: "Leaves",
            children: [
                { title: "Leave Types", link: "/leaves/type" },
                { title: "Leave Request", link: "/leaves/request" },
            ],
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
            children: [
                { title: "Books List", link: "/library/books" },
                { title: "Members List", link: "/library/members" },
                { title: "Member Details", link: "/library/members" },
            ],
            icon: "bi bi-book me-2",
            roles: []
        },
        {
            title: "Accounts",
            children: [
                { title: "Income Head", link: "/accounts/income-head" },
                { title: "Income List", link: "/accounts/incomes" },
                { title: "Expanse Head", link: "/accounts/expanse-head" },
                { title: "Expanse List", link: "/accounts/expanses" },
                { title: "Transaction", link: "/accounts/transactions" },
            ],
            icon: "bi bi-wallet2 me-2",
            roles: []
        },
        {
            title: "HRM",
            children: [
                { title: "Employee List", link: "/hrm/employees" },
                { title: "Employee Details", link: "/hrm/employee-details" },
                { title: "Add New Employee", link: "/hrm/employee/create" },
                { title: "Payroll", link: "/hrm/payroll" },
                { title: "Designation", link: "/hrm/designation" },
                { title: "Department", link: "/hrm/department" },
            ],
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
            children: [
                { title: "General", link: "/settings/general" },
                { title: "Notification", link: "/settings/notifications" },
                { title: "Currencies", link: "/settings/currencies" }
            ],
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

                        <li key={index} className={`nav-item ${openedMenu === item.title ? 'openMenu' : ''}`}>

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
                                                        <span className={`${openedSubMenu===sub.title ? 'text-primary':''}`}>
                                                            → {sub.title}
                                                        </span>
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