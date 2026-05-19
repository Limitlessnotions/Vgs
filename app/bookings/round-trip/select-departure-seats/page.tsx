"use client";

import { Suspense } from "react";

import SelectDepartureSeatsContent from "./SelectDepartureSeatsContent";

export const dynamic =
  "force-dynamic";

export default function SelectDepartureSeatsPage() {

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <SelectDepartureSeatsContent />
    </Suspense>
  );
}