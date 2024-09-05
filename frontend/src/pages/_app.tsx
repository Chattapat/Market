// _app.tsx
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'; // นำเข้า Navbar
import { CartProvider } from '../context/cartcontext'; // นำเข้า CartProvider
import { ToastContainer } from 'react-toastify'; // นำเข้า ToastContainer
import { ThemeProvider } from 'next-themes'; // นำเข้า ThemeProvider
import 'react-toastify/dist/ReactToastify.css'; // นำเข้า CSS ของ Toastify
import '../styles/global.css'; // นำเข้า global styles

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNavbar = router.pathname !== '/'; // ไม่แสดง Navbar ในหน้า index

  return (
    <ThemeProvider attribute="class">
      <CartProvider>
        {showNavbar && <Navbar />} {/* แสดง Navbar ทุกหน้าที่ไม่ใช่ index */}
        <Component {...pageProps} /> {/* แสดง component ของแต่ละ page */}
        <ToastContainer /> {/* แสดงการแจ้งเตือน */}
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
