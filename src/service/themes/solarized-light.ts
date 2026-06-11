import * as ace from "ace-builds";

const cssText = `
.ace-solarized-light .ace_gutter {
  background: #FDF6E3;
  color: rgb(171, 178, 172);
}

.ace-solarized-light .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-solarized-light {
  background-color: #FDF6E3;
  color: #586E75;
}

.ace-solarized-light .ace_cursor {
  color: #000000;
}

.ace-solarized-light .ace_marker-layer .ace_selection {
  background: #073642;
}

.ace-solarized-light.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FDF6E3;
  border-radius: 2px;
}

.ace-solarized-light .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-solarized-light .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(147, 161, 161, 0.50);
}

.ace-solarized-light .ace_marker-layer .ace_active-line {
  background: #EEE8D5;
}

.ace-solarized-light .ace_gutter-active-line {
  background-color: #EEE8D5;
}

.ace-solarized-light .ace_marker-layer .ace_selected-word {
  border: 1px solid #073642;
}

.ace-solarized-light .ace_fold {
    background-color: #268BD2;
    border-color: #586E75;
}
.ace-solarized-light .ace_keyword{color:#859900;}
.ace-solarized-light .ace_constant.ace_language{color:#B58900;}
.ace-solarized-light .ace_constant.ace_numeric{color:#D33682;}
.ace-solarized-light .ace_constant.ace_character{color:#CB4B16;}
.ace-solarized-light .ace_constant.ace_other{color:#CB4B16;}
.ace-solarized-light .ace_support.ace_function{color:#268BD2;}
.ace-solarized-light .ace_support.ace_class{color:#859900;}
.ace-solarized-light .ace_support.ace_type{color:#859900;}
.ace-solarized-light .ace_storage{font-weight:bold;
color:#073642;}
.ace-solarized-light .ace_string{color:#586E75;}
.ace-solarized-light .ace_string.ace_regexp{color:#D30102;}
.ace-solarized-light .ace_comment{color:#93A1A1;}
.ace-solarized-light .ace_variable{color:#268BD2;}
.ace-solarized-light .ace_variable.ace_language{color:#268BD2;}
.ace-solarized-light .ace_entity.ace_other.ace_attribute-name{color:#93A1A1;}
.ace-solarized-light .ace_entity.ace_name.ace_function{color:#268BD2;}
.ace-solarized-light .ace_entity.ace_name.ace_tag{font-weight:bold;
color:#268BD2;}
`;

(ace as any).define("ace/theme/solarized-light-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/solarized-light", ["require", "exports", "module", "ace/theme/solarized-light-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-solarized-light";
	exports.cssText = require("./solarized-light-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
