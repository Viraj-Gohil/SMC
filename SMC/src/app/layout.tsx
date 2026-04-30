import type { Metadata } from "next";
import { Nunito_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/app/providers/theme-provider";

const nunitoSans = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shreemanavclasses.com'),
  title: 'Shree Manav Classes – Top Tuition Classes in Chhani',
  description: 'Shree Manav Classes offers AC classrooms, CCTV security, expert faculty, and personalised tuition for Class 5th–12th students in Chhani.',
  keywords: [
    'Tuition classes Chhani',
    'AC classrooms',
    'CCTV security',
    'Class 5th tuition',
    'Class 12th coaching',
    'commerce tuition',
    'arts tuition',
    'small batch coaching',
  ],
  openGraph: {
    title: 'Shree Manav Classes – Top Tuition Classes in Chhani',
    description: 'AC classrooms, CCTV-monitored security, small batches, and expert guidance for Class 5th–12th students in Chhani.',
    type: 'website',
    siteName: 'Shree Manav Classes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Manav Classes – Top Tuition Classes in Chhani',
    description: 'AC classrooms, CCTV-monitored security, small batches, and expert guidance for Class 5th–12th students in Chhani.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/fav.png',
    shortcut: '/fav.png',
    apple: '/fav.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunitoSans.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
