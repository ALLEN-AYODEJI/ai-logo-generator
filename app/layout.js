import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const hq = Host_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Logo Maker",
  description: "Create your own logo for Apps, Business, and Websites in seconds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={hq.className}
      >
        <Provider>
          {children}
        </Provider>
        
      </body>
    </html>
  );
}
