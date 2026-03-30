import { router, useForm, usePage } from '@inertiajs/react';
import { Offcanvas } from 'bootstrap';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import Layout from '../component/Layout';

const Section = function () {
    const [mode, setMode] = useState('create');
    const [currentId, setCurrentId] = useState(null);
    const { data, setData, post, put, errors, processing, reset } = useForm({
        name: '',
        active: null
    });
    const { sections, filters } = usePage().props;

    const [search, setSearch] = useState(filters.search || '');

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Status',
            cell: row => (
                row.active
                    ? <span className="badge bg-success">Active</span>
                    : <span className="badge bg-danger">Inactive</span>
            ),
            sortable: true,
        },
        {
            name: 'Action',
            cell: row => (
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleEdit(row)}
                    >
                        Edit
                    </button>

                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(row.id)}
                    >
                        Delete
                    </button>
                </div>
            ),
        }
    ];

    // Debounced search
    useEffect(() => {
        const delay = setTimeout(() => {
            router.get('/sections', { search }, {
                preserveState: true,
                replace: true,
            });
        }, 200);

        return () => clearTimeout(delay);
    }, [search]);

    function handleDelete(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "This section will be deleted permanently!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/sections/${id}`);
            }
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (mode === 'create') {
            post('/sections', {
                onSuccess: () => handleSuccess()
            });
        } else {
            put(`/sections/${currentId}`, {
                onSuccess: () => handleSuccess()
            });
        }
    }

    function handleSuccess() {
        reset();
        setMode('create');
        setCurrentId(null);
        closeDrawer();
    }

    function handleEdit(section) {
        setMode('edit');
        setCurrentId(section.id);

        setData({
            name: section.name,
            active: section.active ? '1' : '0'
        });

        openDrawer();
    }

    function openDrawer() {
        const drawer = document.getElementById('sectionDrawer');
        const instance = Offcanvas.getOrCreateInstance(drawer);
        instance.show();
    }

    function closeDrawer() {
        const drawer = document.getElementById('sectionDrawer');
        const instance = Offcanvas.getOrCreateInstance(drawer);
        instance.hide();
    }

    return (
        <>
            <div className="card card-body">
                <h2 className='my-2'>Section Management</h2>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a>Classes</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Section</li>
                    </ol>
                </nav>
            </div>
            {/* Top Section Ends */}

            <div className="p-4 card card-body mt-2">

                <div className='row'>
                    {/* Create Section */}
                    <div className="col-12 col-md-8">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                reset();
                                setMode('create');
                                setCurrentId(null);
                            }}
                            data-bs-toggle="offcanvas"
                            data-bs-target="#sectionDrawer"
                        >
                            Add
                        </button>
                        <div
                            className="offcanvas offcanvas-end"
                            tabIndex="-1"
                            id="sectionDrawer"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title">
                                    {mode === 'create' ? 'Create Section' : 'Update Section'}
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                            </div>

                            <div className="offcanvas-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                        {errors.name && <p className='my-2 text-danger'>{errors.name}</p>}
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="status">Status</label>
                                        <select className='form-control' value={data.active == 1 ? '1' : '0'}
                                            onChange={(e) => {
                                                setData('active', e.target.value === '1');
                                            }}>
                                            <option value="">Select Status</option>
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                        {errors.active && <p className='my-2 text-danger'>{errors.active}</p>}
                                    </div><br />
                                    <button className="btn btn-primary" disabled={processing}>
                                        {mode === 'create' ? 'Create' : 'Update'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="col-12 col-md-4">
                        <input
                            type="search"
                            className="form-control mb-3"
                            placeholder="Search sections..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Table */}
                <DataTable
                    columns={columns}
                    data={sections.data}
                    pagination
                    paginationServer
                    paginationTotalRows={sections.total}
                    paginationPerPage={sections.per_page}
                    paginationDefaultPage={sections.current_page}
                    onChangePage={(page) => {
                        router.get('/sections', {
                            page,
                            search
                        }, { preserveState: true });
                    }}
                    highlightOnHover
                    striped
                />
            </div>
        </>
    );
}

Section.layout = page => <Layout children={page} openedMenu={'Classes'} openedSubMenu={'Section'} />

export default Section;