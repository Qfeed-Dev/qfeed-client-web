import StyledComponentsRegistry from "../lib/registry";
import ReactQueryProvider from "../lib/react-query-registry";
import "../../styles/globals.css";
import Layout from "src/components/layout/Layout";

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body style={{ background: "#131313" }}>
                <StyledComponentsRegistry>
                    <ReactQueryProvider>
                        <Layout>{children}</Layout>
                    </ReactQueryProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
