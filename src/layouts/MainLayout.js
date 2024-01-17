import Header from "@molecules/Header";
import Navbar from "@molecules/Navbar";

export default function MainLayout({children}) {
    return (
        <div className="h-screen bg-bgLight flex flex-col p-8">
            <Header type="main" />
            {children}
            <Navbar/>
        </div>
    )
}