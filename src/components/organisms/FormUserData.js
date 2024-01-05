import Button from '@atoms/Button';
import FormInput from '@molecules/FormInput';

export default function FormUserData() {
    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">
                <FormInput id="name" text="Name" placeholder="Enter your name" type="text" maxLength="25" required={true} />
                <FormInput id="surname" text="Surname" placeholder="Enter your surname" type="text" maxLength="25" required={true} />
                <FormInput id="birthday" text="Birthday" placeholder="dd/mm/yyyy" type="date" maxLength="10" required={true} />
                <FormInput id="address" text="Address" placeholder="Insert your address" type="text" maxLength="50" required={true} />
                <div className="flex gap-x-4">
                    <FormInput id="city" text="City" placeholder="Insert your city" type="text" maxLength="35" required={true} />
                    <FormInput id="postal-code" text="Postal code" placeholder="Insert your postal code" type="number" maxLength="5" required={true} />
                </div>
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/register/upload-documents" type="primary">next</Button>
            </div>
        </form>
    )
}