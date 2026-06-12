import * as ace from "ace-builds";

const cssText = `
.ace-daniel-fischer .ace_gutter {
  background: rgba(0, 0, 0, 0.95);
  color: rgb(128, 128, 128);
}

.ace-daniel-fischer .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-daniel-fischer {
  background-color: rgba(0, 0, 0, 0.95);
  color: #FFFFFF;
}

.ace-daniel-fischer .ace_cursor {
  color: #FFFFFF;
}

.ace-daniel-fischer .ace_marker-layer .ace_selection {
  background: rgba(89, 16, 15, 0.88);
}

.ace-daniel-fischer.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.95);
  border-radius: 2px;
}

.ace-daniel-fischer .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-daniel-fischer .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-daniel-fischer .ace_marker-layer .ace_active-line {
  background: #424046;
}

.ace-daniel-fischer .ace_gutter-active-line {
  background-color: #424046;
}

.ace-daniel-fischer .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(89, 16, 15, 0.88);
}

.ace-daniel-fischer .ace_fold {
    background-color: #FFFF00;
    border-color: #FFFFFF;
}
.ace-daniel-fischer .ace_keyword{color:#FF0049;}
.ace-daniel-fischer .ace_constant{color:#339999;}
.ace-daniel-fischer .ace_support.ace_class{color:#FF8000;}
.ace-daniel-fischer .ace_support.ace_type{color:#FF8000;}
.ace-daniel-fischer .ace_string{color:#66FF00;}
.ace-daniel-fischer .ace_string.ace_regexp{color:#44B4CC;}
.ace-daniel-fischer .ace_comment{color:#9933CC;}
.ace-daniel-fischer .ace_variable{color:#FFFF00;}
.ace-daniel-fischer .ace_variable.ace_parameter{font-style:italic;}
.ace-daniel-fischer .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#99CC99;}
.ace-daniel-fischer .ace_entity.ace_name.ace_function{color:#FFFF00;}
.ace-daniel-fischer .ace_entity.ace_name.ace_tag{color:#EEFF36;}
`;

ace.define("ace/theme/daniel-fischer-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/daniel-fischer", ["require", "exports", "module", "ace/theme/daniel-fischer-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-daniel-fischer";
	exports.cssText = require("./daniel-fischer-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
