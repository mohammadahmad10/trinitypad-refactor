// import Drawer from "@/components/Drawer";

// import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Navbar Title</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="bg-base-300 rounded-t-none p-2 !m-0">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                    <li>
                      <a>Airdrop</a>
                    </li>
                    <li>
                      <a>Presale</a>
                    </li>
                  </ul>
                </details>
              </li>
              {/* <li>
                <ThemeSwitcher />
              </li> */}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {/* Content */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          {/* <li>
            <ThemeSwitcher />
          </li> */}
        </ul>
      </div>
    </div>
    // <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <Drawer />

    //     {/* <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //       >
    //         <li>
    //           <a>Item 1</a>
    //         </li>
    //         <li>
    //           <a>Parent</a>
    //           <ul className="p-2">
    //             <li>
    //               <a>Submenu 1</a>
    //             </li>
    //             <li>
    //               <a>Submenu 2</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <a>Item 3</a>
    //         </li>
    //       </ul>
    //     </div> */}
    //     <a className="btn btn-ghost text-xl">daisyUI</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <a>Item 1</a>
    //       </li>
    //       <li>
    //         <details>
    //           <summary>Parent</summary>
    //           <ul className="p-2">
    //             <li>
    //               <a>Submenu 1</a>
    //             </li>
    //             <li>
    //               <a>Submenu 2</a>
    //             </li>
    //           </ul>
    //         </details>
    //       </li>
    //       <li>
    //         <a>Item 3</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <a className="btn">Button</a>
    //   </div>
    // </div>
  );
}
