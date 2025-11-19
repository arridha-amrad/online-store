import { ReactNode } from "react";
import AdminNavbar from "./admin.navbar";
import SidebarAdmin from "./sidebar.admin";
import { Divider } from "@heroui/divider";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-5xl h-screen">
      <div className="flex w-full h-full">
        <div className="w-max px-6 py-4">
          <SidebarAdmin />
        </div>
        <Divider orientation="vertical" />
        <div className="flex-1 py-4 px-6">
          <AdminNavbar />
          {children}
        </div>
      </div>
    </div>
  );
}
