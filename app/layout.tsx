import '../styles/tailwind.scss';
import '../styles/globals.scss';

// import { Inter } from '@next/font/google';
import { Ruda } from '@next/font/google';

// const inter = Inter({
//     variable: '--font-inter',
// });
{/*<div className={`${inter.variable} font-inter`}>*/}

const ruda = Ruda({
    weight: '400',
    variable: '--font-ruda',
});

interface RootLayoutProps {
    children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang={'en'}>
            <body>
                <div className={`${ruda.variable} font-ruda`}>
                    {children}
                </div>
            </body>
        </html>
    );
}
