import * as ace from "ace-builds";

const cssText = `
.ace-catppuccin-latte .ace_gutter {
  background: #eff1f5;
  color: rgb(158, 160, 175);
}

.ace-catppuccin-latte .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-catppuccin-latte {
  background-color: #eff1f5;
  color: #4c4f69;
}

.ace-catppuccin-latte .ace_cursor {
  color: #dc8a78;
}

.ace-catppuccin-latte .ace_marker-layer .ace_selection {
  background: rgba(124, 127, 147, 0.30);
}

.ace-catppuccin-latte.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #eff1f5;
  border-radius: 2px;
}

.ace-catppuccin-latte .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-catppuccin-latte .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-catppuccin-latte .ace_marker-layer .ace_active-line {
  background: #ccd0da;
}

.ace-catppuccin-latte .ace_gutter-active-line {
  background-color: #ccd0da;
}

.ace-catppuccin-latte .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(124, 127, 147, 0.30);
}

.ace-catppuccin-latte .ace_fold {
    background-color: italic;
    border-color: #4c4f69;
}
.ace-catppuccin-latte .ace_keyword{color:#8839ef;}
.ace-catppuccin-latte .ace_keyword.ace_operator{color:#179299;}
.ace-catppuccin-latte .ace_constant.ace_language{color:#d20f39;}
.ace-catppuccin-latte .ace_constant.ace_numeric{color:#fe640b;}
.ace-catppuccin-latte .ace_constant.ace_character.ace_escape{color:#ea76cb;}
.ace-catppuccin-latte .ace_support.ace_function{font-style:italic;
color:#1e66f5;}
.ace-catppuccin-latte .ace_support.ace_class{font-style:italic;
color:#df8e1d;}
.ace-catppuccin-latte .ace_support.ace_type{font-style:italic;
color:#df8e1d;}
.ace-catppuccin-latte .ace_storage.ace_type{color:#8839ef;}
.ace-catppuccin-latte .ace_string{color:#40a02b;}
.ace-catppuccin-latte .ace_comment{font-style:italic;
color:#7c7f93;}
.ace-catppuccin-latte .ace_variable{font-style:italic;
color:#1e66f5;}
.ace-catppuccin-latte .ace_variable.ace_parameter{font-style:italic;
color:#e64553;}
.ace-catppuccin-latte .ace_entity.ace_other.ace_attribute-name{color:#df8e1d;}
.ace-catppuccin-latte .ace_entity.ace_name.ace_function{font-style:italic;
color:#1e66f5;}
.ace-catppuccin-latte .ace_entity.ace_name{color:#179299;}
.ace-catppuccin-latte .ace_entity.ace_name.ace_tag{color:#1e66f5;}
`;

ace.define("ace/theme/catppuccin-latte-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/catppuccin-latte", ["require", "exports", "module", "ace/theme/catppuccin-latte-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-catppuccin-latte";
	exports.cssText = require("./catppuccin-latte-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
