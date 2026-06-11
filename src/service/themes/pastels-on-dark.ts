import * as ace from "ace-builds";

const cssText = `
.ace-pastels-on-dark .ace_gutter {
  background: #211E1E;
  color: rgb(126, 124, 124);
}

.ace-pastels-on-dark .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-pastels-on-dark {
  background-color: #211E1E;
  color: #DADADA;
}

.ace-pastels-on-dark .ace_cursor {
  color: #FFFFFF;
}

.ace-pastels-on-dark .ace_marker-layer .ace_selection {
  background: rgba(115, 89, 126, 0.50);
}

.ace-pastels-on-dark.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #211E1E;
  border-radius: 2px;
}

.ace-pastels-on-dark .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-pastels-on-dark .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #4F4D4D;
}

.ace-pastels-on-dark .ace_marker-layer .ace_active-line {
  background: #353030;
}

.ace-pastels-on-dark .ace_gutter-active-line {
  background-color: #353030;
}

.ace-pastels-on-dark .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(115, 89, 126, 0.50);
}

.ace-pastels-on-dark .ace_fold {
    background-color: #A1A1FF;
    border-color: #DADADA;
}
.ace-pastels-on-dark .ace_keyword{color:#A1A1FF;}
.ace-pastels-on-dark .ace_keyword.ace_operator{color:#47B8D6;}
.ace-pastels-on-dark .ace_constant{color:#6782D3;}
.ace-pastels-on-dark .ace_constant.ace_language{font-weight:bold;
color:#DE8E30;}
.ace-pastels-on-dark .ace_constant.ace_numeric{color:#CCCCCC;}
.ace-pastels-on-dark .ace_constant.ace_character{color:#AFA472;}
.ace-pastels-on-dark .ace_support.ace_function{color:#A1A1FF;}
.ace-pastels-on-dark .ace_invalid{font-weight:bold;
color:#FFF9F9;
background-color:#FF0000;}
.ace-pastels-on-dark .ace_string{color:#AD9361;}
.ace-pastels-on-dark .ace_string.ace_regexp{color:#666666;}
.ace-pastels-on-dark .ace_comment{color:#555555;}
.ace-pastels-on-dark .ace_variable{color:#C1C144;}
`;

(ace as any).define("ace/theme/pastels-on-dark-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/pastels-on-dark", ["require", "exports", "module", "ace/theme/pastels-on-dark-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-pastels-on-dark";
	exports.cssText = require("./pastels-on-dark-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
