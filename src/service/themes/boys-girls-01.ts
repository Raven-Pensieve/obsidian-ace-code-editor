import * as ace from "ace-builds";

const cssText = `
.ace-boys-girls-01 .ace_gutter {
  background: rgba(0, 3, 6, 0.95);
  color: rgb(128, 129, 131);
}

.ace-boys-girls-01 .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-boys-girls-01 {
  background-color: rgba(0, 3, 6, 0.95);
  color: #FFFFFF;
}

.ace-boys-girls-01 .ace_cursor {
  color: #E60065;
}

.ace-boys-girls-01 .ace_marker-layer .ace_selection {
  background: rgba(230, 12, 101, 0.35);
}

.ace-boys-girls-01.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 3, 6, 0.95);
  border-radius: 2px;
}

.ace-boys-girls-01 .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-boys-girls-01 .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.10);
}

.ace-boys-girls-01 .ace_marker-layer .ace_active-line {
  background: rgba(77, 215, 252, 0.10);
}

.ace-boys-girls-01 .ace_gutter-active-line {
  background-color: rgba(77, 215, 252, 0.10);
}

.ace-boys-girls-01 .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(230, 12, 101, 0.35);
}

.ace-boys-girls-01 .ace_fold {
    background-color: underline;
    border-color: #FFFFFF;
}
.ace-boys-girls-01 .ace_constant.ace_numeric{color:#E62286;}
.ace-boys-girls-01 .ace_constant.ace_character{color:#00D8FF;}
.ace-boys-girls-01 .ace_constant.ace_other{color:#00D8FF;}
.ace-boys-girls-01 .ace_invalid{color:#FF0C00;}
.ace-boys-girls-01 .ace_string{color:#00D8FF;}
.ace-boys-girls-01 .ace_comment{color:#404040;
background-color:rgba(9, 10, 15, 0.98);}
.ace-boys-girls-01 .ace_variable{text-decoration:underline;
font-weight:bold;}
.ace-boys-girls-01 .ace_variable.ace_language{font-weight:bold;
color:#E62286;}
.ace-boys-girls-01 .ace_variable.ace_parameter{font-weight:bold;
color:#E62286;}
.ace-boys-girls-01 .ace_entity.ace_other.ace_attribute-name{font-weight:bold;
color:#E62286;}
.ace-boys-girls-01 .ace_entity.ace_name.ace_function{text-decoration:underline;
font-weight:bold;}
.ace-boys-girls-01 .ace_entity.ace_name.ace_tag{text-decoration:underline;
font-weight:bold;}
`;

ace.define("ace/theme/boys-girls-01-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/boys-girls-01", ["require", "exports", "module", "ace/theme/boys-girls-01-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-boys-girls-01";
	exports.cssText = require("./boys-girls-01-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
