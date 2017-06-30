/**
 * css 校验规则
 */

module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "block-no-empty": null,
        "color-no-invalid-hex": true,
        "comment-empty-line-before": ["always", {
            "ignore": ["stylelint-commands", "between-comments"]
        }],
        "indentation": 4,
        // "indentation": ["tab", {
        //     "except": ["value"]
        // }],
        "max-empty-lines": 2,
        "rule-nested-empty-line-before": ["always", {
            "except": ["first-nested"],
            "ignore": ["after-comment"]
        }],
        "unit-whitelist": ["em", "rem", "%", "s"],
        "no-duplicate-selectors": true,
        "max-line-length": 120,
        "string-quotes": "double",
        "max-nesting-depth": 3,

        "block-opening-brace-space-before": "always",
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "value-list-comma-space-after": "always",
        "value-list-comma-space-before": "never",
        "declaration-block-trailing-semicolon": "always",

        //selector
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",

        //declare
        "declaration-no-important": true,
        "declaration-block-properties-order": [
            "content",
            "position", "top", "right", "bottom", "left", "float", "display", "overflow",
            "border", "margin ", "padding ", "width", "height",
            "font", "line-height ", "text-align", "word-wrap",
            "background", "color", "transition", "list-style"
        ],

        //number
        "number-leading-zero": "always",
        "number-no-trailing-zeros": true,
        // 长度尺寸为0时，不加单位
        "length-zero-no-unit": true,

        //value
        "value-keyword-case": "lower",
        "shorthand-property-no-redundant-values": true,

        //color
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",

        //font
        "font-family-name-quotes": "always-where-required",
        "font-weight-notation": "numeric"
    }
};