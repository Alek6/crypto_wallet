import Header from "@molecules/Header";
import FormLogin from "@organisms/FormLogin";

export default function Login() {
    return (
        <div className="h-screen bg-bgLight flex flex-col justify-between p-8">
            <Header title="Login"/>
            <FormLogin/>
        </div>
    )
}