import MainLayout from "@layouts/MainLayout";
import Header from "@molecules/Header";
import FormBuy from "@organisms/FormBuy";

export default function Buy() {
    return (
        <MainLayout header={<Header type="action" title="Buy" mt="lg" backTo="/market"/>}>
            <FormBuy/>
        </MainLayout>
    )
}