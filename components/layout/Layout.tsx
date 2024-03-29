import React from "react";
import Script from "next/script";
import Head from "next/head";

function Layout(props: { title?: any; children: any }) {
  return (
    <>
      <Head>
        <title>{props.title || "Leave Management System"}</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Do you want to deliver or pickup an item. Your parcels, clothes, electronics and food is safe with us" />
        <meta name="theme-color" content="#fff" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Script src="/js/bootstrap.bundle.min.js" />
      {props.children}
    </>
  );
}

export default Layout;
