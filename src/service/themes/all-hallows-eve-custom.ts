import * as ace from "ace-builds";

const cssText = `
.ace-all-hallows-eve-custom .ace_gutter {
  background: #131313;
  color: rgb(137, 137, 137);
}

.ace-all-hallows-eve-custom .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-all-hallows-eve-custom {
  background-color: #131313;
  color: #FFFFFF;
}

.ace-all-hallows-eve-custom .ace_cursor {
  color: #FFFFFF;
}

.ace-all-hallows-eve-custom .ace_marker-layer .ace_selection {
  background: rgba(115, 89, 126, 0.88);
}

.ace-all-hallows-eve-custom.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #131313;
  border-radius: 2px;
}

.ace-all-hallows-eve-custom .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-all-hallows-eve-custom .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-all-hallows-eve-custom .ace_marker-layer .ace_active-line {
  background: #333300;
}

.ace-all-hallows-eve-custom .ace_gutter-active-line {
  background-color: #333300;
}

.ace-all-hallows-eve-custom .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(115, 89, 126, 0.88);
}

.ace-all-hallows-eve-custom .ace_fold {
    background-color: #CC7833;
    border-color: #FFFFFF;
}
.ace-all-hallows-eve-custom .ace_keyword{color:#CC7833;}
.ace-all-hallows-eve-custom .ace_constant{color:#3387CC;}
.ace-all-hallows-eve-custom .ace_support.ace_function{color:#C83730;}
.ace-all-hallows-eve-custom .ace_string{color:#66CC33;}
.ace-all-hallows-eve-custom .ace_string.ace_regexp{color:#CCCC33;}
.ace-all-hallows-eve-custom .ace_comment{color:#9933CC;}
.ace-all-hallows-eve-custom .ace_variable.ace_parameter{font-style:italic;}
.ace-all-hallows-eve-custom .ace_entity.ace_name.ace_tag{text-decoration:underline;}
`;

ace.define("ace/theme/all-hallows-eve-custom-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/all-hallows-eve-custom", ["require", "exports", "module", "ace/theme/all-hallows-eve-custom-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-all-hallows-eve-custom";
	exports.cssText = require("./all-hallows-eve-custom-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
