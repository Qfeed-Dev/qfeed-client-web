import StyledComponentsRegistry from "../lib/registry";
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
                    <Layout>{children}</Layout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
