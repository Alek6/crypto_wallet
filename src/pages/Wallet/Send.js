import MainLayout from "@layouts/MainLayout";
import Header from "@molecules/Header";
import FormSend from "@organisms/FormSend";

export default function Send() {
    return (
        <MainLayout>
            <Header type="action" title="Send" mt="lg"/>
            <FormSend/>
        </MainLayout>
    )
}