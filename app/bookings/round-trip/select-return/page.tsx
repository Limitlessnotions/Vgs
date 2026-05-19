"use client";

import { Suspense } from "react";

import SelectReturnContent from "./SelectReturnContent";

export const dynamic =
  "force-dynamic";

export default function SelectReturnPage() {

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <SelectReturnContent />
    </Suspense>
  );
}