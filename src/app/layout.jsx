import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/component/LightRays";

const schibsted_Grotesk = Schibsted_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const martian_Mono = Martian_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Event",
  description: "The Hub for every Dev event you mustn't miss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${schibsted_Grotesk.variable} ${martian_Mono.variable} min-h-screen antialiased`}
      >
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.2}
            lightSpread={0.8}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
