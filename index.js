"use strict";
exports.__esModule = true;
var graphqlGot = require("graphql-got");
exports["default"] = (function (_a) {
    var owner = _a.owner, repo = _a.repo, token = _a.token;
    return graphqlGot('https://api.github.com/graphql', {
        query: "{\n      repository(owner: \"" + owner + "\", name: \"" + repo + "\") {\n        labels(last: 100) {\n          edges {\n            node {\n              id\n              name\n              color\n              description\n            }\n          }\n        }\n      }\n    }",
        token: token
    }).then(function (_a) {
        var edges = _a.body.repository.labels.edges;
        return edges.map(function (_a) {
            var node = _a.node;
            return node;
        });
    });
});
