import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 min-h-svh">
      <div className="flex flex-row row-span-2 gap-10">
        <div className="py-40 px-3 border-black border-t border-dashed border-b">
          <h1 className=" text-8xl">WELCOME</h1>
          <p className="text-xl mb-3">Splitting Receipts Made Easier.</p>
          <Link href={"/dashboard"}>
            <Button>Start Now</Button>
          </Link>
        </div>
        <div className="py-40 px-3">
          <h1 className="text-8xl">How It Works</h1>
          <ol>
            <li>1.Take A Picture Of The Receipt</li>
            <li>2.The App Parses All Items</li>
            <li>3.Assign People To Items</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
