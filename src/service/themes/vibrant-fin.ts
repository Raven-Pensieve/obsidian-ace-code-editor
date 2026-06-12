import * as ace from "ace-builds";

const cssText = `
.ace-vibrant-fin .ace_gutter {
  background: rgba(0, 0, 0, 0.95);
  color: rgb(128, 128, 128);
}

.ace-vibrant-fin .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-vibrant-fin {
  background-color: rgba(0, 0, 0, 0.95);
  color: #FFFFFF;
}

.ace-vibrant-fin .ace_cursor {
  color: #FFFFFF;
}

.ace-vibrant-fin .ace_marker-layer .ace_selection {
  background: rgba(56, 51, 227, 0.88);
}

.ace-vibrant-fin.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.95);
  border-radius: 2px;
}

.ace-vibrant-fin .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-vibrant-fin .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-vibrant-fin .ace_marker-layer .ace_active-line {
  background: rgba(51, 51, 49, 0.27);
}

.ace-vibrant-fin .ace_gutter-active-line {
  background-color: rgba(51, 51, 49, 0.27);
}

.ace-vibrant-fin .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(56, 51, 227, 0.88);
}

.ace-vibrant-fin .ace_fold {
    background-color: #FFCC00;
    border-color: #FFFFFF;
}
.ace-vibrant-fin .ace_keyword{color:#FF6600;}
.ace-vibrant-fin .ace_constant{color:#339999;}
.ace-vibrant-fin .ace_string{color:#66FF00;}
.ace-vibrant-fin .ace_string.ace_regexp{color:#44B4CC;}
.ace-vibrant-fin .ace_comment{color:#634D70;}
.ace-vibrant-fin .ace_variable{color:#FFCC00;}
.ace-vibrant-fin .ace_variable.ace_parameter{font-style:italic;}
.ace-vibrant-fin .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#99CC99;}
.ace-vibrant-fin .ace_entity.ace_name.ace_function{color:#FFCC00;}
`;

ace.define("ace/theme/vibrant-fin-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/vibrant-fin", ["require", "exports", "module", "ace/theme/vibrant-fin-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-vibrant-fin";
	exports.cssText = require("./vibrant-fin-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
