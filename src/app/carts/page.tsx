import ModalShipping from "@/components/modal";
import AppNavbar from "@/components/navbar";
import { IdWithName } from "@/types";

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
      {/* <main className="flex items-center justify-center h-screen"> */}
      {/* <ModalShipping provinces={provinces} /> */}
      {/* </main> */}
    </>
  );
}
