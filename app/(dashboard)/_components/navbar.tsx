import SearchPage from "../(routes)/search/page";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CurrentUserAvatar } from "@/components/current-user-avatar";

const Navbar = async () => {
  return (
    <div className="px-8 py-4 flex items-center">
      <div className="flex-1">
        <SearchPage />
      </div>

      <div className="flex items-center gap-4">
        <Button className="bg-blue-500 hover:blue-600 gap-2">
          <Upload />
          Upload file
        </Button>
        <div>
          <CurrentUserAvatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
