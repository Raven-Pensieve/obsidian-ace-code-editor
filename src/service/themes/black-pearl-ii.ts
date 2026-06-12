import * as ace from "ace-builds";

const cssText = `
.ace-black-pearl-ii .ace_gutter {
  background: #000000;
  color: rgb(128, 128, 128);
}

.ace-black-pearl-ii .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-black-pearl-ii {
  background-color: #000000;
  color: #FFFFFF;
}

.ace-black-pearl-ii .ace_cursor {
  color: #FFFFFF;
}

.ace-black-pearl-ii .ace_marker-layer .ace_selection {
  background: rgba(255, 255, 255, 0.15);
}

.ace-black-pearl-ii.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-black-pearl-ii .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-black-pearl-ii .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-black-pearl-ii .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.051);
}

.ace-black-pearl-ii .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.051);
}

.ace-black-pearl-ii .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.ace-black-pearl-ii .ace_fold {
    background-color: bold;
    border-color: #FFFFFF;
}
.ace-black-pearl-ii .ace_keyword{font-weight:bold;
color:#F8BB00;}
.ace-black-pearl-ii .ace_keyword.ace_operator{font-weight:bold;
color:#FFFFFF;}
.ace-black-pearl-ii .ace_constant{color:#D0FF7E;}
.ace-black-pearl-ii .ace_constant.ace_language{font-weight:bold;
color:#80D500;}
.ace-black-pearl-ii .ace_constant.ace_numeric{color:#EDDD5A;}
.ace-black-pearl-ii .ace_constant.ace_other{color:#66CCFF;}
.ace-black-pearl-ii .ace_support.ace_function{color:#8AA6C1;}
.ace-black-pearl-ii .ace_support.ace_constant{color:#8AA6C1;}
.ace-black-pearl-ii .ace_support.ace_class{font-weight:bold;
color:#8AA6C1;}
.ace-black-pearl-ii .ace_support.ace_type{font-weight:bold;
color:#8AA6C1;}
.ace-black-pearl-ii .ace_support.ace_other{color:#8AA6C1;}
.ace-black-pearl-ii .ace_storage{color:#80D500;}
.ace-black-pearl-ii .ace_invalid{font-weight:bold;
background-color:#670000;}
.ace-black-pearl-ii .ace_string{color:#CC66FF;}
.ace-black-pearl-ii .ace_string.ace_regexp{color:#CA4344;}
.ace-black-pearl-ii .ace_comment{font-style:italic;
color:#428BDD;}
.ace-black-pearl-ii .ace_variable{font-weight:bold;
color:#FFFFFF;}
.ace-black-pearl-ii .ace_variable.ace_parameter{font-style:italic;
color:#8AA6C1;}
.ace-black-pearl-ii .ace_entity.ace_other.ace_attribute-name{color:#FFFFFF;}
.ace-black-pearl-ii .ace_entity.ace_name.ace_function{font-weight:bold;
color:#FFFFFF;}
.ace-black-pearl-ii .ace_entity.ace_name.ace_tag{font-weight:bold;
color:#FFFFFF;}
`;

ace.define("ace/theme/black-pearl-ii-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/black-pearl-ii", ["require", "exports", "module", "ace/theme/black-pearl-ii-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-black-pearl-ii";
	exports.cssText = require("./black-pearl-ii-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
