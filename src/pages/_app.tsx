import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../../components/layouts/Layout";
// import DashboardLayout from "../../components/layouts/dashboardLayout";

// type NextPageWithLayout = NextPage & {
//   getLayout: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

export default function MyApp({ Component, pageProps }: AppProps) {
  // const getLayout = Component.getLayout || ((page) => page);

  return <Component {...pageProps} />;
}
