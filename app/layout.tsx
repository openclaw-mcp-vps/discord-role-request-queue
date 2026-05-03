import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Role Request Queue — Manage Role Requests with Approval Workflows",
  description: "Bot that creates ticket-style role request system with approval queues, auto-assignment rules, and admin dashboards for Discord servers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7cfec851-57b7-4643-a5d7-3129035f3d05"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
