import React from "react";
import Link from "next/link";

const categories = [
  {
    name: "React",
    slug: "react",
  },
  {
    name: "Web Development",
    slug: "web-development",
  },
];

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-gray-400 py-6">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-light text-gray-800 drop-shadow-lg">
              Scratchpad
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-gray-500 md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
