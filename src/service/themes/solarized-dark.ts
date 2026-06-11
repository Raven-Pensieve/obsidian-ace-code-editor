import * as ace from "ace-builds";

const cssText = `
.ace-solarized-dark .ace_gutter {
  background: #042029;
  color: rgb(67, 88, 93);
}

.ace-solarized-dark .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-solarized-dark {
  background-color: #042029;
  color: #819090;
}

.ace-solarized-dark .ace_cursor {
  color: #819090;
}

.ace-solarized-dark .ace_marker-layer .ace_selection {
  background: #EAE3CB;
}

.ace-solarized-dark.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #042029;
  border-radius: 2px;
}

.ace-solarized-dark .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-solarized-dark .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(147, 161, 161, 0.50);
}

.ace-solarized-dark .ace_marker-layer .ace_active-line {
  background: #0A2933;
}

.ace-solarized-dark .ace_gutter-active-line {
  background-color: #0A2933;
}

.ace-solarized-dark .ace_marker-layer .ace_selected-word {
  border: 1px solid #EAE3CB;
}

.ace-solarized-dark .ace_fold {
    background-color: #268BD2;
    border-color: #819090;
}
.ace-solarized-dark .ace_keyword{color:#859900;}
.ace-solarized-dark .ace_constant.ace_language{color:#B58900;}
.ace-solarized-dark .ace_constant.ace_numeric{color:#D33682;}
.ace-solarized-dark .ace_constant.ace_character{color:#CB4B16;}
.ace-solarized-dark .ace_constant.ace_other{color:#CB4B16;}
.ace-solarized-dark .ace_support.ace_function{color:#268BD2;}
.ace-solarized-dark .ace_support.ace_class{color:#859900;}
.ace-solarized-dark .ace_support.ace_type{color:#859900;}
.ace-solarized-dark .ace_storage{font-weight:bold;
color:#D11C24;}
.ace-solarized-dark .ace_string{color:#586E75;}
.ace-solarized-dark .ace_string.ace_regexp{color:#D30102;}
.ace-solarized-dark .ace_comment{color:#93A1A1;}
.ace-solarized-dark .ace_variable{color:#268BD2;}
.ace-solarized-dark .ace_variable.ace_language{color:#268BD2;}
.ace-solarized-dark .ace_entity.ace_other.ace_attribute-name{color:#93A1A1;}
.ace-solarized-dark .ace_entity.ace_name.ace_function{color:#268BD2;}
.ace-solarized-dark .ace_entity.ace_name.ace_tag{font-weight:bold;
color:#268BD2;}
`;

(ace as any).define("ace/theme/solarized-dark-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/solarized-dark", ["require", "exports", "module", "ace/theme/solarized-dark-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-solarized-dark";
	exports.cssText = require("./solarized-dark-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
