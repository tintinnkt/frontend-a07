import CardPanel from "@/components/CardPanel";
import React from "react";

const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center pb-100 h-fit w-full">
      <h2 className="text-2xl font-semibold text-gray-800 text-center my-4">
        Explore Our Venues
      </h2>
      <CardPanel />
    </main>
  );
};

export default page;
