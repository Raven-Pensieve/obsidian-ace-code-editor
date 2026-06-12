import * as ace from "ace-builds";

const cssText = `
.ace-argonaut .ace_gutter {
  background: #151515;
  color: rgb(100, 100, 100);
}

.ace-argonaut .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-argonaut {
  background-color: #151515;
  color: #B2B2B2;
}

.ace-argonaut .ace_cursor {
  color: #FF2200;
}

.ace-argonaut .ace_marker-layer .ace_selection {
  background: #002F53;
}

.ace-argonaut.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #151515;
  border-radius: 2px;
}

.ace-argonaut .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-argonaut .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #000000;
}

.ace-argonaut .ace_marker-layer .ace_active-line {
  background: #000C16;
}

.ace-argonaut .ace_gutter-active-line {
  background-color: #000C16;
}

.ace-argonaut .ace_marker-layer .ace_selected-word {
  border: 1px solid #002F53;
}

.ace-argonaut .ace_fold {
    background-color: bold;
    border-color: #B2B2B2;
}
.ace-argonaut .ace_keyword{font-weight:bold;
color:#FFFFFF;}
.ace-argonaut .ace_constant{font-weight:bold;
color:#A4ED2D;}
.ace-argonaut .ace_constant.ace_numeric{color:#D70000;}
.ace-argonaut .ace_support.ace_function{color:#815DB3;}
.ace-argonaut .ace_support.ace_constant{color:#06960E;}
.ace-argonaut .ace_support.ace_class{font-weight:bold;
color:#7A88F6;}
.ace-argonaut .ace_support.ace_type{font-weight:bold;
color:#7A88F6;}
.ace-argonaut .ace_storage{font-weight:bold;
color:#FFFFFF;}
.ace-argonaut .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-argonaut .ace_string{color:#6497C5;}
.ace-argonaut .ace_comment{font-style:italic;
color:#00A6FF;}
.ace-argonaut .ace_variable{font-weight:bold;
color:#FFCA00;}
.ace-argonaut .ace_variable.ace_language{color:#0068C5;}
.ace-argonaut .ace_variable.ace_parameter{font-style:italic;}
.ace-argonaut .ace_entity.ace_name.ace_function{font-weight:bold;
color:#FFCA00;}
.ace-argonaut .ace_entity.ace_name.ace_tag{color:#0065D3;}
`;

ace.define("ace/theme/argonaut-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/argonaut", ["require", "exports", "module", "ace/theme/argonaut-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-argonaut";
	exports.cssText = require("./argonaut-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
