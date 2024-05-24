import { ReactNode } from "react";
import Footer from "components/footer/footer"
import Header from "components/header/header"

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer/>
        </>
    )
}