/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",

        "./src/**/*.{js,jsx,ts,tsx}",

    ],
    theme: {
        extend: {
            transitionTimingFunction: {
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            },
            transitionProperty: {
                'opacity': 'opacity',
            },







        },
        screens: {
            '2xl': { 'max': '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xl': { 'max': '1279px' },
            // => @media (max-width: 1279px) { ... }

            'lg': { 'max': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'md': { 'max': '913px' },
            // => @media (max-width: 767px) { ... }
            'msd': { 'max': '761px' },
            // => @media (max-width: 761px) { ... }

            'sm': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }
        }
    },
    plugins: [],
}