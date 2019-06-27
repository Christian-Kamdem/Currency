"use strict";
module.exports = () => {
    const { Composite, Tab, TabFolder, ImageView, TextInput, TextView, Button, Font } = require('tabris');
    const appBasicsInformations = require('../helpers/appBasicsInformations.js');
    const menuTabs = new TabFolder({ paging: true, tabBarBackground: appBasicsInformations.color1,
        right: 0, left: 0, selectedTabTintColor: 'white', tabTintColor: '#a5aadf' });
    const t1 = new Tab({ title: 'Currency' }).appendTo(menuTabs);
    const t2 = new Tab({ title: 'Fork' }).appendTo(menuTabs);
    const t3 = new Tab({ title: 'Token' }).appendTo(menuTabs);
    const theCompositeHeader = new Composite({
        background: appBasicsInformations.color1,
        top: 0,
        right: 0,
        left: 0,
        bottom: '50%',
        width: 'auto'
    });
    const headerPart1 = new Composite({
        right: 10,
        left: appBasicsInformations.leftSpacing,
        top: 20,
        height: 50
    }).appendTo(theCompositeHeader);
    const headerPart2 = new Composite({
        right: 10,
        left: appBasicsInformations.leftSpacing,
        top: 50,
        height: 70
    }).appendTo(theCompositeHeader);
    const headerPart3 = new Composite({
        right: 10,
        left: appBasicsInformations.leftSpacing,
        top: 140,
        height: 60
    }).appendTo(theCompositeHeader);
    const headerPart4 = new Composite({
        right: 10,
        left: appBasicsInformations.leftSpacing,
        top: 200,
        height: 50
    }).appendTo(theCompositeHeader);
    headerPart4.append(menuTabs);
    const totalBalanceText = new TextView({
        text: "Total Balance",
        font: appBasicsInformations.font16px,
        textColor: '#a5aadf',
    }).appendTo(headerPart1);
    const totalBalanceValue = new TextView({
        text: "$23 254",
        font: appBasicsInformations.font32px,
        textColor: appBasicsInformations.color2
    }).appendTo(headerPart2);
    const totalBalanceTodayValue = new TextView({
        text: "+ $223 73 today",
        font: appBasicsInformations.font14pxThin,
        textColor: appBasicsInformations.color3,
        opacity: '0.95',
        bottom: 0
    }).appendTo(headerPart2);
    const buttonBuy = new Button({
        text: 'Buy',
        style: 'default',
        textColor: appBasicsInformations.color1,
        background: appBasicsInformations.color4,
        layoutData: appBasicsInformations.buttonLayout
    }).appendTo(headerPart3);
    const buttonSell = new Button({
        text: 'Sell',
        style: 'outline',
        left: 130,
        textColor: appBasicsInformations.color4,
        background: appBasicsInformations.color4,
        layoutData: appBasicsInformations.buttonLayout
    }).appendTo(headerPart3);
    const notificationImage = new ImageView({
        image: 'src/icons/notification.png',
        width: 15,
        height: 15,
        right: 10
    }).appendTo(headerPart1);
    return theCompositeHeader;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblBhZ2VIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlld3MvbWFpblBhZ2VIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRSxFQUFFO0lBQ25CLE1BQU0sRUFBQyxTQUFTLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdGLE1BQU0scUJBQXFCLEdBQUcsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDN0UsTUFBTSxRQUFRLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLHFCQUFxQixDQUFDLE1BQU07UUFDdkYsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUN2RSxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxRCxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxNQUFNLGtCQUFrQixHQUFHLElBQUksU0FBUyxDQUFDO1FBQ3ZDLFVBQVUsRUFBQyxxQkFBcUIsQ0FBQyxNQUFNO1FBQ3ZDLEdBQUcsRUFB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