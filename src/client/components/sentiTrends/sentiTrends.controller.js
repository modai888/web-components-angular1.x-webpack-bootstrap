/**
 * Created by mac on 16/12/15.
 */
'use strict';

// 图表相关
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

SentiTrendsController.$inject = ['$scope', '$element'];
function SentiTrendsController($scope, $element) {
    var self = this;
    
    self.title = 'senti-trends';

    $scope.$$postDigest(function () {
        initChart();
    });

    function initChart() {
        // 基于准备好的dom，初始化echarts实例
        var $chartContainer = $element[0].querySelector('.panel-body');
        // 设定高度
        $chartContainer.style.height = '350px';
        var chart = echarts.init($chartContainer);
        // 绘制图表
        chart.setOption({
            title: {text: 'ECharts 入门示例'},
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

        // 保存图表
        self.chart = chart;
    }
}

module.exports = SentiTrendsController;