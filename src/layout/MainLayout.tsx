import { FC } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSidebarState } from "@/app/hooks/useSidebarState";
import Sidebar from "@/components/Sidebar";
interface MainLayountProps {
  children: React.ReactNode;
}

const MainLayount: FC<MainLayountProps> = ({ children }) => {
  const { isSidebarVisible, toggleSidebar } = useSidebarState();

  return (
    <div>
      <Header onMenuButtonClick={toggleSidebar} />
      <Sidebar isVisible={isSidebarVisible} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayount;
