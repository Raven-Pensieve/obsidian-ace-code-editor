import * as ace from "ace-builds";

const cssText = `
.ace-catppuccin-frappe .ace_gutter {
  background: #303446;
  color: rgb(123, 130, 158);
}

.ace-catppuccin-frappe .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-catppuccin-frappe {
  background-color: #303446;
  color: #c6d0f5;
}

.ace-catppuccin-frappe .ace_cursor {
  color: #f2d5cf;
}

.ace-catppuccin-frappe .ace_marker-layer .ace_selection {
  background: rgba(148, 156, 187, 0.25);
}

.ace-catppuccin-frappe.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #303446;
  border-radius: 2px;
}

.ace-catppuccin-frappe .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-catppuccin-frappe .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-catppuccin-frappe .ace_marker-layer .ace_active-line {
  background: #414559;
}

.ace-catppuccin-frappe .ace_gutter-active-line {
  background-color: #414559;
}

.ace-catppuccin-frappe .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(148, 156, 187, 0.25);
}

.ace-catppuccin-frappe .ace_fold {
    background-color: italic;
    border-color: #c6d0f5;
}
.ace-catppuccin-frappe .ace_keyword{color:#ca9ee6;}
.ace-catppuccin-frappe .ace_keyword.ace_operator{color:#81c8be;}
.ace-catppuccin-frappe .ace_constant.ace_language{color:#e78284;}
.ace-catppuccin-frappe .ace_constant.ace_numeric{color:#ef9f76;}
.ace-catppuccin-frappe .ace_constant.ace_character.ace_escape{color:#f4b8e4;}
.ace-catppuccin-frappe .ace_support.ace_function{font-style:italic;
color:#8caaee;}
.ace-catppuccin-frappe .ace_support.ace_class{font-style:italic;
color:#e5c890;}
.ace-catppuccin-frappe .ace_support.ace_type{font-style:italic;
color:#e5c890;}
.ace-catppuccin-frappe .ace_storage.ace_type{color:#ca9ee6;}
.ace-catppuccin-frappe .ace_string{color:#a6d189;}
.ace-catppuccin-frappe .ace_comment{font-style:italic;
color:#949cbb;}
.ace-catppuccin-frappe .ace_variable{font-style:italic;
color:#8caaee;}
.ace-catppuccin-frappe .ace_variable.ace_parameter{font-style:italic;
color:#ea999c;}
.ace-catppuccin-frappe .ace_entity.ace_other.ace_attribute-name{color:#e5c890;}
.ace-catppuccin-frappe .ace_entity.ace_name.ace_function{font-style:italic;
color:#8caaee;}
.ace-catppuccin-frappe .ace_entity.ace_name{color:#81c8be;}
.ace-catppuccin-frappe .ace_entity.ace_name.ace_tag{color:#8caaee;}
`;

(ace as any).define("ace/theme/catppuccin-frappe-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/catppuccin-frappe", ["require", "exports", "module", "ace/theme/catppuccin-frappe-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-catppuccin-frappe";
	exports.cssText = require("./catppuccin-frappe-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
