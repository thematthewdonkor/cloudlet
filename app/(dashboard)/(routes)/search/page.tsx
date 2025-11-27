import { Input } from "@/components/ui/input";

const SearchPage = () => {
  return (
    <div className="max-w-md">
      <Input
        className="w-full rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchPage;
