"use client";

import { getLocationLatLonList } from "@/lib/getLocation-info";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setShowLocationList((prev) => !prev);
  };

  useEffect(() => {
    async function getLocations() {
      const locations = await getLocationLatLonList();
      setLocations(locations);
    }
    getLocations();
  }, []);

  return (
    <div className="relative">
      <button onClick={handleClick}>
        <Image
          className="size-9"
          src="/assets/icons/link.svg"
          alt="link icon"
          height={80}
          width={80}
        />
      </button>

      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations?.map((location) => (
              <li key={location?.latitude}>
                <Link
                  href={`/${location?.location}?latitude=${location?.latitude}&longitude=${location?.longitude}`}
                >
                  {location?.location}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
