import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex flex-col flex-1">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
