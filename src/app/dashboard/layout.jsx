/** @format */

import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content md:p-5 flex flex-col items-center justify-center">
        {/* Page content here */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-green-700 font-bold text-xl">
          {/* Sidebar content here */}
          <li>
            <Link href="/dashboard/my_products">My Products</Link>
          </li>
          <li>
            <Link href="/dashboard/manage_products">Manage Products</Link>
          </li>
          <li>
            <Link href="/dashboard/statics">Statics</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
