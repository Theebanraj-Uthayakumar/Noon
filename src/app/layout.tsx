import React, { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import FooterNav from "../components/FooterNav";
import AppContainer from "../components/AppContainer";

export const metadata: Metadata = {
  title: "Noon",
  description: "Sr. SOftware Engineer Assessment",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title as ReactNode}</title>
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body>
        <AppContainer>
          {children}
          <FooterNav />
        </AppContainer>
      </body>
    </html>
  );
};

export default RootLayout;
