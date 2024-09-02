import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ItemsDropdown } from "./items-dropdown";

const categories = [
  {
    title: "Category 1",
    slug: "category-1",
    documentId: "1",
  },
  {
    title: "Category 2",
    slug: "category-2",
    documentId: "2",
  },
  {
    title: "Category 3",
    slug: "category-3",
    documentId: "3",
  },
];

export function Header() {
  return (
    <div className="sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between gap-8 px-4 py-4 container mx-auto">
        <div className="flex items-center gap-2 h-10">
          <Image
            src="https://placehold.co/45x45.png"
            alt="logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <h1 className="hidden md:block text-xl text-primary">Next Store</h1>
        </div>

        <div className="flex items-center justify-center gap-2 flex-1">
          <div className="hidden md:flex items-center gap-2">
            <ItemsDropdown label="Categories" items={categories} />
          </div>
          <div className="relative w-full max-w-sm hidden md:block ">
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 rounded-full"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="text-lg font-bold text-primary">0</span>
        </div>
        <Button>Login</Button>
      </div>
    </div>
  );
}
