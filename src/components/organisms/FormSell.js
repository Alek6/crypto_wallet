import Button from '@atoms/Button';
import FormInput from '@molecules/FormInput';

export default function FormSell() {
    return (
        <form className="flex flex-1 flex-col justify-around gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">
                <FormInput id="btc-amount" text="Amount in BTC" placeholder="Insert amount in BTC" type="text" maxLength="25" required={true} />
                <FormInput id="usd-amount" text="Amount in USD" placeholder="Amount in USD" type="text" maxLength="25" required={false} disabled />
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="" type="primary">buy</Button>
            </div>
        </form>
    )
}