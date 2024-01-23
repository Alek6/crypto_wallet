import MainLayout from "@layouts/MainLayout";
import Header from "@molecules/Header";
import FormSell from "@organisms/FormSell";

export default function Sell() {
    return (
        <MainLayout header={<Header type="action" title="Sell" mt="lg" backTo="/market"/>}>
            <FormSell/>
        </MainLayout>
    )
}