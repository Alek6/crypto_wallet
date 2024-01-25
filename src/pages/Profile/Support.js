import MainLayout from "@layouts/MainLayout";
import Header from "@molecules/Header";
import FormSupport from "@organisms/FormSupport";

export default function Support() {
    return (
        <MainLayout header={<Header type="action" title="Support" mt="lg" backTo="/profile"/>}>
            <FormSupport required="true"/>
        </MainLayout>
    )
}