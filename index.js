'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




Carousel=function(_Component){_inherits(Carousel,_Component);




function Carousel(props){_classCallCheck(this,Carousel);var _this=_possibleConstructorReturn(this,(Carousel.__proto__||Object.getPrototypeOf(Carousel)).call(this,
props));_this.






renderBubbles=function(width){var _this$props=






_this.props,children=_this$props.children,_this$props$color=_this$props.color,color=_this$props$color===undefined?'#ffa500':_this$props$color,_this$props$dimmedCol=_this$props.dimmedColor,dimmedColor=_this$props$dimmedCol===undefined?'#d3d3d3':_this$props$dimmedCol,_this$props$bubbleWid=_this$props.bubbleWidth,bubbleWidth=_this$props$bubbleWid===undefined?10:_this$props$bubbleWid,_this$props$bubbleHei=_this$props.bubbleHeight,bubbleHeight=_this$props$bubbleHei===undefined?10:_this$props$bubbleHei;

var bubbles=[];

var emptyBubble={
width:bubbleWidth,
height:bubbleHeight,
backgroundColor:dimmedColor,
borderRadius:15,
alignSelf:'center'};


var filledBubble={
width:bubbleWidth,
height:bubbleHeight,
backgroundColor:color,
borderRadius:15,
alignSelf:'center'};


for(var i=0;i<children.length;i++){
bubbles.push(
_react2.default.createElement(_reactNative.View,{style:styles.emptyBubble,key:width*i}));

}

if(_this.state.offset%width===0){
bubbles.map(function(v){
v.key==_this.state.offset?
bubbles[v.key/width]=
_react2.default.createElement(_reactNative.View,{style:filledBubble,key:v.key}):
null;
});
}

return(
_react2.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignSelf:'center'}},
bubbles));


};_this.state={offset:0};return _this;}_createClass(Carousel,[{key:'render',value:function render()

{var _this2=this;var _props=







this.props,_props$backgroundColo=_props.backgroundColor,backgroundColor=_props$backgroundColo===undefined?'#fff':_props$backgroundColo,children=_props.children,_props$height=_props.height,height=_props$height===undefined?350:_props$height,_props$showBubbles=_props.showBubbles,showBubbles=_props$showBubbles===undefined?true:_props$showBubbles,_props$showScroll=_props.showScroll,showScroll=_props$showScroll===undefined?false:_props$showScroll,_props$width=_props.width,width=_props$width===undefined?350:_props$width;

var pages=[];

for(var i=0;i<children.length;i++){
pages.push(
_react2.default.createElement(_reactNative.View,{style:{width:width},key:i},
children[i]));


}

return(
_react2.default.createElement(_reactNative.View,{style:{width:width,backgroundColor:backgroundColor}},
_react2.default.createElement(_reactNative.ScrollView,{
horizontal:true,
pagingEnabled:true,
showsHorizontalScrollIndicator:showScroll,
onScroll:function onScroll(e){
_this2.setState({offset:e.nativeEvent.contentOffset.x});
},
style:{width:width,height:height}},
pages),

showBubbles?this.renderBubbles(width):null));


}}]);return Carousel;}(_react.Component);exports.default=Carousel;
