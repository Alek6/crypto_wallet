import { Link } from 'react-router-dom';
import Button from '@atoms/Button';
import FormInput from '@molecules/FormInput';
import InputPassword from '@molecules/InputPassword';

export default function FormAccessData() {
    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">
                <FormInput id="email" text="Email" placeholder="Insert your email" type="email" required={true} />
                <InputPassword
                    id="password"
                    text="Password"
                    placeholder="Insert your password"
                />
                <InputPassword
                    id="confirm password"
                    text="Confirm password"
                    placeholder="Confirm your password"
                />
                {/*<FormInput id="password" text="Password" placeholder="Enter your password" type="password" autoComplete="new-password" required={true} />*/}
                {/*<FormInput id="confirm-password" text="Confirm your password" placeholder="Confirm your password" type="password" autoComplete="new-password" required={true} />*/}
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/register/user-data" type="primary">next</Button>
                <Link to="/login" className="uppercase text-primary text-xl mt-4">Log in</Link>
            </div>
        </form>
    )
}