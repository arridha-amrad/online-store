"use client";

import { Divider } from "@heroui/divider";
import { Listbox, ListboxItem } from "@heroui/listbox";
import Link from "next/link";

const classNames = {
  item: "w-max",
};

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

export default function SidebarAdmin() {
  return (
    <div>
      <div className="flex items-center h-16">
        <AcmeLogo />
        <p className="font-bold text-inherit">DEVMART</p>
      </div>
      <Divider />
      <Listbox aria-label="Actions">
        <ListboxItem
          as={Link}
          href="/admin/products"
          classNames={{ base: classNames.item }}
          key="new"
        >
          Dashboard
        </ListboxItem>
        <ListboxItem
          as={Link}
          href="/admin/products/add"
          classNames={{ base: classNames.item }}
          key="copy"
        >
          Add Product
        </ListboxItem>
        <ListboxItem classNames={{ base: classNames.item }} key="edit">
          Edit file
        </ListboxItem>
        <ListboxItem
          classNames={{ base: classNames.item }}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Delete file
        </ListboxItem>
      </Listbox>
    </div>
  );
}
