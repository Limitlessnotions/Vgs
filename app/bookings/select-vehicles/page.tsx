"use client";

import { Suspense } from "react";

import SelectVehiclesContent from "./SelectVehiclesContent";

export const dynamic =
  "force-dynamic";

export default function SelectVehiclesPage() {

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <SelectVehiclesContent />
    </Suspense>
  );
}