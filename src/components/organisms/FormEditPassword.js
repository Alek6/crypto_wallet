import { Link } from 'react-router-dom';
import Button from '@atoms/Button';
import FormInput from '@molecules/FormInput';
import InputPassword from '@molecules/InputPassword';

export default function FormEditPassword() {
    return (
        <form className="flex flex-1 flex-col gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">
                <InputPassword
                    id="current-password"
                    text="Current password"
                    placeholder="Enter your current password"
                />
                <InputPassword
                    id="new-password"
                    text="New password"
                    placeholder="Enter your new password"
                />
                <InputPassword
                    id="confirm-password"
                    text="Confirm password"
                    placeholder="Confirm your new password"
                />
            </div>
            <div className="text-center flex flex-col items-center mt-10">
                <Button to="/profile" type="primary">confirm</Button>
            </div>
        </form>
    )
}