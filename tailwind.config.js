const { colors } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        './app/*.{ts,tsx}',
        './components/**/*.{ts,tsx}'
    ],
    theme: {
        screens: {
            mobile: { min: '320px', max: '480px' },
            desktop: { min: '481px' },
        },
        container: {
            center: true,
            padding: {
                mobile: '20px',
                desktop: '80px',
            },
        },
        extend: {
            fontSize: {
                // 'h-base': ['60px', { lineHeight: '140%', fontWeight: '400', }],
            },
            backgroundImage: {
                none: 'unset',
                body: 'linear-gradient(to bottom, #222222, #000000)',
            },
            colors: {
                ...colors,
            },
            dropShadow: {
            },
            // backdropBlur: {
            //     popup: '70px',
            // }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        // function ({ addComponents }) {
        //     addComponents({
        //         '.container': {
        //             maxWidth: '100%',
        //
        //             '@screen mobile': {
        //                 maxWidth: '480px'
        //             },
        //
        //             '@screen large': {
        //                 maxWidth: '1440px'
        //             }
        //         },
        //     });
        // }
    ]
};
