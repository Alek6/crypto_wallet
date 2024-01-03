import Header from "@molecules/Header";
import FormAccessData from "@organisms/FormAccessData";

export default function AccessData() {
    return (
        <div className="h-screen bg-bgLight flex flex-col justify-between p-8">
            <Header title="Register"/>
            <FormAccessData />
        </div>
    )
}