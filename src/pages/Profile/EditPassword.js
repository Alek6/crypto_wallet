import MainLayout from "@layouts/MainLayout";
import Header from "@molecules/Header";
import FormEditPassword from "@organisms/FormEditPassword";

export default function EditPassword() {
    return (
        <MainLayout header={<Header type="action" title="Edit password" mt="lg" backTo="/profile"/>}>
            <FormEditPassword/>
        </MainLayout>
    )
}