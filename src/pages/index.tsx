import Image from "next/image";
import { Inter } from "next/font/google";
import { Portfolio } from "@/components/component/portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Portfolio/>
  );
}
