"use client";

import { Suspense } from "react";

import SelectDepartureContent from "./SelectDepartureContent";

export const dynamic =
  "force-dynamic";

export default function SelectDeparturePage() {

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <SelectDepartureContent />
    </Suspense>
  );
}