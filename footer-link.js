"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "footer-link",
			"path": "footer-link/footer-link.jsx",
			"file": "footer-link.jsx",
			"module": "footer-link",
			"author": "Biyaheroes Developers",
			"contributors": [
				"Robot Biyaheroes <robot@biyaheroes.com>",
				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
			],
			"eMail": "developers@biyaheroes.com",
			"repository": "https://github.com/Biyaheroes/bh-mj-detail.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Biyaheroes MJML Footer Link Component.
	@end-module-documentation

	@include:
		{
			"MJMLElement": "mjml-core",
			"React": "react",
			"Component": "react.Component",
			"Column": "mjml-column",
			"Detail": "bh-mj-detail",
			"Section": "mjml-section"
		}
	@end-include
*/Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require("babel-runtime/helpers/extends");var _extends3=_interopRequireDefault(_extends2);var _jsx2=require("babel-runtime/helpers/jsx");var _jsx3=_interopRequireDefault(_jsx2);var _getPrototypeOf=require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _class;

var _mjmlCore=require("mjml-core");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _mjmlColumn=require("mjml-column");var _mjmlColumn2=_interopRequireDefault(_mjmlColumn);
var _bhMjDetail=require("bh-mj-detail");var _bhMjDetail2=_interopRequireDefault(_bhMjDetail);
var _mjmlSection=require("mjml-section");var _mjmlSection2=_interopRequireDefault(_mjmlSection);
var _mjmlText=require("mjml-text");var _mjmlText2=_interopRequireDefault(_mjmlText);
var _mjmlWrapper=require("mjml-wrapper");var _mjmlWrapper2=_interopRequireDefault(_mjmlWrapper);

var _doubt=require("doubt");var _doubt2=_interopRequireDefault(_doubt);
var _filpos=require("filpos");var _filpos2=_interopRequireDefault(_filpos);
var _nbyx=require("nbyx");var _nbyx2=_interopRequireDefault(_nbyx);
var _parseon=require("parseon");var _parseon2=_interopRequireDefault(_parseon);
var _protype=require("protype");var _protype2=_interopRequireDefault(_protype);
var _sxty=require("sxty4");var _sxty2=_interopRequireDefault(_sxty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var tagName="mj-footer-link";

var parentTag=["mj-container"];

var endingTag=false;

var defaultMJMLDefinition={
"content":"",
"attributes":{
"count":3,
"list":[{
"title":"Title",
"link":"Link"}]}};var _ref=(0,_jsx3.default)(_mjmlText2.default,{},




































"prompt",
"Sorry, there's something wrong with the details. Please report this immediately.");var _ref2=(0,_jsx3.default)(_mjmlColumn2.default,{},void 0,(0,_jsx3.default)(_mjmlText2.default,{},void 0,




















"Sorry, there's no details to be shown"));var FooterLink=(0,_mjmlCore.MJMLElement)(_class=function(_Component){(0,_inherits3.default)(FooterLink,_Component);function FooterLink(){(0,_classCallCheck3.default)(this,FooterLink);return(0,_possibleConstructorReturn3.default)(this,(FooterLink.__proto__||(0,_getPrototypeOf2.default)(FooterLink)).apply(this,arguments));}(0,_createClass3.default)(FooterLink,[{key:"render",value:function render(){var mjAttribute=this.props.mjAttribute;var list=mjAttribute("list");var count=3;try{count=parseInt(mjAttribute("count")||"3");}catch(error){count=3;}if((0,_protype2.default)(list,STRING)){try{list=(0,_parseon2.default)((0,_sxty2.default)(list).decode());}catch(error){error=(0,_sxty2.default)(error.stack).encode();var length=error.length;error=error.match(new RegExp(".{1,"+Math.floor(Math.sqrt(length))+"}","g")).join("\n");return _react2.default.createElement(_mjmlSection2.default,this.props,(0,_jsx3.default)(_mjmlColumn2.default,{},void 0,[_ref,(0,_jsx3.default)(_mjmlText2.default,{},"error","Error: "+error),(0,_jsx3.default)(_mjmlText2.default,{},"timestamp","Timestamp: "+new Date())]));}}if(!(0,_doubt2.default)(list,ARRAY)){return _react2.default.createElement(_mjmlSection2.default,this.props,_ref2);



}

list=(0,_nbyx2.default)(list,count).
map(function(row){return(0,_filpos2.default)(row,3,{"title":"","label":"","value":""});});

return _react2.default.createElement(_mjmlWrapper2.default,(0,_extends3.default)({},
this.props,{
padding:"0px 0px 0px 0px",
"full-width":"full-width"}),


list.map(function onEachRow(row,index){
return(0,_jsx3.default)(_mjmlSection2.default,{padding:

"0px 0px 0px 0px"},"row-"+index,


row.map(function onEachDetail(detail,index){
return _react2.default.createElement(_bhMjDetail2.default,(0,_extends3.default)({},
detail,{
key:"detail-"+index,
count:3}));


}));


}));


}}]);return FooterLink;}(_react.Component))||_class;


FooterLink.tagName=tagName;
FooterLink.parentTag=parentTag;
FooterLink.endingTag=endingTag;
FooterLink.defaultMJMLDefinition=defaultMJMLDefinition;exports.default=

FooterLink;

//# sourceMappingURL=footer-link.js.map