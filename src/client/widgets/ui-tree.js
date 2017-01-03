'use strict';

var angular = require('angular');

/**
 *  解析repeat表达式
 *  格式： a in b of c
 *  结果：{value:"a", collection:"b", root:"c" }
 *  <ul>
 *      <li ui-tree="node in children of treeData">
 *          <a>{{node.name}}</a>
 *          <ul>
 *              <li ui-tree-curse></li>
 *          </ul>
 *      </li>
 *
 *  </ul>
 * */
function parseRepeatExpr(expr) {
    var reg = /\s*([\$\w]+)\s+in\s+([\S\s]+)\s+of\s+([\S\s]+)\s*/;
    var match = expr.match(reg);
    if (!match) {
        throw new Error('Expected repeate expression in format "_item_ in _collection_ of _root_" ');
    }
    return {
        value: match[1],
        collection: match[2],
        root: match[3]
    }
}

angular.module('widgets.ui.tree', [])
// 装饰型指令
    .directive('uiTree', ['$log', function ($log) {
        return {
            restrict: 'A',
            controller: ['$scope', '$attrs', function (scope, attrs) {
                var indent = this.indent = parseRepeatExpr(attrs.uiTree);
                scope.$watch(indent.root, function (r) {
                    scope[indent.value] = r;
                })
            }],
            compile: function (tEle, tAttr) {
                var template = tEle.html();
                return {
                    pre: function (scope, ele, attr, controller) {
                        controller.template = template;
                    }
                }
            }
        }
    }])
    .directive('uiTreeCurse', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            require: '^uiTree',
            link: function ($scope, $ele, $attrs, uiTreeCtrl) {
                var ele = $ele[0];
                var indent = uiTreeCtrl.indent;
                var treeNode = [
                    '<' + ele.tagName + ' ng-repeat="',
                    indent.value,
                    ' in ',
                    indent.value + '.' + indent.collection + '">',
                    uiTreeCtrl.template,
                    '</' + ele.tagName + '>'
                ];
                var el = angular.element(treeNode.join(''));
                $ele.replaceWith(el);
                $compile(el)($scope);
            }
        }
    }]);

module.exports = 'widgets.ui.tree';