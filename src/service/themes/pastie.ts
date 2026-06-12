import * as ace from "ace-builds";

const cssText = `
.ace-pastie .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-pastie .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-pastie {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-pastie .ace_cursor {
  color: #000000;
}

.ace-pastie .ace_marker-layer .ace_selection {
  background: #80C7FF;
}

.ace-pastie.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-pastie .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-pastie .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-pastie .ace_marker-layer .ace_active-line {
  background: #C1E2F8;
}

.ace-pastie .ace_gutter-active-line {
  background-color: #C1E2F8;
}

.ace-pastie .ace_marker-layer .ace_selected-word {
  border: 1px solid #80C7FF;
}

.ace-pastie .ace_fold {
    background-color: #1076C3;
    border-color: #000000;
}
.ace-pastie .ace_keyword{font-weight:bold;
color:#138B05;}
.ace-pastie .ace_constant{font-weight:bold;
color:#DC6036;}
.ace-pastie .ace_constant.ace_language{font-weight:bold;
color:#0B51A6;}
.ace-pastie .ace_constant.ace_numeric{font-weight:bold;
color:#0000DC;}
.ace-pastie .ace_constant.ace_character.ace_escape{color:#D71707;
background-color:#FFF0F0;}
.ace-pastie .ace_support{font-weight:bold;
color:#073191;}
.ace-pastie .ace_support.ace_function{font-weight:bold;
color:#D71707;}
.ace-pastie .ace_support.ace_type{color:#0B51A6;}
.ace-pastie .ace_storage{font-weight:bold;
color:#138B05;}
.ace-pastie .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-pastie .ace_string{color:#D71707;
background-color:#FFF0F0;}
.ace-pastie .ace_comment{font-style:italic;
color:#888888;}
.ace-pastie .ace_variable{font-weight:bold;
color:#0E65BB;}
.ace-pastie .ace_meta.ace_tag{color:#000000;}
.ace-pastie .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#000084;}
.ace-pastie .ace_entity.ace_name.ace_function{color:#1076C3;}
.ace-pastie .ace_entity.ace_name{color:#B80066;}
.ace-pastie .ace_entity.ace_name.ace_tag{color:#107941;}
`;

ace.define("ace/theme/pastie-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/pastie", ["require", "exports", "module", "ace/theme/pastie-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-pastie";
	exports.cssText = require("./pastie-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
