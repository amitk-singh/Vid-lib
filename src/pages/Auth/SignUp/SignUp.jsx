
import './SignUp.css';

const SignUp = () => {
    return (
        <>
            <section className='signup-page-container'>
                <label htmlFor="">First Name</label>
                <input type="email" />
                <label htmlFor="">Last Name</label>
                <input type="email" />
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Password</label>
                <input type="password" />
                <button id='signup-btn'>SignUp</button>
            </section>
        </>
    )
}

export default SignUp;
