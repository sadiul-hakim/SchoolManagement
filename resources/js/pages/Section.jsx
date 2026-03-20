import { Link, router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import Layout from '../component/Layout';

const Section = function Section() {
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
                    <Link href={`/sections/${row.id}/edit`} className="btn btn-sm btn-primary">
                        Edit
                    </Link>

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
        }, 500);

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

    return (
        <>
            <div className="card card-body">
                <h2 className='my-2'>Section</h2>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a>Classes</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Section</li>
                    </ol>
                </nav>
            </div>
            {/* Top Section Ends */}

            <div className="p-4 card card-body mt-2">

                {/* Search */}
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <button className="btn btn-primary">Add</button>
                    </div>
                    <div className="col-12 col-md-6">
                        <input
                            type="text"
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