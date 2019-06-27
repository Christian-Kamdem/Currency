module.exports = ()=>{
  const {Composite,ImageView,TextInput,TextView,Button,Font} = require('tabris');
  const appBasicsInformations = require('../helpers/appBasicsInformations.js');
  const theCompositeBody = new Composite({
    background:appBasicsInformations.color1,
    right:10,
    left:10,
    height:80,
    top:270,
    background:'#ffffff',
    cornerRadius:4,
    elevation:6
  });
  const bitcoinImage = new ImageView({
    image:'src/icons/bitcoin.png',
    centerY:0,
    left:30,
    width:25,
    height:25
  }).appendTo(theCompositeBody);
  const bitcoinVal1 = new TextView({
    text:'$3 458',
    font:appBasicsInformations.font14pxBold,
    centerY:-10,
    left:80
  }).appendTo(theCompositeBody);
  const bitcoinVal2 = new TextView({
    text:'0.43',
    opacity:'0.5',
    centerY:10,
    left:80
  }).appendTo(theCompositeBody);
  const bitcoinVal3 = new TextView({
    text:'$8087.6',
    font:appBasicsInformations.font14pxBold,
    centerY:-10,
    right:25
  }).appendTo(theCompositeBody);
  const bitcoinVal4 = new TextView({
    text:'+ 5.58%',
    textColor:'#8bd19a',
    centerY:10,
    right:25
  }).appendTo(theCompositeBody);
  const bitcoinSmallGraph = new ImageView({
    image:'src/icons/decrease.png',
    centerY:0,
    centerX:20,
    width:100,
    height:40
  }).appendTo(theCompositeBody);
  return theCompositeBody;
};
