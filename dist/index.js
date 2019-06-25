const {contentView,Composite,TextInput,TextView,Button,Font} = require('tabris');
const theCompositePage = new Composite({
  top:0,
  right:0,
  left:0,
  bottom:0,
  width:'auto'
});
const theCompositeHeader = new Composite({
  background:'#4c56c0',
  top:0,
  right:0,
  left:0,
  bottom:'50%',
  width:'auto'
}).appendTo(theCompositePage);
const theCompositeHeaderH1 = new Composite({
  background:'white',
}).appendTo(theCompositeHeader);
contentView.append(theCompositePage);
