import CardItemCard from "@/components/cards/cart-item.card";
import ModalShipping from "@/components/modal";
import AppNavbar from "@/components/navbar";
import { IdWithName } from "@/types";
import { Button, ButtonGroup } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Divider } from "@heroui/divider";
import { Input } from "@heroui/input";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

// const fetchProvinces = async () => {
//   const res = await fetch(
//     "http://localhost:3000/api/shipping?fetchType=provinces"
//   );
//   const data = await res.json();
//   return data as IdWithName[];
// };

export default async function CheckoutPage() {
  // const provinces = await fetchProvinces();
  return (
    <>
      <AppNavbar />
      <main className="container max-w-5xl mt-4 mx-auto px-6">
        <div>
          <h1 className="text-2xl font-bold">Cart</h1>
        </div>
        <div className="flex items-start gap-8">
          <div className="w-full">
            <div className="mt-4 flex-1 justify-between flex items-center">
              <Checkbox classNames={{ label: "font-semibold text-sm" }}>
                Select All
              </Checkbox>
              <Button variant="flat" className="font-semibold">
                Delete
              </Button>
            </div>
            <div className="mt-4 flex flex-col gap-y-4">
              <CardItemCard />
              <Divider orientation="horizontal" className="my-2" />
              <CardItemCard />
              <Divider orientation="horizontal" className="my-2" />
              <CardItemCard />
            </div>
          </div>
          <div className="max-w-[300px] space-y-4 border border-foreground/10 rounded-xl bg-foreground/5 w-full p-6">
            <h1 className="font-semibold">Shopping Summary</h1>
            <div className="flex items-center justify-between">
              <p>Total</p>
              <p>Rp155.000</p>
            </div>
            <Divider className="my-2" orientation="horizontal" />
            <Input placeholder="Promo code" fullWidth />
            <Button disabled fullWidth color="primary">
              Buy
            </Button>
          </div>
        </div>
      </main>
      {/* <main className="flex items-center justify-center h-screen"> */}
      {/* <ModalShipping provinces={provinces} /> */}
      {/* </main> */}
    </>
  );
}
