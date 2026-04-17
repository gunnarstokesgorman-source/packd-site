export const metadata = {
  title: "Packd — Know Before You Go",
  description: "See which bars are packed, which are dead, and where your friends are — all in real time. Launching at Auburn University.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#08080D" }}>{children}</body>
    </html>
  );
}
