import { useCallback, useState } from "react";

interface UseSidebarState {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

export const useSidebarState = (): UseSidebarState => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = useCallback(() => {
    setSidebarVisible((prevState) => !prevState);
  }, []);

  return { toggleSidebar, isSidebarVisible };
};
