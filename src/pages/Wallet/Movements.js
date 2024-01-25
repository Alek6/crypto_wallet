import MainLayout from "@layouts/MainLayout";
import Header from "@molecules/Header";
import FilterHeader from "@molecules/FilterHeader";
import TransactionList from "@organisms/TransactionList";

export default function Movements() {
    return (
        <MainLayout header={<Header type="action" title="Movements" mt="lg" backTo="/wallet"/>}>
                <FilterHeader/>
                <TransactionList num="3"/>
        </MainLayout>
    )
}