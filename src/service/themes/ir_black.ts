import * as ace from "ace-builds";

const cssText = `
.ace-ir-black .ace_gutter {
  background: #000000;
  color: rgb(119, 119, 119);
}

.ace-ir-black .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-ir-black {
  background-color: #000000;
  color: #EDEDED;
}

.ace-ir-black .ace_cursor {
  color: #FFFFFF;
}

.ace-ir-black .ace_marker-layer .ace_selection {
  background: #333333;
}

.ace-ir-black.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-ir-black .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-ir-black .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(202, 226, 251, 0.24);
}

.ace-ir-black .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.14);
}

.ace-ir-black .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.14);
}

.ace-ir-black .ace_marker-layer .ace_selected-word {
  border: 1px solid #333333;
}

.ace-ir-black .ace_fold {
    background-color: #96CBFE;
    border-color: #EDEDED;
}
.ace-ir-black .ace_keyword{color:#96CBFE;}
.ace-ir-black .ace_keyword.ace_operator{color:#EDEDED;}
.ace-ir-black .ace_constant{color:#99CC99;}
.ace-ir-black .ace_constant.ace_numeric{font-weight:bold;
color:#FF73FD;}
.ace-ir-black .ace_support{color:#FFFFB6;}
.ace-ir-black .ace_support.ace_function{color:#DAD085;}
.ace-ir-black .ace_support.ace_constant{color:#FFD2A7;}
.ace-ir-black .ace_storage{color:#CFCB90;}
.ace-ir-black .ace_invalid.ace_illegal{color:#FD5FF1;
background-color:rgba(86, 45, 86, 0.75);}
.ace-ir-black .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#FD5FF1;}
.ace-ir-black .ace_string{font-weight:bold;
color:#A8FF60;}
.ace-ir-black .ace_string.ace_regexp{color:#E9C062;}
.ace-ir-black .ace_comment{color:#7C7C7C;}
.ace-ir-black .ace_variable{color:#C6C5FE;}
.ace-ir-black .ace_meta.ace_tag{font-weight:bold;
color:#96CBFE;}
.ace-ir-black .ace_entity.ace_other.ace_attribute-name{color:#FFD7B1;}
.ace-ir-black .ace_markup.ace_heading{color:#FEDCC5;
background-color:#632D04;}
.ace-ir-black .ace_markup.ace_list{color:#E1D4B9;}
`;

ace.define("ace/theme/ir_black-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/ir_black", ["require", "exports", "module", "ace/theme/ir_black-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-ir-black";
	exports.cssText = require("./ir_black-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
