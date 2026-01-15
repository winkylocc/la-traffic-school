import "./globals.css";

export const metadata = {
  title: "LA Traffic School Online | Fast, Self-Paced Course",
  description:
    "Online traffic school for Los Angeles drivers. Self-paced, mobile-friendly, and easy enrollment. Get proof of completion after finishing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
