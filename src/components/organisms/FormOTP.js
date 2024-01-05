import Button from '@atoms/Button';
import FormInput from '@molecules/FormInput';

export default function FormOTP() {
    return (
        <form className="flex flex-1 flex-col justify-between mt-6">
            <div>
                <p className="text-text text-lg mt-6">We have sent you an OTP to your email address. Please enter the OTP below to verify your email address.</p>
                <div className="flex justify-between gap-x-3 my-5">
                    <FormInput id="code" text="" placeholder="" type="number" width="code" min="0" max="9" maxlength="2" pattern="[0-9]{1}" required={false} />
                    <FormInput id="code" text="" placeholder="" type="number" width="code" min="0" max="9" required={false} />
                    <FormInput id="code" text="" placeholder="" type="number" width="code" min="0" max="9" required={false} />
                    <FormInput id="code" text="" placeholder="" type="number" width="code" min="0" max="9" required={false} />
                    <FormInput id="code" text="" placeholder="" type="number" width="code" min="0" max="9" required={false} />
                    <FormInput id="code" text="" placeholder="" type="number" width="code" min="0" max="9" required={false} />
                </div>
                <p className="text-text text-lg text-center"><span className="font-semibold">Sending new code in: </span>00:20</p>
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/wallet" type="primary">next</Button>
            </div>
        </form>
    )
}