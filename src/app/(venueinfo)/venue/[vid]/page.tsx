"use client";
import { venues } from "@/constants/venue";
import React from "react";

interface PageProps {
  params: { vid: string }; // Explicitly define params
}

const Page = ({ params }: PageProps) => {
  const { vid } = params; // Destructure params

  const venue = venues.find((v) => v.vid === vid);

  if (!venue) {
    return <p className="text-center text-red-500">Venue not found!</p>;
  }

  return (
    <main className="mx-auto px-6 sm:px-10 bg-neutral-100 flex flex-col items-center min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 text-center my-4">
        {venue.name}
      </h2>
      <div className="w-1/2">
        <img
          src={venue.imgSrc}
          alt={venue.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </main>
  );
};

export default Page;
