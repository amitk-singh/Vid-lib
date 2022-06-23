
import '../Login/Login.css';

const Login = () => {
    return (
        <>
            <section className='login-page-container'>
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Password</label>
                <input type="password" />
                <button id='login-btn'>Login</button>
            </section>
        </>
    )
}

export default Login;