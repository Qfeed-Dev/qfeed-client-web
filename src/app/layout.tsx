"use client";
import { Provider } from "react-redux";
import "./App.scss";
import Head from "./head";
import App from "./App";
import { store } from "src/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Provider store={store}>
          <App>{children}</App>
        </Provider>
      </body>
    </html>
  );
}
