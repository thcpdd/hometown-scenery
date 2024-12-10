export const metadata = {
  title: '我的家乡景色'
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
