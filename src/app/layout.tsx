"use client";
import StyledComponentsRegistry from "../lib/registry";
import ReactQueryProvider from "../lib/react-query-registry";
import "../../styles/globals.css";
import Layout from "src/components/layout/Layout";
import { Provider } from "react-redux";
import Head from "./head";
import App from "./App";
import { store } from "src/store";

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <Head />
            <body style={{ background: "#131313" }}>
                <StyledComponentsRegistry>
                    <Provider store={store}>
                        <ReactQueryProvider>
                            <App>{children}</App>
                        </ReactQueryProvider>
                    </Provider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
