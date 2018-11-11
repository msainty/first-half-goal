module.exports = {
    "extends": "airbnb",
    "rules": {
        "import/no-unresolved": "off",
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    },
    "env": {
        "jest": true,
        "browser": true
    },
    "parser": "babel-eslint",
    "plugins": [
        "flow-header",
        "flowtype"
    ],
    "settings": {
        "import/parser": "babel-eslint",
        "import/extensions": "never"
    }
};