import * as ace from "ace-builds";

const cssText = `
.ace-vibrant-ink-remix .ace_gutter {
  background: #000000;
  color: rgb(128, 128, 128);
}

.ace-vibrant-ink-remix .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-vibrant-ink-remix {
  background-color: #000000;
  color: #FFFFFF;
}

.ace-vibrant-ink-remix .ace_cursor {
  color: #FFFFFF;
}

.ace-vibrant-ink-remix .ace_marker-layer .ace_selection {
  background: #0000FF;
}

.ace-vibrant-ink-remix.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-vibrant-ink-remix .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-vibrant-ink-remix .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #292A29;
}

.ace-vibrant-ink-remix .ace_marker-layer .ace_active-line {
  background: rgba(13, 0, 198, 0.38);
}

.ace-vibrant-ink-remix .ace_gutter-active-line {
  background-color: rgba(13, 0, 198, 0.38);
}

.ace-vibrant-ink-remix .ace_marker-layer .ace_selected-word {
  border: 1px solid #0000FF;
}

.ace-vibrant-ink-remix .ace_fold {
    background-color: #FF9C3B;
    border-color: #FFFFFF;
}
.ace-vibrant-ink-remix .ace_keyword{color:#FF7827;}
.ace-vibrant-ink-remix .ace_constant{color:#5FBAFD;}
.ace-vibrant-ink-remix .ace_constant.ace_character.ace_escape{color:#B2D9D0;}
.ace-vibrant-ink-remix .ace_support{color:#DF0033;}
.ace-vibrant-ink-remix .ace_support.ace_function{color:#F84E14;}
.ace-vibrant-ink-remix .ace_support.ace_constant{color:#F9DC76;}
.ace-vibrant-ink-remix .ace_storage{color:#FF9419;}
.ace-vibrant-ink-remix .ace_string{color:#FFFC7A;}
.ace-vibrant-ink-remix .ace_string.ace_regexp{color:#44B4CC;}
.ace-vibrant-ink-remix .ace_comment{color:#545454;}
.ace-vibrant-ink-remix .ace_variable{color:#FF9C3B;}
.ace-vibrant-ink-remix .ace_variable.ace_language{color:#127FFB;}
.ace-vibrant-ink-remix .ace_meta.ace_tag{color:#FF7827;}
.ace-vibrant-ink-remix .ace_entity.ace_other.ace_attribute-name{color:#E95126;}
.ace-vibrant-ink-remix .ace_entity.ace_name.ace_function{color:#FF9C3B;}
.ace-vibrant-ink-remix .ace_entity.ace_name.ace_tag{color:#E95126;}
`;

(ace as any).define("ace/theme/vibrant-ink-remix-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/vibrant-ink-remix", ["require", "exports", "module", "ace/theme/vibrant-ink-remix-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-vibrant-ink-remix";
	exports.cssText = require("./vibrant-ink-remix-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
