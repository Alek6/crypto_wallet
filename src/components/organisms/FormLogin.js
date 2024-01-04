import { Link } from 'react-router-dom';
import Button from '@atoms/Button';
import FormInput from '@molecules/FormInput';

export default function FormLogin() {
    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">
                <FormInput id="email" text="Email" placeholder="Insert your email" type="email" required={true} />
                <FormInput id="password" text="Password" placeholder="Enter your password" type="password" autoComplete="new-password" required={true} />
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/login/otp" type="primary">next</Button>
                <Link to="/register" className="uppercase text-primary text-xl mt-4">sign up</Link>
            </div>
        </form>
    )
}