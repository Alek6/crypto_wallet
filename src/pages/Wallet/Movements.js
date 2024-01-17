import MainLayout from "@layouts/MainLayout";
import Header from "@molecules/Header";
import FilterHeader from "@molecules/FilterHeader";
import TransactionList from "@organisms/TransactionList";

export default function Movements() {
    return (
        <MainLayout>
            <Header type="action" title="Movements" mt="lg"/>
                <FilterHeader/>
                <TransactionList num="3"/>
        </MainLayout>
    )
}