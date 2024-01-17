import { Link } from 'react-router-dom';
import Button from '@atoms/Button';
import FormInput from '@molecules/FormInput';
import InputPassword from '@molecules/InputPassword';

export default function FormLogin() {

    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">
                <FormInput id="email" text="Email" placeholder="Insert your email" type="email" required={true} />
                <InputPassword
                    id="password"
                    text="Password"
                    placeholder="Insert your password"
                />
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/login/otp" type="primary">next</Button>
                <Link to="/register" className="uppercase text-primary text-xl mt-4">sign up</Link>
            </div>
        </form>
    )
}