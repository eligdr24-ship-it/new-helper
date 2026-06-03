import "./globals.css";
import { config } from "../lib/config";

export const metadata = {
  title: `Leave a review · ${config.businessName}`,
  description: `Share your honest experience with ${config.businessName} on Google.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
