import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'MHD Gaming Hub | دنیای بازی، یک‌جا',
  description: 'مرجع بازی‌های ویدیویی، اخبار، بررسی‌ها و ابزارهای گیمینگ برای جامعه گیمرهای فارسی‌زبان.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
