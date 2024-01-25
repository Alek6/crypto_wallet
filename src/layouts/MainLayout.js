import Navbar from "@molecules/Navbar";

export default function MainLayout({children, header}) {
    return (
        <div className="h-screen bg-bgLight flex flex-1 flex-col p-8">
            {header}
            {children}
            <Navbar/>
        </div>
    )
}