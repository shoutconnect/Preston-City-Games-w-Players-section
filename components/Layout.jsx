// Design and images
// Libraries
// Components
import Navbar from "./Navbar";
import Footer from "./Footer";
// Outside data

/////////////////////////////

export default function Layout({ children }) {
  return (
    <div className="bg-slate-900 ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
