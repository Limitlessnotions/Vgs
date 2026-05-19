"use client";

import { Suspense } from "react";

import SelectSeatsContent from "./SelectSeatsContent";

export const dynamic =
  "force-dynamic";

export default function SelectSeatsPage() {

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <SelectSeatsContent />
    </Suspense>
  );
}