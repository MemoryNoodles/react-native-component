(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(414),c=t(146);n.a=function(e){return e.isCodeCollpase?"":o.a.createElement(i.a,{id:e.id?e.id:"code",language:"javascript",style:c.a},e.codeString)}},399:function(e,n,t){"use strict";t.r(n);var a=t(27),o=t(28),i=t(30),c=t(29),r=t(31),l=t(0),s=t.n(l),d=t(145),u=function(e){function n(){return Object(a.a)(this,n),Object(i.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(r.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"\u83b7\u53d6\u5b9a\u4f4d"),s.a.createElement("p",null,"this.getLocation: \u83b7\u53d6\u5b9a\u4f4d\u7684api "),s.a.createElement(d.a,{codeString:'\n\nexport default class ExtendApiPage extends React.Component{\n    locationInfo(){\n        //\u8fd4\u56de\u7684\u662f\u4e00\u4e2apromise\u5bf9\u8c61\n        let locationInfo = this.getLocation("\u9ad8\u5fb7\u7684key");\n        locationInfo.then(data=>{\n           // data.city     : \u57ce\u5e02\n           // data.province : \u7701\u4efd\n           // data.address  : \u8be6\u7ec6\u5730\u5740\n        })\n    }\n    render(){\n        let demoValue = this.state.demoValue;\n        return <View style={{flex:1}}>\n                    <Button title="\u5b9a\u4f4d" onPress={()=>this.getLocation("\u9ad8\u5fb7\u7684key")} />\n                    \n                </View>\n    }\n}\n'}))}}]),n}(s.a.Component);n.default=u}}]);