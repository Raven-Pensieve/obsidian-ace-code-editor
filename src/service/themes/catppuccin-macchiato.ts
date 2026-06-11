import * as ace from "ace-builds";

const cssText = `
.ace-catppuccin-macchiato .ace_gutter {
  background: #24273a;
  color: rgb(119, 125, 152);
}

.ace-catppuccin-macchiato .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-catppuccin-macchiato {
  background-color: #24273a;
  color: #cad3f5;
}

.ace-catppuccin-macchiato .ace_cursor {
  color: #f4dbd6;
}

.ace-catppuccin-macchiato .ace_marker-layer .ace_selection {
  background: rgba(147, 154, 183, 0.25);
}

.ace-catppuccin-macchiato.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #24273a;
  border-radius: 2px;
}

.ace-catppuccin-macchiato .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-catppuccin-macchiato .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-catppuccin-macchiato .ace_marker-layer .ace_active-line {
  background: #363a4f;
}

.ace-catppuccin-macchiato .ace_gutter-active-line {
  background-color: #363a4f;
}

.ace-catppuccin-macchiato .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(147, 154, 183, 0.25);
}

.ace-catppuccin-macchiato .ace_fold {
    background-color: italic;
    border-color: #cad3f5;
}
.ace-catppuccin-macchiato .ace_keyword{color:#c6a0f6;}
.ace-catppuccin-macchiato .ace_keyword.ace_operator{color:#8bd5ca;}
.ace-catppuccin-macchiato .ace_constant.ace_language{color:#ed8796;}
.ace-catppuccin-macchiato .ace_constant.ace_numeric{color:#f5a97f;}
.ace-catppuccin-macchiato .ace_constant.ace_character.ace_escape{color:#f5bde6;}
.ace-catppuccin-macchiato .ace_support.ace_function{font-style:italic;
color:#8aadf4;}
.ace-catppuccin-macchiato .ace_support.ace_class{font-style:italic;
color:#eed49f;}
.ace-catppuccin-macchiato .ace_support.ace_type{font-style:italic;
color:#eed49f;}
.ace-catppuccin-macchiato .ace_storage.ace_type{color:#c6a0f6;}
.ace-catppuccin-macchiato .ace_string{color:#a6da95;}
.ace-catppuccin-macchiato .ace_comment{font-style:italic;
color:#939ab7;}
.ace-catppuccin-macchiato .ace_variable{font-style:italic;
color:#8aadf4;}
.ace-catppuccin-macchiato .ace_variable.ace_parameter{font-style:italic;
color:#ee99a0;}
.ace-catppuccin-macchiato .ace_entity.ace_other.ace_attribute-name{color:#eed49f;}
.ace-catppuccin-macchiato .ace_entity.ace_name.ace_function{font-style:italic;
color:#8aadf4;}
.ace-catppuccin-macchiato .ace_entity.ace_name{color:#8bd5ca;}
.ace-catppuccin-macchiato .ace_entity.ace_name.ace_tag{color:#8aadf4;}
`;

(ace as any).define("ace/theme/catppuccin-macchiato-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/catppuccin-macchiato", ["require", "exports", "module", "ace/theme/catppuccin-macchiato-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-catppuccin-macchiato";
	exports.cssText = require("./catppuccin-macchiato-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
