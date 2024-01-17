import MainLayout from "@layouts/MainLayout";
import Header from "@molecules/Header";
import FormReceive from "@organisms/FormReceive";

export default function Receive() {
    return (
        <MainLayout>
            <Header type="action" title="Receive" mt="lg"/>
            <FormReceive/>
        </MainLayout>
    )
}