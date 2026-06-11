import * as ace from "ace-builds";

const cssText = `
.ace-erebus .ace_gutter {
  background: #140A0A;
  color: rgb(134, 129, 126);
}

.ace-erebus .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-erebus {
  background-color: #140A0A;
  color: #F8F8F2;
}

.ace-erebus .ace_cursor {
  color: #F8F8F0;
}

.ace-erebus .ace_marker-layer .ace_selection {
  background: #A63A3A;
}

.ace-erebus.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #140A0A;
  border-radius: 2px;
}

.ace-erebus .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-erebus .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #3B3A32;
}

.ace-erebus .ace_marker-layer .ace_active-line {
  background: rgba(61, 46, 46, 0.47);
}

.ace-erebus .ace_gutter-active-line {
  background-color: rgba(61, 46, 46, 0.47);
}

.ace-erebus .ace_marker-layer .ace_selected-word {
  border: 1px solid #A63A3A;
}

.ace-erebus .ace_fold {
    background-color: #F2AAEC;
    border-color: #F8F8F2;
}
.ace-erebus .ace_keyword{color:#D95757;}
.ace-erebus .ace_constant.ace_language{color:#E57EDD;}
.ace-erebus .ace_constant.ace_numeric{color:#E57EDD;}
.ace-erebus .ace_constant.ace_character{color:#E57EDD;}
.ace-erebus .ace_constant.ace_other{color:#E57EDD;}
.ace-erebus .ace_support.ace_function{color:#FFB266;}
.ace-erebus .ace_support.ace_constant{color:#FFB266;}
.ace-erebus .ace_support.ace_class{font-style:italic;
color:#FFB266;}
.ace-erebus .ace_support.ace_type{font-style:italic;
color:#FFB266;}
.ace-erebus .ace_storage{color:#D95757;}
.ace-erebus .ace_storage.ace_type{font-style:italic;
color:#FFB266;}
.ace-erebus .ace_invalid{color:#F8F8F0;
background-color:#D95757;}
.ace-erebus .ace_invalid.ace_deprecated{color:#F8F8F0;
background-color:#E57EDD;}
.ace-erebus .ace_string{color:#FFB2B2;}
.ace-erebus .ace_comment{color:#8C6969;}
.ace-erebus .ace_variable{color:#D0A3F8;}
.ace-erebus .ace_variable.ace_parameter{font-style:italic;
color:#FFD2A6;}
.ace-erebus .ace_entity.ace_other.ace_attribute-name{color:#FFB266;}
.ace-erebus .ace_entity.ace_name.ace_function{color:#F2AAEC;}
.ace-erebus .ace_entity.ace_name.ace_tag{color:#D95757;}
`;

(ace as any).define("ace/theme/erebus-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/erebus", ["require", "exports", "module", "ace/theme/erebus-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-erebus";
	exports.cssText = require("./erebus-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
