import Link from "next/link";
import ProductCard from "./components/productCard";

export default function Home() {
  return (
    <main>
      <h1 className="">Hello World</h1>
      <Link href="/users">to users</Link>
      <ProductCard />
      
    </main>
  )
}
