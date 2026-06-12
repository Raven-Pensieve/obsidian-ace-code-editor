import * as ace from "ace-builds";

const cssText = `
.ace-venom .ace_gutter {
  background: #0D0D0D;
  color: rgb(102, 102, 102);
}

.ace-venom .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-venom {
  background-color: #0D0D0D;
  color: #BFBFBF;
}

.ace-venom .ace_cursor {
  color: #2E8C3C;
}

.ace-venom .ace_marker-layer .ace_selection {
  background: #000000;
}

.ace-venom.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0D0D0D;
  border-radius: 2px;
}

.ace-venom .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-venom .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #000000;
}

.ace-venom .ace_marker-layer .ace_active-line {
  background: #191919;
}

.ace-venom .ace_gutter-active-line {
  background-color: #191919;
}

.ace-venom .ace_marker-layer .ace_selected-word {
  border: 1px solid #000000;
}

.ace-venom .ace_fold {
    background-color: bold;
    border-color: #BFBFBF;
}
.ace-venom .ace_keyword{font-weight:bold;
color:#6986BF;}
.ace-venom .ace_constant.ace_language{color:#6D3879;}
.ace-venom .ace_constant.ace_numeric{font-weight:bold;
color:#2E8C3C;}
.ace-venom .ace_constant.ace_character{color:#624EA8;}
.ace-venom .ace_constant.ace_other{color:#624EA8;}
.ace-venom .ace_support.ace_function{color:#404251;}
.ace-venom .ace_support.ace_class{color:#3D5473;}
.ace-venom .ace_support.ace_type{color:#3D5473;}
.ace-venom .ace_string{font-style:italic;
color:#2E8C3C;}
.ace-venom .ace_comment{font-style:italic;
color:#3D5473;}
.ace-venom .ace_variable{font-weight:bold;
color:#6248A8;}
.ace-venom .ace_variable.ace_language{color:#3D54B0;}
.ace-venom .ace_variable.ace_parameter{color:#A7575C;}
.ace-venom .ace_entity.ace_name.ace_function{font-weight:bold;
color:#6248A8;}
`;

ace.define("ace/theme/venom-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/venom", ["require", "exports", "module", "ace/theme/venom-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-venom";
	exports.cssText = require("./venom-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
