"use client";

import { Suspense } from "react";

import SelectReturnSeatsContent from "./SelectReturnSeatsContent";

export const dynamic =
  "force-dynamic";

export default function SelectReturnSeatsPage() {

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <SelectReturnSeatsContent />
    </Suspense>
  );
}