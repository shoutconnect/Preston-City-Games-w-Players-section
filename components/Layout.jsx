// Design and images
// Libraries
// Components
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import CookieConsent from "./CookieConsent";
// Outside data

/////////////////////////////

export default function Layout({ children }) {
  const router = useRouter();
  const hideLayout =
    router.pathname === "/privacy-policy" ||
    router.pathname === "/terms-and-conditions" ||
    router.pathname === "/cookie-policy";

  return (
    <div className="bg-slate-900 ">
      <CookieConsent />
      {!hideLayout && <Navbar />}
      {children}
      <Footer />
    </div>
  );
}
