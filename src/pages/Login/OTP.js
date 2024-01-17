import Header from "@molecules/Header";
import FormOTP from "@organisms/FormOTP";

export default function OTP() {
    return (
        <div className="h-screen bg-bgLight flex flex-col justify-between p-8">
            <Header type="intro" title="Login"/>
            <FormOTP />
        </div>
    )
}