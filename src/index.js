const {Canvas,contentView,Composite,TextInput,TextView,Button,Font} = require('tabris');
const theCompositePage = new Composite({
  top:0,
  right:0,
  left:0,
  bottom:0,
  width:'auto',
  background:'#e5e5e5'
}).appendTo(contentView);
const mainPageHeader = require('./views/mainPageHeader.js')();
const mainPageBody = require('./views/mainPageBody.js')();
theCompositePage.append(mainPageHeader).append(mainPageBody);
const chartComposite = new Composite({
  right:10,
  left:10,
  height:235,
  top:365,
  id:'chartComposite'
}).appendTo(theCompositePage);
//Chart
const Chart = require('chart.js/Chart.min.js');
const ctx = new Canvas({layoutData: 'stretch'})
  .onResize(({target: canvas, width, height}) => {
    let context = canvas.getContext("2d", 100, 100);
    context.moveTo(0, 0);
  }).appendTo(chartComposite);
 /*new Chart(ctx)["Doughnut"](chartData, {
     animation: checkboxAnimate.get("#chartComposite"),
     showScale: true,
     showTooltips: false,
     scaleShowLabels: true
 });*/
