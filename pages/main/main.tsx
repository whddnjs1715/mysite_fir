import Layout from "components/layout/layout"
import Head from "next/head";

export default function Main() {
    return (
        <>
            
            <Layout>
                <Head>
                    <title>포토폴리오</title>
                    <meta name="description" content="포토폴리오" />
                    <link ref="icon" href="/favicon.ico"/>
                </Head>
                <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello!!
                            <br className="hidden lg:inline-block" />Joungwon Page
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Since I've always been interested on other cultures, I've been woking on multicultural environments for long time and this year I finally moved to Madrid 
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Go to LinedIn</button>
                        </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        </div>
                </div>
                </section>                
            </Layout>
        </>
    )
}