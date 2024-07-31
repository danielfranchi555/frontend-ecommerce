import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const NavCategorie = () => {
  const components = [
    {
      title: "Remeras",
      href: "/category/remeras",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Jeans",
      href: "/category/jeans",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Camisas",
      href: "/category/camisas",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Camperas",
      href: "/category/camperas",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Accesorios",
      href: "/category/accesorios",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-1xl">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-0 md:w-[200px] md:flex md:flex-col lg:w-[200px] ">
              {components.map((component) => (
                <Link href={component.href}>
                  <li
                    className="hover:bg-slate-100 py-1 px-3 w-full text-sm"
                    key={component.title}
                    title={component.title}
                  >
                    {component.title}
                  </li>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavCategorie;
