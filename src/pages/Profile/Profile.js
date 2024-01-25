import MainLayout from '@layouts/MainLayout';
import Header from "@molecules/Header";
import ButtonBlock from '@atoms/ButtonBlock';

export default function Profile() {
    return (
        <MainLayout header={<Header type="main" title="Profile" />} >
            <div className="flex flex-col gap-y-5">
                <ButtonBlock to="/profile/edit-user-data" type="secondary">Edit user data</ButtonBlock>
                <ButtonBlock to="/profile/edit-password" type="secondary">Edit password</ButtonBlock>
                <ButtonBlock to="/profile/support" type="secondary">Support</ButtonBlock>
                <ButtonBlock to="/profile/faq" type="secondary">FAQ</ButtonBlock>
                <ButtonBlock to="/" type="accent">Logout</ButtonBlock>
            </div>
        </MainLayout>
    )
}