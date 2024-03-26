import { Logo } from "../logo";

import { MenuItems } from "./menu-items";

export const Navbar = () => {
  return (
    <div className="container py-2 w-full flex items-center justify-between">
      <Logo size={70} />
      <MenuItems />
    </div>
  );
};
