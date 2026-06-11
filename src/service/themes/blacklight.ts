import * as ace from "ace-builds";

const cssText = `
.ace-blacklight .ace_gutter {
  background: #000000;
  color: rgb(97, 97, 97);
}

.ace-blacklight .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-blacklight {
  background-color: #000000;
  color: #C1C1C1;
}

.ace-blacklight .ace_cursor {
  color: #FFFFFF;
}

.ace-blacklight .ace_marker-layer .ace_selection {
  background: #BC1800;
}

.ace-blacklight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-blacklight .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-blacklight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #323232;
}

.ace-blacklight .ace_marker-layer .ace_active-line {
  background: #080808;
}

.ace-blacklight .ace_gutter-active-line {
  background-color: #080808;
}

.ace-blacklight .ace_marker-layer .ace_selected-word {
  border: 1px solid #BC1800;
}

.ace-blacklight .ace_fold {
    background-color: #6b72e6;
    border-color: #C1C1C1;
}
.ace-blacklight .ace_keyword.ace_operator{color:#00FFFF;}
.ace-blacklight .ace_constant.ace_language{color:#00FFFF;}
.ace-blacklight .ace_constant.ace_numeric{color:#66FFCC;
background-color:rgba(102, 255, 204, 0.30);}
.ace-blacklight .ace_support.ace_function{color:#7F7F7F;}
.ace-blacklight .ace_support.ace_class{color:#FF0088;
background-color:rgba(0, 0, 0, 0.98);}
.ace-blacklight .ace_support.ace_type{color:#8C9281;}
.ace-blacklight .ace_storage.ace_type{color:#8C9281;}
.ace-blacklight .ace_comment{font-style:italic;
color:#47666D;}
.ace-blacklight .ace_entity.ace_other.ace_attribute-name{color:#CCCCCC;}
`;

(ace as any).define("ace/theme/blacklight-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/blacklight", ["require", "exports", "module", "ace/theme/blacklight-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-blacklight";
	exports.cssText = require("./blacklight-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
