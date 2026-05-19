"use client";

import { Suspense } from "react";

import PaymentContent from "./PaymentContent";

export const dynamic =
  "force-dynamic";

export default function RoundTripPaymentPage() {

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}