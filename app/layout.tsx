import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { Rajdhani } from 'next/font/google';
export const metadata = {
  title: 'Total Care Auto',
  description: 'Fix your car with experts',
}
const rajdhani = Rajdhani({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: [ '300', '400', '500', '600', '700']
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rajdhani.className}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
