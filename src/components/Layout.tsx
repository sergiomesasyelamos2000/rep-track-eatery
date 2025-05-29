
import Navigation from "./Navigation";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <main className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {children}
      </main>
      <Navigation />
    </div>
  );
};

export default Layout;
