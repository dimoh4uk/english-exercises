const path = require("path");

const ListCopyFiles = [
    {
        from: path.resolve(__dirname, "src") + "/index.html",
        to: path.resolve(__dirname, "dist") + "/index.html",
    }, {
        from: path.resolve(__dirname, "src") + "/*.json",
        to: path.resolve(__dirname, "dist") + "/[name].json",
    },
];

module.exports = {
    ListCopyFiles,
};
