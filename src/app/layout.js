import { AntdRegistry } from '@ant-design/nextjs-registry';
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import BackTop from "antd/es/float-button/BackTop";
import NextTopLoader from 'nextjs-toploader';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/global.css"

export const metadata = {
  title: '我的家乡景色',
  icons: {
    icon: '/icon.png'
  }
}

const customLocale = {
  ...zhCN,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="zh-Hans">
      <body>
        <ConfigProvider
            locale={customLocale}
            theme={{
              token: {
                colorPrimary: '#34b585'
              }
            }}
        >
          <Header/>
          <AntdRegistry>
            <main className="main-content">
              <NextTopLoader
                  color={"#ffd103"}
                  showSpinner={false}
                  initialPosition={0.2}
                  speed={400}
              />
              {children}
              <BackTop/>
            </main>
          </AntdRegistry>
          <Footer/>
        </ConfigProvider>
      </body>
    </html>
  );
}

export default RootLayout
