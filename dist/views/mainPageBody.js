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
        cornerRadius: 10,
        elevation: 6
    });
    return theCompositeBody;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblBhZ2VCb2R5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXdzL21haW5QYWdlQm9keS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFFLEVBQUU7SUFDbkIsTUFBTSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9FLE1BQU0scUJBQXFCLEdBQUcsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDN0UsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLFNBQVMsQ0FBQztRQUNyQyxVQUFVLEVBQUMscUJBQXFCLENBQUMsTUFBTTtRQUN2QyxLQUFLLEVBQUMsRUFBRTtRQUNSLElBQUksRUFBQyxFQUFFO1FBQ1AsTUFBTSxFQUFDLEVBQUU7UUFDVCxHQUFHLEVBQUMsR0FBRztRQUNQLFVBQVUsRUFBQyxTQUFTO1FBQ3BCLFlBQVksRUFBQyxFQUFFO1FBQ2YsU0FBUyxFQUFDLENBQUM7S0FDWixDQUFDLENBQUM7SUFDSCxPQUFPLGdCQUFnQixDQUFDO0FBQzFCLENBQUMsQ0FBQyJ9