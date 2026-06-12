import * as ace from "ace-builds";

const cssText = `
.ace-multimarkdown .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-multimarkdown .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-multimarkdown {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-multimarkdown .ace_cursor {
  color: #000000;
}

.ace-multimarkdown .ace_marker-layer .ace_selection {
  background: #B5D8F7;
}

.ace-multimarkdown.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-multimarkdown .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-multimarkdown .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-multimarkdown .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-multimarkdown .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-multimarkdown .ace_marker-layer .ace_selected-word {
  border: 1px solid #B5D8F7;
}

.ace-multimarkdown .ace_fold {
    background-color: #6b72e6;
    border-color: #000000;
}
`;

ace.define("ace/theme/multimarkdown-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/multimarkdown", ["require", "exports", "module", "ace/theme/multimarkdown-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-multimarkdown";
	exports.cssText = require("./multimarkdown-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
