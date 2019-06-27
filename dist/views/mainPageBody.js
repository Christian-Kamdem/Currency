"use strict";
module.exports = () => {
    const { Composite, ImageView, TextInput, TextView, Button, Font } = require('tabris');
    const appBasicsInformations = require('../helpers/appBasicsInformations.js');
    const theCompositeBody = new Composite({
        background: appBasicsInformations.color1,
        right: 10,
        left: 10,
        height: 80,
        top: 270,
        background: '#ffffff',
        cornerRadius: 4,
        elevation: 6
    });
    const bitcoinImage = new ImageView({
        image: 'src/icons/bitcoin.png',
        centerY: 0,
        left: 30,
        width: 25,
        height: 25
    }).appendTo(theCompositeBody);
    const bitcoinVal1 = new TextView({
        text: '$3 458',
        font: appBasicsInformations.font14pxBold,
        centerY: -10,
        left: 80
    }).appendTo(theCompositeBody);
    const bitcoinVal2 = new TextView({
        text: '0.43',
        opacity: '0.5',
        centerY: 10,
        left: 80
    }).appendTo(theCompositeBody);
    const bitcoinVal3 = new TextView({
        text: '$8087.6',
        font: appBasicsInformations.font14pxBold,
        centerY: -10,
        right: 25
    }).appendTo(theCompositeBody);
    const bitcoinVal4 = new TextView({
        text: '+ 5.58%',
        textColor: '#8bd19a',
        centerY: 10,
        right: 25
    }).appendTo(theCompositeBody);
    const bitcoinSmallGraph = new ImageView({
        image: 'src/icons/decrease.png',
        centerY: 0,
        centerX: 20,
        width: 100,
        height: 40
    }).appendTo(theCompositeBody);
    return theCompositeBody;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblBhZ2VCb2R5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXdzL21haW5QYWdlQm9keS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFFLEVBQUU7SUFDbkIsTUFBTSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9FLE1BQU0scUJBQXFCLEdBQUcsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDN0UsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLFNBQVMsQ0FBQztRQUNyQyxVQUFVLEVBQUMscUJBQXFCLENBQUMsTUFBTTtRQUN2QyxLQUFLLEVBQUMsRUFBRTtRQUNSLElBQUksRUFBQyxFQUFFO1FBQ1AsTUFBTSxFQUFDLEVBQUU7UUFDVCxHQUFHLEVBQUMsR0FBRztRQUNQLFVBQVUsRUFBQyxTQUFTO1FBQ3BCLFlBQVksRUFBQyxDQUFDO1FBQ2QsU0FBUyxFQUFDLENBQUM7S0FDWixDQUFDLENBQUM7SUFDSCxNQUFNLFlBQVksR0FBRyxJQUFJLFNBQVMsQ0FBQztRQUNqQyxLQUFLLEVBQUMsdUJBQXVCO1FBQzdCLE9BQU8sRUFBQyxDQUFDO1FBQ1QsSUFBSSxFQUFDLEVBQUU7UUFDUCxLQUFLLEVBQUMsRUFBRTtRQUNSLE1BQU0sRUFBQyxFQUFFO0tBQ1YsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDO1FBQy9CLElBQUksRUFBQyxRQUFRO1FBQ2IsSUFBSSxFQUFDLHFCQUFxQixDQUFDLFlBQVk7UUFDdkMsT0FBTyxFQUFDLENBQUMsRUFBRTtRQUNYLElBQUksRUFBQyxFQUFFO0tBQ1IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDO1FBQy9CLElBQUksRUFBQyxNQUFNO1FBQ1gsT0FBTyxFQUFDLEtBQUs7UUFDYixPQUFPLEVBQUMsRUFBRTtRQUNWLElBQUksRUFBQyxFQUFFO0tBQ1IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDO1FBQy9CLElBQUksRUFBQyxTQUFTO1FBQ2QsSUFBSSxFQUFDLHFCQUFxQixDQUFDLFlBQVk7UUFDdkMsT0FBTyxFQUFDLENBQUMsRUFBRTtRQUNYLEtBQUssRUFBQyxFQUFFO0tBQ1QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDO1FBQy9CLElBQUksRUFBQyxTQUFTO1FBQ2QsU0FBUyxFQUFDLFNBQVM7UUFDbkIsT0FBTyxFQUFDLEVBQUU7UUFDVixLQUFLLEVBQUMsRUFBRTtLQUNULENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixNQUFNLGlCQUFpQixHQUFHLElBQUksU0FBUyxDQUFDO1FBQ3RDLEtBQUssRUFBQyx3QkFBd0I7UUFDOUIsT0FBTyxFQUFDLENBQUM7UUFDVCxPQUFPLEVBQUMsRUFBRTtRQUNWLEtBQUssRUFBQyxHQUFHO1FBQ1QsTUFBTSxFQUFDLEVBQUU7S0FDVixDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUIsT0FBTyxnQkFBZ0IsQ0FBQztBQUMxQixDQUFDLENBQUMifQ==