import Layout from '../component/Layout';

const AddTeacher = function ({ subjects }) {
    console.log(subjects);
    return (
        <>
            <div className="card card-body">
                <h2 className='my-2'>Teacher Management</h2>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a>Teacher</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Add</li>
                    </ol>
                </nav>
            </div>
            {/* Top Section Ends */}
            <form action="">
                <div className="card mt-2">
                    <div className="card-header">
                        <small className='m-0'><b>Personal Info</b></small>
                    </div>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="fillName"> <small>Full Name</small> <span className='text-danger'>*</span></label>
                                <input type="text" name="fillName" className='form-control' placeholder='Enter your Full Name' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="subject"> <small>Subject</small> <span className='text-danger'>*</span></label>
                                <select name="subject" className='form-control'>
                                    <option value="">--Select Subject--</option>
                                    {subjects.map((sub, index) => (<option key={index}>{sub.name}</option>))}
                                </select>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="gender"> <small>Gender</small> <span className='text-danger'>*</span></label>
                                <select name="gender" className='form-control'>
                                    <option value="">--Select Gender--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="dateOfBirth"> <small>Date Of Birth</small> <span className='text-danger'>*</span></label>
                                <input type="date" name="dateOfBirth" className='form-control' />
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="fathersName"> <small>Fathers Name</small> <span className='text-danger'>*</span></label>
                                <input type="text" name="fathersName" className='form-control' placeholder='Enter your Fathers Full Name' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="mothersName"> <small>Mothers Name</small> <span className='text-danger'>*</span></label>
                                <input type="text" name="mothersName" className='form-control' placeholder='Enter your Mothers Full Name' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="maritalStatus"> <small>Marital Status</small> <span className='text-danger'>*</span></label>
                                <select name="maritalStatus" className='form-control'>
                                    <option value="">--Select Gender--</option>
                                    <option value="male">Married</option>
                                    <option value="female">Unmarried</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="joiningDate"> <small>Joining Date</small> <span className='text-danger'>*</span></label>
                                <input type="date" name="joiningDate" className='form-control' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="phone"> <small>Phone</small> <span className='text-danger'>*</span></label>
                                <input type="text" name="phone" className='form-control' placeholder='Enter your Phone Number' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="email"> <small>Email</small> <span className='text-danger'>*</span></label>
                                <input type="email" name="phone" className='form-control' placeholder='Enter your Email Address' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="experience"> <small>Experience (In Years)</small></label>
                                <input type="number" name="experience" className='form-control' placeholder='Enter your Experience in years' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="highestDegree"> <small>Highest Degree</small></label>
                                <input type="text" name="highestDegree" className='form-control' placeholder='Enter your Highest Degree Name' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="photo"> <small>Photo</small> <span className='text-danger'>*</span></label>
                                <input type="file" name="photo" className='form-control' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="nid"> <small>NID</small> </label>
                                <input type="file" name="nid" className='form-control' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Personal Info */}
                <div className="card mt-2">
                    <div className="card-header">
                        <small className='m-0'><b>Medical Details</b></small>
                    </div>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="bloodGroup"> <small>Blood Group</small></label>
                                <input type="text" name="bloodGroup" className='form-control' placeholder='Enter your blood group' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="height"> <small>Height (in centimeter)</small></label>
                                <input type="number" name="height" className='form-control' placeholder='Enter your height in centimeter' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="weight"> <small>Weight (in k.g)</small></label>
                                <input type="number" name="weight" className='form-control' placeholder='Enter your weight in k.g' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Medical Details */}
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <small className='m-0'><b>Previous School</b></small>
                            </div>
                            <div className='card-body'>
                                <div className="row">
                                    <div className="col-12 col-md-6 my-2">
                                        <label htmlFor="previousSchoolName"> <small>Previous School Name</small></label>
                                        <input type="text" className='form-control' placeholder="Enter Previous School Name" />
                                    </div>
                                    <div className="col-12 col-md-6 my-2">
                                        <label htmlFor="previousSchoolAddress"> <small>Previous School Address</small></label>
                                        <textarea name="previousSchoolAddress" placeholder='Enter Previous School Address' className='form-control'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Previous School */}
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <small className='m-0'><b>Address</b></small>
                            </div>
                            <div className='card-body'>
                                <div className="row">
                                    <div className="col-12 col-md-6 my-2">
                                        <label htmlFor="currentAddress"> <small>Current Address</small></label>
                                        <textarea name="currentAddress" placeholder='Enter you Current Address' className='form-control'></textarea>
                                    </div>
                                    <div className="col-12 col-md-6 my-2">
                                        <label htmlFor="permanentAddress"> <small>Permanent Address</small></label>
                                        <textarea name="permanentAddress" placeholder='Enter you Permanent Address' className='form-control'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Address */}
                </div>
                <div className="card mt-2">
                    <div className="card-header">
                        <small className='m-0'><b>Social Links</b></small>
                    </div>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="facebook"> <small>Facebook</small></label>
                                <input type="text" name="facebook" className='form-control' placeholder='Enter your Facebook Profile' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="linkedin"> <small>Linkedin</small></label>
                                <input type="text" name="linkedin" className='form-control' placeholder='Enter your Linkedin Profile' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="twitter"> <small>Twitter</small></label>
                                <input type="text" name="twitter" className='form-control' placeholder='Enter your Twitter Profile' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="instagram"> <small>Instagram</small></label>
                                <input type="text" name="instagram" className='form-control' placeholder='Enter your Instagram Profile' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Medical Details */}
                <div className="card mt-2">
                    <div className="card-header">
                        <small className='m-0'><b>Login Details</b></small>
                    </div>
                    <div className='card-body'>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="login_email"> <small>Email</small></label>
                                <input type="email" name="login_email" className='form-control' placeholder='Enter your Email' />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 my-2">
                                <label htmlFor="login_password"> <small>Password</small></label>
                                <input type="password" name="login_password" className='form-control' placeholder='Enter your password' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Login Details */}
                <div className="d-flex justify-content-center align-items-center mt-2">
                    <button type="reset" className='btn btn-outline-danger'>Clear</button>
                    <button type="submit" className='btn btn-primary ms-2'>Save Changes</button>
                </div>
            </form>
        </>
    );
}

AddTeacher.layout = page => <Layout children={page} openedMenu={'Teachers'} openedSubMenu={'Add New Teacher'} />

export default AddTeacher;