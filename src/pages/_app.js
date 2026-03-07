import CookieConsent from "@/components/CookieConsent";
import CustomCursor from "@/components/CustomCursor";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
       <CustomCursor />
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}
