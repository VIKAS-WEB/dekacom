import "./globals.css";
import { Inter } from "next/font/google";
// import { headers } from "next/headers";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Script from "next/script";
import CarouselHomePage from "../app/components/Carrousel/CarouselHomePage";
import CarouselHomePageResponsive from "./components/Carrousel/CarouselHomePageResponsive";
import { GeolocationProvider } from "./contexts/GeolocationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartReduc",
  description: "Coupons",
};
export default function RootLayout({ children }) {
  // const header = headers();
  // const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  // console.log(ip);
  return (
    <html lang="fr">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M0T60M6WQC"
        ></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-M0T60M6WQC');  
  `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-445588680"
        ></Script>{" "}
        <Script id="google-ads">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-445588680');   `}
        </Script>
      </head>
      <body>
        <GeolocationProvider>
          <Header />
          <div className="mx-auto w-9/12 hidden sm:block	">
            <CarouselHomePage />
          </div>
          <CarouselHomePageResponsive />
          <Breadcrumbs />

          {children}
          <Footer />
        </GeolocationProvider>
      </body>
    </html>
  );
}
