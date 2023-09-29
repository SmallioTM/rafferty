import React from "react";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* Use "font-fort" class to apply the primary font */}
    </html>
  );
}
