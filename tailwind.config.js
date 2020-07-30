module.exports = {
    purge: {
        content: [
            './src/**/*.html',
            './src/**/*.svelte'
        ],

        whitelistPatterns: [/svelte-/],

        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []

    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}