import MainLayout from "@layouts/MainLayout";
import Header from "@molecules/Header";
import FormEditUserData from "@organisms/FormEditUserData";

export default function EditUserData() {
    return (
        <MainLayout header={<Header type="action" title="Edit user data" mt="lg" backTo="/profile"/>}>
            <FormEditUserData/>
        </MainLayout>
    )
}