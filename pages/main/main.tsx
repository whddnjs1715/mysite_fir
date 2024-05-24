import Layout from "components/layout/layout"
import Head from "next/head";

export default function Main() {
    return (
        <>
            <Head>
                <title>포토폴리오</title>
                <meta name="description" content="포토폴리오" />
                <link ref="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <h1 className="text-3xl font-bold underline">
                    Main 입니다.22
                </h1>
            </Layout>
        </>
    )
}