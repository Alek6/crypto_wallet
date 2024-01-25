import Button from '@atoms/Button';
import FormInput from '@molecules/FormInput';

export default function FormEditUserData() {
    return (
        <form className="flex flex-1 flex-col gap-5">
            <div className="flex flex-col items-center justify-center gap-5">
                <FormInput id="name" text="Name" placeholder="Enter your name" type="text" maxLength="25" value="Mario" required={true} />
                <FormInput id="surname" text="Surname" placeholder="Enter your surname" type="text" maxLength="25" value="Rossi" required={true} />
                <FormInput id="birthday" text="Birthday" placeholder="dd/mm/yyyy" type="date" maxLength="10" value="1996-01-20" required={true} />
                <FormInput id="address" text="Address" placeholder="Insert your address" type="text" maxLength="50" value="Via Roma, 1" required={true} />
                <div className="flex gap-x-4">
                    <FormInput id="city" text="City" placeholder="Insert your city" type="text" maxLength="35" value="Rome" required={true} />
                    <FormInput id="postal-code" text="Postal code" placeholder="Insert your postal code" type="number" maxLength="5" value="00100" required={true} />
                </div>
            </div>
            <div className="text-center flex flex-col items-center">
                <Button to="/profile" type="primary">confirm</Button>
            </div>
        </form>
    )
}