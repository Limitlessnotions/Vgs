"use client";

import { Suspense } from "react";

import PassengerDetailsContent from "./PassengerDetailsContent";

export const dynamic =
  "force-dynamic";

export default function PassengerDetailsPage() {

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <PassengerDetailsContent />
    </Suspense>
  );
}