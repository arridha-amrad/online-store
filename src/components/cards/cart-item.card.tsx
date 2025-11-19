"use client";

import { Button, ButtonGroup } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import IconButton from "../buttons/icon.button";

export default function CardItemCard() {
  const [quantity, setQuantity] = useState(0);
  return (
    <article className="flex items-stretch gap-1">
      <div>
        <Checkbox />
      </div>
      <div className="flex gap-4">
        <div className="rounded-xl overflow-hidden">
          <Image
            className="object-cover h-full aspect-square"
            width={100}
            height={100}
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/96/MTA-183080028/br-m036969-00061_advan-laptop-workplus-air-amd-ryzen-5-7535hs-14-inch-oled-full-hd-1920x1200-ultra-slim-1-6cm-light-1-09kg-16gb-512gb-hemat-daya-zen-3-_full01-ddda97bf.webp"
            alt="item"
          />
        </div>
        <div>
          <div className="flex items-start">
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, nesciunt?
            </h1>
            <p className="font-semibold">Rp45.000</p>
          </div>
          <div className="flex items-center justify-end gap-4">
            <Button variant="flat" color="danger" size="sm" isIconOnly>
              <Trash className="size-5" />
            </Button>
            <div
              id="action"
              className="flex flex-col justify-between items-end h-full"
            >
              <ButtonGroup size="sm">
                <IconButton
                  tooltipContent="decrease"
                  disabled={quantity === 0}
                  onPress={() => setQuantity((val) => (val -= 1))}
                  isIconOnly
                >
                  <Minus className="size-5" />
                </IconButton>
                <Button disabled>{quantity}</Button>
                <IconButton
                  tooltipContent="increase"
                  onPress={() => setQuantity((val) => (val += 1))}
                  isIconOnly
                >
                  <Plus className="size-5" />
                </IconButton>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
