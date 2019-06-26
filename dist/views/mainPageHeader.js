"use strict";
module.exports = () => {
    const { Composite, Tab, TabFolder, ImageView, TextInput, TextView, Button, Font } = require('tabris');
    const appBasicsInformations = require('../helpers/appBasicsInformations.js');
    const menuTabs = new TabFolder({ paging: true, tabBarBackground: appBasicsInformations.color1,
        right: 0, left: 0, selectedTabTintColor: 'white', tabTintColor: '#8b8b8b', font: '16px roboto medium' });
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
        opacity: '0.4',
        font: appBasicsInformations.font16px,
        textColor: appBasicsInformations.color2,
    }).appendTo(headerPart1);
    const totalBalanceValue = new TextView({
        text: "$23 254",
        font: appBasicsInformations.font32px,
        textColor: appBasicsInformations.color2
    }).appendTo(headerPart2);
    const totalBalanceTodayValue = new TextView({
        text: "+ $ 223 73 today",
        font: appBasicsInformations.font16pxThin,
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
        image: '.src/icones/notification.png',
        width: 50,
        height: 50
    }).appendTo(headerPart1);
    return theCompositeHeader;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblBhZ2VIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlld3MvbWFpblBhZ2VIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRSxFQUFFO0lBQ25CLE1BQU0sRUFBQyxTQUFTLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdGLE1BQU0scUJBQXFCLEdBQUcsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDN0UsTUFBTSxRQUFRLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLHFCQUFxQixDQUFDLE1BQU07UUFDdkYsS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLFNBQVMsQ0FBQztRQUN2QyxVQUFVLEVBQUMscUJBQXFCLENB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