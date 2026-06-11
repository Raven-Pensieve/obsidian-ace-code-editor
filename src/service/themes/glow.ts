import * as ace from "ace-builds";

const cssText = `
.ace-glow .ace_gutter {
  background: #000000;
  color: rgb(102, 102, 102);
}

.ace-glow .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-glow {
  background-color: #000000;
  color: #CCCCCC;
}

.ace-glow .ace_cursor {
  color: #FFFFFF;
}

.ace-glow .ace_marker-layer .ace_selection {
  background: rgba(255, 255, 255, 0.20);
}

.ace-glow.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-glow .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-glow .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #808080;
}

.ace-glow .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.10);
}

.ace-glow .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.10);
}

.ace-glow .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 255, 255, 0.20);
}

.ace-glow .ace_fold {
    background-color: underline;
    border-color: #CCCCCC;
}
.ace-glow .ace_keyword{font-weight:bold;
color:#FFFFFF;}
.ace-glow .ace_constant.ace_language{font-weight:bold;
color:#D0D071;}
.ace-glow .ace_constant.ace_numeric{font-weight:bold;
color:#7FD049;}
.ace-glow .ace_constant.ace_character{font-weight:bold;
color:#7FD049;}
.ace-glow .ace_constant.ace_character.ace_escape{font-weight:bold;
color:#7FD049;
background-color:#29311D;}
.ace-glow .ace_constant.ace_other{color:#7FD049;
background-color:#12140E;}
.ace-glow .ace_support.ace_function{text-decoration:underline;
font-weight:bold;}
.ace-glow .ace_support.ace_constant{color:#D0D071;
background-color:#13130F;}
.ace-glow .ace_support.ace_class{font-weight:bold;
color:#EB78BD;}
.ace-glow .ace_support.ace_type{font-weight:bold;
color:#74ACCF;}
.ace-glow .ace_storage.ace_type{font-weight:bold;
color:#74ACCF;}
.ace-glow .ace_invalid{font-style:italic;
font-weight:bold;
color:#CB4343;
background-color:#321B1B;}
.ace-glow .ace_string{color:#7FD049;
background-color:#12140E;}
.ace-glow .ace_comment{font-style:italic;
color:#808080;}
.ace-glow .ace_variable{text-decoration:underline;
font-weight:bold;}
.ace-glow .ace_variable.ace_language{font-weight:bold;}
.ace-glow .ace_entity.ace_other.ace_attribute-name{color:#74ACCF;
background-color:#0E1314;}
.ace-glow .ace_entity.ace_name.ace_function{text-decoration:underline;
font-weight:bold;}
.ace-glow .ace_entity.ace_name.ace_tag{font-weight:bold;
color:#FFFFFF;}
`;

(ace as any).define("ace/theme/glow-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/glow", ["require", "exports", "module", "ace/theme/glow-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-glow";
	exports.cssText = require("./glow-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
