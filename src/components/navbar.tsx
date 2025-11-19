"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Divider } from "@heroui/react";
import { Search } from "lucide-react";

import ThemeButton from "./buttons/theme.button";
import CategoriesDropDown from "./dropdowns/categories.dd";
import Link from "next/link";

const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function AppNavbar() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">DEVMART</p>
      </NavbarBrand>
      <NavbarContent
        as="div"
        className="hidden flex-3 sm:flex gap-4"
        justify="center"
      >
        <NavbarItem>
          <Button variant="light" as={Link} href="/">
            Shops
          </Button>
        </NavbarItem>
        <NavbarItem>
          <CategoriesDropDown />
        </NavbarItem>
        <NavbarItem className="flex-3">
          <Input
            placeholder="Search product..."
            startContent={<Search className="stroke-foreground/50" />}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} href="/signin" variant="light">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
