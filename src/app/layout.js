import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Nanny.Services",
  description: "Find babysitters online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
