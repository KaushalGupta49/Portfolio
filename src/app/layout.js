import {Montserrat} from 'next/font/google';
import './globals.css';
import Header from './_Home/header';
import Footer from './_Home/footer';

const inter = Montserrat({subsets: ['latin']});

export const metadata = {
  title: 'Kaushal Gupta',
  description: 'PortFolio of Kaushal Gupta',
  author: 'Kaushal Gupta',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`scroll-smooth ${inter.className} pt-14`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
