"use client";
import ReactQueryProvider from "../lib/react-query-registry";
import { Provider } from "react-redux";
import Head from "./head";
import App from "./App";
import { store } from "src/store";

import GlobalStyles from "styles/globalStyles";

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <Head />
            <body style={{ background: "#131313" }}>
                <Provider store={store}>
                    <ReactQueryProvider>
                        <App>
                            {children} <GlobalStyles />
                        </App>
                    </ReactQueryProvider>
                </Provider>
            </body>
        </html>
    );
}
