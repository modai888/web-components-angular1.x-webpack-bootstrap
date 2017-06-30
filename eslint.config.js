/**
 * eslint 校验规则.
 */

module.exports = {
    extends: 'eslint:recommended',
    // 国双推荐js规则
    rules: {
        // [建议] 在文件结尾处，保留一个空行。
        'eol-last': ['error', 'always'],
        //[建议] 行尾不得有多余的空格
        'no-trailing-spaces': ["warn", {"skipBlankLines": true}],
        // [建议] 每行不得超过 120 个字符
        'max-len': ['warn', 120],
        // [建议] 运算符处换行时，运算符必须在新行的行首
        // [建议] 在函数声明、函数表达式、函数调用、对象创建、数组创建、for 语句等场景中，不允许在 , 或 ; 前换行
        // [建议] 不同行为或逻辑的语句集，使用空行隔开，更易阅读
        // [建议] 在语句的行长度超过 120 时，根据逻辑条件合理缩进
        // [建议] Promise对象 用 动宾短语的进行时 表达
        // [建议] boolean 类型的变量使用 is 或 has 开头
        // [建议] 函数名 使用 动宾短语
        // [建议] 枚举变量 使用 Pascal命名法，枚举的属性 使用 全部字母大写，单词间下划线分隔 的命名方式 （review）
        // [建议] 命名空间 使用 Camel命名法 （review）

        // [强制] 使用 4 个空格做为一个缩进层级，不允许使用 2 个空格 或 tab 字符。
        // [强制] switch 下的 case 和 default 必须增加一个缩进层级。
        'indent': ['error', 4, {'SwitchCase': 1}],
        // 一元运算符，如 new, delete, typeof, void, yield 与运算对象间保持空格
        // 一元运算符，如-, +, --, ++, !, !! 与运算对象保持空格
        'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
        // [强制] 二元运算符两侧必须有一个空格
        'space-infix-ops': ["error", {"int32Hint": false}],
        // [强制] 用作代码块起始的左花括号 { 前必须有一个空格
        'space-before-blocks': ['error', {"functions": "always", "keywords": "always", "classes": "always"}],
        // 尖头函数 => 前后必须有一个空格
        'arrow-spacing': ["error", {"before": true, "after": true}],
        // [强制] if / else / for / while / function / switch / do / try / catch / finally 关键字后，必须有一个空格
        'keyword-spacing': ['error', {"before": true, "after": true}],
        // [强制] 在对象创建时，属性中的 : 之后必须有空格，: 之前不允许有空格

        // [强制] 函数声明、具名函数表达式、函数调用中，函数名和 ( 之间不允许有空格
        // 函数调用
        'func-call-spacing': ["error", "never"],
        'space-before-function-paren': ["error", {
            "anonymous": "ignore",
            "named": "never",
            "asyncArrow": "never"
        }],
        // [强制] , 和 ; 前不允许有空格。如果不位于行尾，, 和 ; 后必须跟一个空格
        'comma-spacing': ["error", {"before": false, "after": true}],
        'comma-style': ["error", "last"],
        'semi-spacing': ["error", {"before": false, "after": true}],
        // [强制] 在函数调用、函数声明、括号表达式、属性访问、if / for / while / switch / catch 等语句中，() 和 [] 内紧贴括号部分不允许有空格
        'space-in-parens': ["error", "never"],
        // [强制] 单行声明的数组与对象，如果包含元素，{} 和 [] 内紧贴括号部分不允许包含空格
        'array-bracket-spacing': ["error", "never"],
        'object-curly-spacing': ["error", "never"],

        // [强制] 每个独立语句结束后必须换行
        // [强制] 不得省略语句结束的分号
        'semi': ["error", "always"],
        // [强制] 在 if / else / for / do / while 语句中，即使只有一行，也不得省略块 {...}
        // [强制] 函数定义结束不允许添加分号
        // [强制] IIFE 必须在函数表达式外添加 (，非 IIFE 不得在函数表达式外添加 (
        'wrap-iife': ["error", "inside"],
        // [强制] 变量 使用 Camel命名法
        'camelcase': ['error'],
        // [强制] 常量 使用 全部字母大写，单词间下划线分隔 的命名方式（review）
        // [强制] 函数 使用 Camel命名法 （review）
        // [强制] 函数的 参数 使用 Camel命名法 （review）
        // [强制] 类 使用 Pascal命名法 （review）


        // [强制] 类名 使用 名词
        // [强制] 由多个单词组成的缩写词，在命名中，根据当前命名法和出现的位置，所有字母的大小写与首字母的大小写保持一致

        /* 注释 */

        // [建议] 必须独占一行。// 后跟一个空格，缩进与下一行被注释说明的代码一致
        // 'line-comment-position': ["error", {"position": "beside"}],
        'no-inline-comments': "error",
        'spaced-comment': ["error", "always"],
        // jsdoc 注释规范
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": true
            }
        }],

        /* 语言特性 */

        // [建议] 每个 var 只能声明一个变量
        'one-var': ["warn", "never"],
        // [建议] 对于相同变量或表达式的多值条件，用 switch 代替 if (review)
        // [建议] 对循环内多次使用的不变值，在循环外用变量缓存 (review)
        // [建议] 对有序集合进行遍历时，缓存 length
        // [建议] 对有序集合进行顺序无关的遍历时，使用逆序遍历
        // [建议] 类型检测优先使用 typeof。对象类型检测使用 instanceof。null 或 undefined 的检测使用 == null
        'valid-typeof': "warn",
        // [建议] 转换成 string 时，使用 + ''
        // [建议] 转换成 number 时，通常使用 +
        // [建议] string 转换成 number，要转换的字符串结尾包含非数字并期望忽略时，使用 parseInt
        // [建议] 使用 parseInt 时，必须指定进制
        // [建议] 转换成 boolean 时，使用 !!
        // [建议] number 去除小数点，使用 Math.floor / Math.round / Math.ceil，不使用 parseInt
        // [建议] 字符串开头和结束使用单引号 '
        'quotes': ["warn", "single"],
        // [建议] 使用 数组 或 + 拼接字符串
        // [建议] 使用对象字面量 {} 创建新 Object
        'no-new-object': "warn",
        // [建议] 属性访问时，尽量使用 .
        // [建议] for in 遍历对象时, 使用 hasOwnProperty 过滤掉原型中的属性
        'guard-for-in': "error",
        // [建议] 清空数组使用 .length = 0


        // [强制] 变量、函数在使用前必须先定义。
        'no-undef': ['error'],
        // [强制] 在 Equality Expression 中使用类型严格的 ===。仅当判断 null 或 undefined 时，允许使用 == null
        'eqeqeq': ["error", "always", {"null": "ignore"}],
        // [强制] 不要在循环体中包含函数表达式，事先将函数提取到循环体外
        'no-loop-func': "error",
        // [强制] 不允许修改和扩展任何原生对象和宿主对象的原型
        'no-extend-native': "error",

        // [强制] 避免使用直接 eval 函数
        'no-eval': "error",


        "no-alert": 0,
        "no-bitwise": 0,
        "curly": 1,
        "no-eq-null": 0,
        "no-empty": 1
    },
    globals: [
        'angular',
    ],
    envs: [
        'browser',
        'jquery',
        'node',
        // 使用es6 ＋ webpack
        'es6',
        'commonjs',
        // jasmine 测试
        'jasmine'
    ]
}
;