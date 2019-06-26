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
    cornerRadius:10,
    elevation:6
  });
  return theCompositeBody;
};
