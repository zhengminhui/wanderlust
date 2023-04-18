import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Inter } from "@next/font/google";
import { ConfigProvider } from "antd";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: inter.style.fontFamily,
        },
      }}
    >
      <main className={inter.className}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </main>
    </ConfigProvider>
  );
}
