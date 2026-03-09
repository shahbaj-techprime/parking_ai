import { LanguageProvider } from "@/app/translations/context/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import CustomCursor from "@/components/CustomCursor";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LanguageProvider>
        <CustomCursor />
        <Component {...pageProps} />
        <CookieConsent />
      </LanguageProvider>
    </>
  );
}
