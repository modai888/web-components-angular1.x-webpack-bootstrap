/**
 * Created by mac on 16/12/15.
 */
'use strict';

function headerDirective() {
    return {
        restrict: 'EA',
        scope: {
            skin: '=?',
            cls: '@'
        },
        replace: true,
        template: require('./aside.html'),
        link: function ($scope) {
            $scope.skin = $scope.skin || 'th-black';
            $scope.menus = [
                {
                    label: 'Dashboard',
                    icon: 'fa fa-fw fa-dashboard',
                    children: [
                        {
                            label: 'Dashboard',
                            cls: 'nav-sub-header'
                        }, {
                            label: '金融行业',
                            href: 'admin2'
                        }, {
                            label: '汽车行业',
                            children: [
                                {
                                    label: '新闻统计',
                                    uiSref: 'admin22'
                                }, {
                                    label: '论坛统计',
                                    uiSref: 'admin33'
                                }
                            ]
                        }
                    ]
                }, {
                    label: '租户管理',
                    icon: 'fa fa-fw fa-user-o',
                    children: [
                        {
                            label: '租户管理',
                            cls: 'nav-sub-header'
                        },
                        {
                            label: '租户信息',
                            uiSref: 'admin333'
                        }, {
                            label: '租户权限',
                            children: [
                                {
                                    label: '租户A',
                                    uiSref: 'admin333'
                                }, {
                                    label: '租户B',
                                    uiSref: 'admin'
                                }
                            ]
                        }
                    ]
                }, {
                    label: '权限管理',
                    icon: 'fa fa-fw fa-list'
                }, {
                    label: '布局管理',
                    uiSref: 'admin.layout',
                    icon: 'fa fa-fw fa-list'
                }
            ];
        }
    }
}

module.exports = headerDirective;