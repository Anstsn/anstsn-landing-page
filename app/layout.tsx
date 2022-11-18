import '../styles/tailwind.scss';
import '../styles/globals.scss';

// import { Inter } from '@next/font/google';
import { BhuTuka_Expanded_One } from '@next/font/google';

// const inter = Inter({
//     variable: '--font-inter',
// });
{/*<div className={`${inter.variable} font-inter`}>*/}

const bhutuka = BhuTuka_Expanded_One({
    weight: '400',
    variable: '--font-bhutuka',
});

interface RootLayoutProps {
    children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang={'en'}>
            <body>
                <div className={`${bhutuka.variable} font-bhutuka`}>
                    {children}
                </div>
            </body>
        </html>
    );
}
