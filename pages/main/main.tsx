import Layout from "components/layout/layout"
import Head from "next/head";
import Home from "components/home/home"


export default function Main() {
    return (
        <>  
            <Layout>
                <Head>
                    <title>포토폴리오</title>
                    <meta name="description" content="포토폴리오" />
                    <link ref="icon" href="/favicon.ico"/>
                </Head>
                <Home />     
            </Layout>
        </>
    )
}