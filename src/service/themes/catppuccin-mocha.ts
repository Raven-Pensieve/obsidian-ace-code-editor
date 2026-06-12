import * as ace from "ace-builds";

const cssText = `
.ace-catppuccin-mocha .ace_gutter {
  background: #1e1e2e;
  color: rgb(118, 122, 145);
}

.ace-catppuccin-mocha .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-catppuccin-mocha {
  background-color: #1e1e2e;
  color: #cdd6f4;
}

.ace-catppuccin-mocha .ace_cursor {
  color: #f5e0dc;
}

.ace-catppuccin-mocha .ace_marker-layer .ace_selection {
  background: rgba(147, 153, 178, 0.25);
}

.ace-catppuccin-mocha.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #1e1e2e;
  border-radius: 2px;
}

.ace-catppuccin-mocha .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-catppuccin-mocha .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-catppuccin-mocha .ace_marker-layer .ace_active-line {
  background: #313244;
}

.ace-catppuccin-mocha .ace_gutter-active-line {
  background-color: #313244;
}

.ace-catppuccin-mocha .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(147, 153, 178, 0.25);
}

.ace-catppuccin-mocha .ace_fold {
    background-color: italic;
    border-color: #cdd6f4;
}
.ace-catppuccin-mocha .ace_keyword{color:#cba6f7;}
.ace-catppuccin-mocha .ace_keyword.ace_operator{color:#94e2d5;}
.ace-catppuccin-mocha .ace_constant.ace_language{color:#f38ba8;}
.ace-catppuccin-mocha .ace_constant.ace_numeric{color:#fab387;}
.ace-catppuccin-mocha .ace_constant.ace_character.ace_escape{color:#f5c2e7;}
.ace-catppuccin-mocha .ace_support.ace_function{font-style:italic;
color:#89b4fa;}
.ace-catppuccin-mocha .ace_support.ace_class{font-style:italic;
color:#f9e2af;}
.ace-catppuccin-mocha .ace_support.ace_type{font-style:italic;
color:#f9e2af;}
.ace-catppuccin-mocha .ace_storage.ace_type{color:#cba6f7;}
.ace-catppuccin-mocha .ace_string{color:#a6e3a1;}
.ace-catppuccin-mocha .ace_comment{font-style:italic;
color:#9399b2;}
.ace-catppuccin-mocha .ace_variable{font-style:italic;
color:#89b4fa;}
.ace-catppuccin-mocha .ace_variable.ace_parameter{font-style:italic;
color:#eba0ac;}
.ace-catppuccin-mocha .ace_entity.ace_other.ace_attribute-name{color:#f9e2af;}
.ace-catppuccin-mocha .ace_entity.ace_name.ace_function{font-style:italic;
color:#89b4fa;}
.ace-catppuccin-mocha .ace_entity.ace_name{color:#94e2d5;}
.ace-catppuccin-mocha .ace_entity.ace_name.ace_tag{color:#89b4fa;}
`;

ace.define("ace/theme/catppuccin-mocha-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/catppuccin-mocha", ["require", "exports", "module", "ace/theme/catppuccin-mocha-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-catppuccin-mocha";
	exports.cssText = require("./catppuccin-mocha-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
