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
    }])
    .service('menuService', ['$state', function ($state) {
        var self = this;

        function enhanceItem(item, childrenAttributeName, parent) {
            // item.$folded = true;

            item.$hasChildren = function () {
                var chidren = this[childrenAttributeName];
                return chidren && chidren.length;
            };

            item.$isFolded = function () {
                return this.$folded;
            };

            item.$toggleFolded = function () {
                var folded = this.$folded;
                angular.forEach(parent[childrenAttributeName], function (item) {
                    item.$folded = false;
                });
                this.$folded = !folded;
            };

            item.$setFolded = function ($folded) {
                $folded = !!$folded;
                angular.forEach(parent[childrenAttributeName], function (item) {
                    item.$folded = !$folded;
                });
                this.$folded = $folded;
            };

            // 打开或折叠菜单项
            item.$toggleOpen = function () {
                // 如果是符合菜单，则添加或删除open
                if (this.$hasChildren()) {

                }
            }

        }

        self.enhance = function (items, childrenAttributeName, parent) {
            if (angular.isUndefined(childrenAttributeName)) {
                childrenAttributeName = 'children';
            }

            if (!parent) {
                (parent = {})[childrenAttributeName] = items;
            }

            angular.forEach(items, function (item) {
                enhanceItem(item, childrenAttributeName, parent);
                if (item.$hasChildren()) {
                    self.enhance(item[childrenAttributeName], childrenAttributeName, item);
                }
            })
        };

        self.select = function (items, stateAttribute, childrenAttribute, stack) {
            if (!stateAttribute) {
                stateAttribute = 'uiSref';
            }
            if (!childrenAttribute) {
                childrenAttribute = 'children';
            }

            stack = stack || [];

            for (var item, i = 0, len = items.length; i < len; i++) {
                item = items[i];
                if (item.$hasChildren()) {
                    stack.push(item);
                    self.select(item[childrenAttribute], stateAttribute, childrenAttribute, stack);
                }

                if (item[stateAttribute]) {
                    item.$folded = $state.is(item[stateAttribute]);
                }

                item.$folded && stack.push(item);
            }
            // 判断栈顶元素
            if (stack.length) {
                var last = stack.pop();
                if (last.$folded) {
                    stack.forEach(function (item) {
                        item.$setFolded(true);
                    });
                }
            }
        }
    }])
    .filter('menu', ['menuService', function (menuService) {
        return function (items, childName) {
            // 增强
            menuService.enhance(items, childName);
            return items;
        }
    }])
    .directive('uiMenu', ['$compile', 'menuService', function ($compile, menuService) {
        return {
            restrict: 'A',
            scope: {},
            controller: function ($scope, $attrs) {
                $scope.$watch(function () {
                    return $scope.$parent.$eval($attrs.uiMenu);
                }, function (menus) {
                    if (!menus) return;
                    menuService.select(menus, 'uiSref');
                })
            },
            compile: function (tElement, tAttrs) {
                // // 修改模版
                var templ = tElement.html();
                // // 使用正则表达式
                // // menuItem = menuItem.replace(/^\s*\<([\S\s]*?)>/g, '<$1 ng-repeat="' + tAttrs.uiMenu + '" >');
                // debugger;
                // templ = templ.replace(/ui-menu-item(?:=\"([\S\s]*?)\")?/g, 'ng-repeat="$1 in menus"');
                // // templ = templ.replace(/^\s*\<([\S\s]*?)>/g, '<$1 ng-repeat="menu in menus">');
                // tElement.html(templ);
                //
                var menuItem = tElement.children().attr('ui-menu-item');
                templ = templ.replace(/ui-menu-item(?:=\"([\S\s]*?)\")?/g, 'ng-repeat="$1 in ' + tAttrs.uiMenu + '|menu"');

                tElement.html(templ);

                return {
                    pre: function ($scope, $element, $attrs, ctrl) {
                        ctrl.$template = templ;
                    }
                };
            }
        }
    }])
    .directive('uiMenuItem', [function () {
        return {
            restrict: 'A',
            require: '^uiMenu',
            compile: function (tElement, tAttrs) {
            }
        }
    }])
    .directive('uiSubmenu', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            require: '^uiMenu',
            link: function ($scope, $element, $attrs, uiMenuCtrl) {
                // var template = uiMenu.$template;
                var $newScope = $scope.$new();
                $newScope.menus = $scope.$eval($attrs.uiSubmenu || 'menu.children'); //$scope[$attrs.uiSubmenu || 'menu.children'];

                if ($newScope.menus && $newScope.menus.length) {
                    var dom = $compile(uiMenuCtrl.$template)($newScope);
                    $element.append(dom);
                }
                else {
                    $element.remove();
                }
            }
        }
    }])
    .directive('uiTest', ['$log', function ($log) {
        return {
            restrict: 'EA',
            template: '<div>test</div>',
            compile: function (tElement, tAttrs, tfn) {
                debugger;
            }
        }
    }]);

module.exports = 'widgets.ui.tree';