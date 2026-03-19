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
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-circle"></i> {serverProps.user ? serverProps.user.name : 'Action'}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" style={{ cursor: 'pointer' }} onClick={handleLogout}><i class="bi bi-box-arrow-left"></i> Logout</a></li>
                    </ul>
                </div>
            </div>

        </header>

    );

}