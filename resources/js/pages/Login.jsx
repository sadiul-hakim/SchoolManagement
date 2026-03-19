import { useForm } from "@inertiajs/react";


export default function Login() {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: ""
    });
    function handleLogin(e) {
        e.preventDefault();
        post('/login');
    }
    return (
        <main className="bg-light vh-100">
            <div className="container h-100">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-9 mx-auto">
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                    <img src="/images/login-page-hero.svg" alt="login page" width={220} height={200} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <form autoComplete="off" onSubmit={handleLogin}>
                                        <h3 className="my-2 text-center text-primary">Login to you account</h3>
                                        {errors.email && <h4 className="text-danger my-2 text-center">{errors.email}</h4>}
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" className="form-control"
                                                value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                        </div><br />
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="password" id="password" className="form-control"
                                                value={data.password} onChange={(e) => setData('password', e.target.value)} />
                                        </div><br />
                                        <button className="btn btn-primary" type="submit" disabled={processing}>Login</button>
                                        <button className="btn btn-danger ms-2" type="reset">Reset</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
