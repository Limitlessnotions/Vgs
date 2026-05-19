"use client";

import { Suspense } from "react";

import ConfirmationContent from "./ConfirmationContent";

export const dynamic =
  "force-dynamic";

export default function RoundTripConfirmationPage() {

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}