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
            <h1>Layout 입니다.</h1>
            <div>{children}</div>
            <Footer/>
        </>
    )
}