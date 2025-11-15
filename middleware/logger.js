const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const { method, url, ip } = req;
    console.log(`[${timestamp}] ${method} ${url} - Client: ${ip}`);
    next();
};

module.exports = logger;
