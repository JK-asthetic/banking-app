export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <h1>hi</h1>
      <div className="pt-10">{children}</div>
    </main>
  );
}
