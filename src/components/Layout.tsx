
import Navigation from "./Navigation";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-cream to-warm-cream-dark pb-20">
      <main className="max-w-md mx-auto bg-white min-h-screen card-shadow-lg">
        {children}
      </main>
      <Navigation />
    </div>
  );
};

export default Layout;
