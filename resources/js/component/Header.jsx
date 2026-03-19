import { useForm } from "@inertiajs/react";

export default function Header({ toggleSidebar, serverProps }) {
    const { post } = useForm();

    function handleLogout(e) {
        post('/logout');
    }

    return (

        <header className="bg-white border-bottom p-3 d-flex align-items-center justify-content-between">

            <div className="d-flex align-items-center">
                <button
                    className="btn btn-outline-secondary me-3"
                    onClick={toggleSidebar}
                    id="toggle-button"
                >
                    ☰
                </button>

                <h5 className="mb-0">Dashboard</h5>
            </div>
            <div>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-person-circle"></i> {serverProps.auth.user ? serverProps.auth.user.name : 'Action'}
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={handleLogout}><i className="bi bi-box-arrow-left"></i> Logout</a></li>
                    </ul>
                </div>
            </div>

        </header>

    );

}