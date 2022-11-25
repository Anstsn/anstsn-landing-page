import '../styles/tailwind.scss';
import '../styles/globals.scss';

import React, { FC } from 'react';
import { Ruda } from '@next/font/google';

// import { Inter } from '@next/font/google';
// const inter = Inter({
//     variable: '--font-inter',
// });
{/*<div className={`${inter.variable} font-inter`}>*/}

const ruda = Ruda({
    weight: '400',
    variable: '--font-ruda',
});

export type RootLayoutProps = {
    children: React.ReactNode;
}

const RootLayout:FC<RootLayoutProps> = ({ children }) => {
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

export default RootLayout;
