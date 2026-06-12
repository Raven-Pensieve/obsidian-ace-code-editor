import * as ace from "ace-builds";

const cssText = `
.ace-friendship-bracelet .ace_gutter {
  background: #1F1F1F;
  color: rgb(136, 136, 136);
}

.ace-friendship-bracelet .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-friendship-bracelet {
  background-color: #1F1F1F;
  color: #F1F1F1;
}

.ace-friendship-bracelet .ace_cursor {
  color: #FFFFFF;
}

.ace-friendship-bracelet .ace_marker-layer .ace_selection {
  background: rgba(115, 89, 126, 0.88);
}

.ace-friendship-bracelet.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #1F1F1F;
  border-radius: 2px;
}

.ace-friendship-bracelet .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-friendship-bracelet .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-friendship-bracelet .ace_marker-layer .ace_active-line {
  background: #404040;
}

.ace-friendship-bracelet .ace_gutter-active-line {
  background-color: #404040;
}

.ace-friendship-bracelet .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(115, 89, 126, 0.88);
}

.ace-friendship-bracelet .ace_fold {
    background-color: #389AD9;
    border-color: #F1F1F1;
}
.ace-friendship-bracelet .ace_keyword{color:#FF8C56;}
.ace-friendship-bracelet .ace_constant{color:#389AD9;}
.ace-friendship-bracelet .ace_support.ace_function{color:#FF6666;}
.ace-friendship-bracelet .ace_string{color:#F3F99A;}
.ace-friendship-bracelet .ace_string.ace_regexp{color:#ECF5A7;}
.ace-friendship-bracelet .ace_comment{color:#8A8988;}
.ace-friendship-bracelet .ace_variable{color:#389AD9;}
.ace-friendship-bracelet .ace_variable.ace_language{color:#D4312C;}
.ace-friendship-bracelet .ace_variable.ace_parameter{font-style:italic;}
.ace-friendship-bracelet .ace_meta.ace_tag{color:#389AD9;}
.ace-friendship-bracelet .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#389AD9;}
.ace-friendship-bracelet .ace_entity.ace_name.ace_function{color:#389AD9;}
.ace-friendship-bracelet .ace_entity.ace_name.ace_tag{color:#FC8C56;}
`;

ace.define("ace/theme/friendship-bracelet-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/friendship-bracelet", ["require", "exports", "module", "ace/theme/friendship-bracelet-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-friendship-bracelet";
	exports.cssText = require("./friendship-bracelet-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
