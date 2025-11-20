import { Logo } from "@/components/logo";
import { SidebarRoutes } from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="space-y-6 ">
      <Logo />
      <SidebarRoutes />
    </div>
  );
};

export default Sidebar;
