import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/global.css"


export const metadata = {
  title: '我的家乡景色',
  icons: {
    icon: '/icon.png'
  }
}

const RootLayout = ({ children }) => {
  return (
    <html lang="zh-Hans">
      <body>
        <Header/>
        <AntdRegistry>
          <main className="main-content">{children}</main>
        </AntdRegistry>
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout
