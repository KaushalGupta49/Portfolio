import {Montserrat} from 'next/font/google';
import './globals.css';
import Header from './_Home/header';

const inter = Montserrat({subsets: ['latin']});

export const metadata = {
  title: 'Kaushal Gupta',
  description: 'PortFolio of Kaushal Gupta',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`scroll-smooth ${inter.className} py-14`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
