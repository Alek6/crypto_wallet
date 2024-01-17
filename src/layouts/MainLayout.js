import Navbar from "@molecules/Navbar";

export default function MainLayout({children}) {
    return (
        <div className="h-screen bg-bgLight flex flex-col justify-between p-8">
            {children}
            <Navbar/>
        </div>
    )
}