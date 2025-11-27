import { Logo } from "@/components/logo";
import { SidebarRoutes } from "./sidebar-routes";
import { MobileRoutes } from "./mobile-route";

const Sidebar = () => {
  return (
    <div className="w-56 p-5">
      <div className="lg:hidden">
        <MobileRoutes />
      </div>

      <div className="hidden lg:flex flex-col justify-center gap-8  bg-muted/30 border-r border-border">
        <Logo />
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
