import Button from '@atoms/Button';
import FormInput from '@molecules/FormInput';

export default function FormSend() {
    return (
        <form className="flex flex-1 flex-col justify-around gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">
                <FormInput id="withdrawal-address" text="Withdrawal Address" placeholder="Withdrawal Address" type="text" maxLength="25" required={true} />
                <FormInput id="withdrawal-amount" text="Withdrawal Amount" placeholder="Withdrawal Amount" type="text" maxLength="25" required={true} />
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/wallet/send" type="primary">send</Button>
            </div>
        </form>
    )
}