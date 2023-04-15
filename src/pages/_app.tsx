import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../../components/Layout";

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
