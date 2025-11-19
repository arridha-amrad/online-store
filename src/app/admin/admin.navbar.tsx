"use client";

import { Navbar, NavbarContent, NavbarItem, User } from "@heroui/react";

export default function AdminNavbar() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="center">
        <NavbarItem className="hidden lg:flex">
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            description="Admin"
            name="Jane Doe"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
