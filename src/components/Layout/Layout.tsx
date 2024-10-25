import { ReactNode } from "react";
import { Navigation } from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    
    <main className="">
      <Navigation />
      {children}
     <Footer></Footer>
    </main>

  );
}
