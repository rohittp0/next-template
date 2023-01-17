module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "scope-enum": [1, "always", ["ui", "real"]],
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "chore",
                "style",
                "refactor",
                "ci",
                "test",
                "perf",
                "revert",
            ],
        ],
    },
};
