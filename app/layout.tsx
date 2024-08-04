import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // Add this import
import './global.css'

export const metadata = {
  title: "Flexible",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

