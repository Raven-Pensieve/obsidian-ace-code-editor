import * as ace from "ace-builds";

const cssText = `
.ace-vibrant-ink-choppednscrewed .ace_gutter {
  background: #000000;
  color: rgb(128, 128, 128);
}

.ace-vibrant-ink-choppednscrewed .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-vibrant-ink-choppednscrewed {
  background-color: #000000;
  color: #FFFFFF;
}

.ace-vibrant-ink-choppednscrewed .ace_cursor {
  color: #FFFFFF;
}

.ace-vibrant-ink-choppednscrewed .ace_marker-layer .ace_selection {
  background: #0A0074;
}

.ace-vibrant-ink-choppednscrewed.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-vibrant-ink-choppednscrewed .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-vibrant-ink-choppednscrewed .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #222222;
}

.ace-vibrant-ink-choppednscrewed .ace_marker-layer .ace_active-line {
  background: #070C86;
}

.ace-vibrant-ink-choppednscrewed .ace_gutter-active-line {
  background-color: #070C86;
}

.ace-vibrant-ink-choppednscrewed .ace_marker-layer .ace_selected-word {
  border: 1px solid #0A0074;
}

.ace-vibrant-ink-choppednscrewed .ace_fold {
    background-color: #F8CC49;
    border-color: #FFFFFF;
}
.ace-vibrant-ink-choppednscrewed .ace_keyword{color:#FF7827;}
.ace-vibrant-ink-choppednscrewed .ace_constant{color:#64AEF9;}
.ace-vibrant-ink-choppednscrewed .ace_constant.ace_character.ace_escape{color:#B2D9D0;}
.ace-vibrant-ink-choppednscrewed .ace_support.ace_function{color:#E94526;}
.ace-vibrant-ink-choppednscrewed .ace_storage{color:#EE8329;}
.ace-vibrant-ink-choppednscrewed .ace_string{color:#FEFF8E;}
.ace-vibrant-ink-choppednscrewed .ace_string.ace_regexp{color:#44B4CC;}
.ace-vibrant-ink-choppednscrewed .ace_comment{color:#363636;}
.ace-vibrant-ink-choppednscrewed .ace_variable{color:#F8CC49;}
.ace-vibrant-ink-choppednscrewed .ace_variable.ace_language{color:#44BCF9;}
.ace-vibrant-ink-choppednscrewed .ace_entity.ace_other.ace_attribute-name{color:#FF873A;}
.ace-vibrant-ink-choppednscrewed .ace_entity.ace_name.ace_function{color:#F8CC49;}
`;

(ace as any).define("ace/theme/vibrant-ink-choppednscrewed-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/vibrant-ink-choppednscrewed", ["require", "exports", "module", "ace/theme/vibrant-ink-choppednscrewed-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-vibrant-ink-choppednscrewed";
	exports.cssText = require("./vibrant-ink-choppednscrewed-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
