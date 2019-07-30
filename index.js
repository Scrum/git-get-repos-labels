"use strict";
exports.__esModule = true;
var graphqlGot = require("graphql-got");
exports["default"] = (function (_a) {
    var owner = _a.owner, name = _a.name, token = _a.token;
    return graphqlGot('https://api.github.com/graphql', {
        query: "{\n      repository(owner: \"" + owner + "\", name: \"" + name + "\") {\n        labels(last: 100) {\n          edges {\n            node {\n              name\n              color\n              description\n            }\n          }\n        }\n      }\n    }",
        token: token
    }).then(function (_a) {
        var edges = _a.response.body.repository.labels.edges;
        return edges;
    });
});
