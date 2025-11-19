import Link from "next/link";

export default function ProductsPageAdmin() {
  return (
    <div>
      <h1>Products Page for admin</h1>
      <Link href="/admin/products/1">to detail</Link>
    </div>
  );
}
