const { colors } = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        './app/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/screens/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}'
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
            fontFamily: {
                // inter: ['var(--font-inter)', ...fontFamily.sans],
                ruda: ['var(--font-ruda)', ...fontFamily.sans],
            },
            fontSize: {
                base: ['18px', { lineHeight: '140%', fontWeight: '400', }],
                l: ['24px', { lineHeight: '140%', fontWeight: '400', }],
                xl: ['32px', { lineHeight: '140%', fontWeight: '400', }],
            },
            backgroundImage: {
                none: 'unset',
                body: 'linear-gradient(to bottom, #222222, #000000)',
            },
            colors: {
                ...colors,

                general: {
                    text: '#ffffff',
                }
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
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',

                    '@screen mobile': {
                        maxWidth: '480px'
                    },

                    '@screen desktop': {
                        maxWidth: 'unset'
                    }
                },
                '.centered': {
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }
            });
        }
    ]
};
