import * as ace from "ace-builds";

const cssText = `
.ace-notepad2 .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-notepad2 .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-notepad2 {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-notepad2 .ace_cursor {
  color: #000000;
}

.ace-notepad2 .ace_marker-layer .ace_selection {
  background: #98CCFF;
}

.ace-notepad2.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-notepad2 .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-notepad2 .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-notepad2 .ace_marker-layer .ace_active-line {
  background: rgba(255, 184, 81, 0.35);
}

.ace-notepad2 .ace_gutter-active-line {
  background-color: rgba(255, 184, 81, 0.35);
}

.ace-notepad2 .ace_marker-layer .ace_selected-word {
  border: 1px solid #98CCFF;
}

.ace-notepad2 .ace_fold {
    background-color: #000000;
    border-color: #000000;
}
.ace-notepad2 .ace_keyword{color:#800080;}
.ace-notepad2 .ace_constant.ace_language{font-weight:bold;}
.ace-notepad2 .ace_constant.ace_numeric{color:#FF0000;}
.ace-notepad2 .ace_support.ace_function{color:#800080;}
.ace-notepad2 .ace_storage{color:#800080;}
.ace-notepad2 .ace_invalid{font-weight:bold;}
.ace-notepad2 .ace_string{color:#008000;}
.ace-notepad2 .ace_comment{color:#FF8000;
background-color:#FFFFFF;}
.ace-notepad2 .ace_variable{color:#000000;}
.ace-notepad2 .ace_variable.ace_language{font-style:italic;
color:#000080;}
.ace-notepad2 .ace_entity.ace_other.ace_attribute-name{color:#CE0000;}
.ace-notepad2 .ace_entity.ace_name.ace_function{color:#000000;}
.ace-notepad2 .ace_entity.ace_name.ace_tag{color:#0000AF;}
`;

ace.define("ace/theme/notepad2-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/notepad2", ["require", "exports", "module", "ace/theme/notepad2-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-notepad2";
	exports.cssText = require("./notepad2-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
