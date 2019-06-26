module.exports = ()=>{
  const {Composite,Tab,TabFolder,ImageView,TextInput,TextView,Button,Font} = require('tabris');
  const appBasicsInformations = require('../helpers/appBasicsInformations.js');
  const menuTabs = new TabFolder({paging:true,tabBarBackground:appBasicsInformations.color1,
    right:0,left:0,selectedTabTintColor:'white',tabTintColor:'#8b8b8b',font:'16px roboto medium'});
  const t1 = new Tab({title:'Currency'}).appendTo(menuTabs);
  const t2 = new Tab({title:'Fork'}).appendTo(menuTabs);
  const t3 = new Tab({title:'Token'}).appendTo(menuTabs);
  const theCompositeHeader = new Composite({
    background:appBasicsInformations.color1,
    top:0,
    right:0,
    left:0,
    bottom:'50%',
    width:'auto'
  });
  const headerPart1 = new Composite({
    right:10,
    left:appBasicsInformations.leftSpacing,
    top:20,
    height:50
  }).appendTo(theCompositeHeader);
  const headerPart2 = new Composite({
    right:10,
    left:appBasicsInformations.leftSpacing,
    top:50,
    height:70
  }).appendTo(theCompositeHeader);
  const headerPart3 = new Composite({
    right:10,
    left:appBasicsInformations.leftSpacing,
    top:140,
    height:60
  }).appendTo(theCompositeHeader);
  const headerPart4 = new Composite({
    right:10,
    left:appBasicsInformations.leftSpacing,
    top:200,
    height:50
  }).appendTo(theCompositeHeader);
  headerPart4.append(menuTabs);
  const totalBalanceText = new TextView({
    text:"Total Balance",
    opacity:'0.4',
    font:appBasicsInformations.font16px,
    textColor:appBasicsInformations.color2,
  }).appendTo(headerPart1);
  const totalBalanceValue = new TextView({
    text:"$23 254",
    font:appBasicsInformations.font32px,
    textColor:appBasicsInformations.color2
  }).appendTo(headerPart2);
  const totalBalanceTodayValue = new TextView({
    text:"+ $ 223 73 today",
    font:appBasicsInformations.font16pxThin,
    textColor:appBasicsInformations.color3,
    opacity:'0.95',
    bottom:0
  }).appendTo(headerPart2);
  const buttonBuy = new Button({
    text:'Buy',
    style:'default',
    textColor:appBasicsInformations.color1,
    background:appBasicsInformations.color4,
    layoutData:appBasicsInformations.buttonLayout
  }).appendTo(headerPart3);
  const buttonSell = new Button({
    text:'Sell',
    style:'outline',
    left:130,
    textColor:appBasicsInformations.color4,
    background:appBasicsInformations.color4,
    layoutData:appBasicsInformations.buttonLayout
  }).appendTo(headerPart3);
  const notificationImage = new ImageView({
    image:'.src/icones/notification.png',
    width:50,
    height:50
  }).appendTo(headerPart1);
  return theCompositeHeader;
};
