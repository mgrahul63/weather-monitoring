"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams(searchParams.toString()); 

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          params.set("latitude", position.coords.latitude);
          params.set("longitude", position.coords.longitude);

          setLoading(false);

          router.push(`/current?${params.toString()}`);
        },
        (error) => {
          console.log("Error fetching location:", error);
          setLoading(false);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, [pathName, searchParams.toString(), router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading ? (
        <p>Detecting location...</p>
      ) : (
        <p>Location detection complete or not supported.</p>
      )}
    </div>
  );
};

export default LocationDetector;
