import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import Image from "next/image";

export default function CategoriesDropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" href="#">
          Categories
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        classNames={{ list: "flex flex-row gap-2" }}
        aria-label="Dropdown Variants"
      >
        <DropdownItem className="flex" key="motherboard">
          <div>
            <Image
              width={100}
              height={100}
              className="object-cover"
              alt="motherboard"
              src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/96/MTA-183080028/br-m036969-00061_advan-laptop-workplus-air-amd-ryzen-5-7535hs-14-inch-oled-full-hd-1920x1200-ultra-slim-1-6cm-light-1-09kg-16gb-512gb-hemat-daya-zen-3-_full01-ddda97bf.webp"
            />
            <p>Motherboard</p>
          </div>
        </DropdownItem>
        <DropdownItem className="flex" key="processor">
          <div>Processor</div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
