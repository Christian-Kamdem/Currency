const {Canvas,statusBar,ImageView,ScrollView,contentView,Composite,TextInput,TextView,Button,Font} = require('tabris');
const theCompositePage = new ScrollView({
  top:15,
  right:0,
  left:0,
  bottom:0,
  width:'auto',
  background:'#e5e5e5'
}).appendTo(contentView);
const mainPageHeader = require('./views/mainPageHeader.js')();
const appBasicsInformations = require('./helpers/appBasicsInformations.js');
const mainPageBody = require('./views/mainPageBody.js')();
statusBar.background = appBasicsInformations.color1;
statusBar.displayMode = 'float';
theCompositePage.append(mainPageHeader).append(mainPageBody);
const chartComposite = new Composite({
  right:10,
  left:10,
  height:235,
  top:365,
  id:'chartComposite'
}).appendTo(theCompositePage);
//Chart
const bitcoinBigGraph = new ImageView({
  image:'src/icons/bars-chart.png',
  centerX:0,
  width:400,
  height:200,
  top:400
}).appendTo(theCompositePage);
//const Chart = require('chart.js/Chart.min.js');
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
