"use client";

import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const product = {
  name: "ADVAN Laptop Workplus AIR | AMD Ryzen 5 7535HS | 14 inch OLED Full HD+ 1920x1200 | Ultra Slim 1,6cm & Light 1,09Kg | 16GB/512GB | Hemat Daya Zen 3+",
  image:
    "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/96/MTA-183080028/br-m036969-00061_advan-laptop-workplus-air-amd-ryzen-5-7535hs-14-inch-oled-full-hd-1920x1200-ultra-slim-1-6cm-light-1-09kg-16gb-512gb-hemat-daya-zen-3-_full01-ddda97bf.webp",
  price: 8349000,
  sold: 100,
  rating: 4.5,
  discount: 15,
};

export default function ProductPage() {
  const router = useRouter();
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm">
        <Card isPressable onPress={() => router.push("/")} className="">
          <CardBody>
            <Image
              alt="product"
              src={product.image}
              width={500}
              height={500}
              className="object-cover w-full"
            />
            <div className="mt-2 space-y-1">
              <p
                title={product.name}
                className="line-clamp-2 font-light text-foreground/70"
              >
                {product.name}
              </p>
              <div className="flex items-center gap-2">
                <Price price={product.price} />
                {product.discount > 0 && (
                  <>
                    <Price price={product.price} discount={product.discount} />
                    <Chip variant="flat" size="sm" color="danger">
                      {product.discount}%
                    </Chip>
                  </>
                )}
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5">
                  <Star className="fill-yellow-500 size-4 stroke-0" />
                  <p>{product.rating}</p>
                </div>
                <span className="text-foreground/50">&middot;</span>
                <div className="font-light text-sm text-foreground/50">
                  <p>{product.sold}+ sold</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}

const Price = ({ price, discount }: { price: number; discount?: number }) => {
  const formatToIdr = (price: number) => {
    const res = Intl.NumberFormat("id-ID", {}).format(Math.ceil(price));
    return res;
  };
  return (
    <p className={discount ? "line-through text-foreground/50" : ""}>
      <span className="text-sm font-light">Rp</span>
      {discount
        ? formatToIdr(price - (price * discount) / 100)
        : formatToIdr(price)}
    </p>
  );
};
