import "./globals.css";
import localFont from "next/font/local";

const helveticaNeue = localFont({
  src: [
    {
      path: "../app/fonts/HelveticaNeue-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../app/fonts/HelveticaNeue-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/fonts/HelveticaNeue-Roman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/HelveticaNeue-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/HelveticaNeue-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "Nanny.Services",
  description: "Find babysitters online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helveticaNeue.className}>
        {children}
      </body>
    </html>
  );
}
