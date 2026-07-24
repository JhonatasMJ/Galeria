import Header from "@/components/header";
import MainContent from "@/components/main-content";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}
