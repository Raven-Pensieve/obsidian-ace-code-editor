import * as ace from "ace-builds";

const cssText = `
.ace-vibrant-ink .ace_gutter {
  background: #000000;
  color: rgb(128, 128, 128);
}

.ace-vibrant-ink .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-vibrant-ink {
  background-color: #000000;
  color: #FFFFFF;
}

.ace-vibrant-ink .ace_cursor {
  color: #FFFFFF;
}

.ace-vibrant-ink .ace_marker-layer .ace_selection {
  background: rgba(53, 73, 60, 0.88);
}

.ace-vibrant-ink.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-vibrant-ink .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-vibrant-ink .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-vibrant-ink .ace_marker-layer .ace_active-line {
  background: #333300;
}

.ace-vibrant-ink .ace_gutter-active-line {
  background-color: #333300;
}

.ace-vibrant-ink .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(53, 73, 60, 0.88);
}

.ace-vibrant-ink .ace_fold {
    background-color: #FFCC00;
    border-color: #FFFFFF;
}
.ace-vibrant-ink .ace_keyword{color:#FF6600;}
.ace-vibrant-ink .ace_constant{color:#339999;}
.ace-vibrant-ink .ace_string{color:#66FF00;}
.ace-vibrant-ink .ace_string.ace_regexp{color:#44B4CC;}
.ace-vibrant-ink .ace_comment{color:#9933CC;}
.ace-vibrant-ink .ace_variable{color:#FFCC00;}
.ace-vibrant-ink .ace_variable.ace_parameter{font-style:italic;}
.ace-vibrant-ink .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#99CC99;}
.ace-vibrant-ink .ace_entity.ace_name.ace_function{color:#FFCC00;}
`;

(ace as any).define("ace/theme/vibrant-ink-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/vibrant-ink", ["require", "exports", "module", "ace/theme/vibrant-ink-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-vibrant-ink";
	exports.cssText = require("./vibrant-ink-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
