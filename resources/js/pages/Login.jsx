import { useForm } from "@inertiajs/react";


export default function Login() {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: ""
    });
    function handleLogin(e){
        e.preventDefault();
        post('/login');
    }
    return (
        <main className="bg-light vh-100">
            <div className="container h-100">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6 mx-auto">
                        <div className="w-100 d-flex justify-content-center">
                            <img src="/images/login.png" alt="login image" width={100} height={100} className="my-2" />
                        </div>
                        <form className="card card-body" autoComplete="off" onSubmit={handleLogin}>
                            <h3 className="my-2 text-center">Login to you account</h3>
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
                            <button className="btn btn-primary" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
