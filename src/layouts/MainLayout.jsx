import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <div className="bg-gray-200 p-2">
        <div className="flex w-full min-h-screen gap-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}
