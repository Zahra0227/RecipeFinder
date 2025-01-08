import Head from "next/head";
import Navbar from "../navbar/Navbar";
import { LayoutProps } from "../../types/index";

const Layout: React.FC<LayoutProps> = ({ children, title = "Recipe Finder" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Find your favorite recipes" />
            </Head>
            <Navbar />
            <main className="container mx-auto px-4">{children}</main>
        </>
    );
};

export default Layout;
