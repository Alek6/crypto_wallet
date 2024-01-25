import Button from '@atoms/Button';
import FormInput from '@molecules/FormInput';
import Countdown from 'react-countdown';
import Message from '@atoms/Message';

export default function FormOTP() {
    function checkLength(event) {
        event.preventDefault();
        return (event) => {
            if(event.target.value.length > 1)
                return
        }
    }

    const timer = ({ seconds, completed }) => {
        if (!completed) {
            return <span className="text-xl">00:0{seconds}</span>;
        } else {
            if (completed) {
                return (
                    <>
                        <span className="text-xl">00:00</span>
                        <Message>Code sent!</Message>
                    </>)
            }
        }
    }

    return (
        <form className="flex flex-1 flex-col justify-between mt-6">
            <div>
                <p className="text-text text-lg mt-6">We have sent you an OTP to your email address. Please enter the OTP below to verify your email address.</p>
                <div className="flex justify-between gap-x-3 my-5">
                    <FormInput id="code" text="" placeholder="" type="text" width="code" min="0" max="9" maxLength="1" pattern="[0-9]{1}" required={false} onKeyDown={checkLength} />
                    <FormInput id="code" text="" placeholder="" type="text" width="code" min="0" max="9" maxLength="1" required={false} onKeyDown={checkLength} />
                    <FormInput id="code" text="" placeholder="" type="text" width="code" min="0" max="9" maxLength="1" required={false} onKeyDown={checkLength}/>
                    <FormInput id="code" text="" placeholder="" type="text" width="code" min="0" max="9" maxLength="1" required={false} onKeyDown={checkLength}/>
                    <FormInput id="code" text="" placeholder="" type="text" width="code" min="0" max="9" maxLength="1" required={false} onKeyDown={checkLength}/>
                    <FormInput id="code" text="" placeholder="" type="text" width="code" min="0" max="9" maxLength="1" required={false} onKeyDown={checkLength}/>
                </div>
                <div className="flex flex-wrap">
                    <p className="text-text text-lg text-center"><span className="font-semibold mr-2">Sending new code in:</span></p>
                    <Countdown 
                        className="w-full"
                        date={Date.now() + 5000}
                        renderer={timer}/>
                </div>
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/wallet" type="primary">next</Button>
            </div>
        </form>
    )
}