module.exports = {
    '/api': {
        target: 'https://breddit.equaleyes-solutions.com/',
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
        pathRewrite: {
            "^/api/*": "/",
        },
    }
};
