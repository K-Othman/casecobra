"use client";

import { cn } from "@/lib/utils";

const page = () => {
  return (
    <div
      className={cn(
        "relative h-full flex flex-1 my-16 w-full rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10"
      )}
    ></div>
  );
};

export default page;
