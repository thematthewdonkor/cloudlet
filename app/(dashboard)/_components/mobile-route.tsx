import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarRoutes } from "./sidebar-routes";
import { Menu } from "lucide-react";

export const MobileRoutes = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-[400px] sm:w-[540px] p-5">
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  );
};
