import * as ace from "ace-builds";

const cssText = `
.ace-tubster .ace_gutter {
  background: #232323;
  color: rgb(133, 130, 128);
}

.ace-tubster .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-tubster {
  background-color: #232323;
  color: #E6E1DC;
}

.ace-tubster .ace_cursor {
  color: #FFFFFF;
}

.ace-tubster .ace_marker-layer .ace_selection {
  background: rgba(90, 100, 126, 0.88);
}

.ace-tubster.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #232323;
  border-radius: 2px;
}

.ace-tubster .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-tubster .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-tubster .ace_marker-layer .ace_active-line {
  background: #333435;
}

.ace-tubster .ace_gutter-active-line {
  background-color: #333435;
}

.ace-tubster .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(90, 100, 126, 0.88);
}

.ace-tubster .ace_fold {
    background-color: #FFCC33;
    border-color: #E6E1DC;
}
.ace-tubster .ace_keyword{color:#CC6633;}
.ace-tubster .ace_constant{color:#34A2D9;}
.ace-tubster .ace_constant.ace_language{color:#3399CC;}
.ace-tubster .ace_constant.ace_numeric{color:#99CC66;}
.ace-tubster .ace_constant.ace_character.ace_escape{color:#519F50;}
.ace-tubster .ace_support.ace_function{color:#DA4939;}
.ace-tubster .ace_support.ace_constant{color:#99CC33;}
.ace-tubster .ace_support.ace_type{color:#6E9CBE;}
.ace-tubster .ace_storage{color:#CC6633;}
.ace-tubster .ace_invalid{color:#FFFFFF;
background-color:#CC0000;}
.ace-tubster .ace_string{color:#99CC33;}
.ace-tubster .ace_comment{font-style:italic;
color:#666666;}
.ace-tubster .ace_variable{color:#FFCC33;}
.ace-tubster .ace_variable.ace_language{color:#3399CC;}
.ace-tubster .ace_meta.ace_tag{color:#FFCC33;}
.ace-tubster .ace_entity.ace_other.ace_attribute-name{color:#FFCC33;}
.ace-tubster .ace_entity.ace_name.ace_function{color:#FFCC33;}
.ace-tubster .ace_entity.ace_name{color:#FFFFFF;}
.ace-tubster .ace_entity.ace_name.ace_tag{color:#FFCC33;}
`;

ace.define("ace/theme/tubster-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/tubster", ["require", "exports", "module", "ace/theme/tubster-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-tubster";
	exports.cssText = require("./tubster-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
