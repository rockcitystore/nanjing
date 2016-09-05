module.exports = {
    "DEV": {
        "httpport": 3000,
        "servers": {
        }
    },
    "PRD": {
        "httpport": 3000,
        "servers": {
        }
    }
}[process.env.NODE_DEV || "DEV"];