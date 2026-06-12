import * as ace from "ace-builds";

const cssText = `
.ace-spacecadet .ace_gutter {
  background: #0D0D0D;
  color: rgb(117, 122, 110);
}

.ace-spacecadet .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-spacecadet {
  background-color: #0D0D0D;
  color: #DDE6CF;
}

.ace-spacecadet .ace_cursor {
  color: #7F005D;
}

.ace-spacecadet .ace_marker-layer .ace_selection {
  background: #40002F;
}

.ace-spacecadet.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0D0D0D;
  border-radius: 2px;
}

.ace-spacecadet .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-spacecadet .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-spacecadet .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-spacecadet .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-spacecadet .ace_marker-layer .ace_selected-word {
  border: 1px solid #40002F;
}

.ace-spacecadet .ace_fold {
    background-color: #6b72e6;
    border-color: #DDE6CF;
}
.ace-spacecadet .ace_constant{color:#A8885A;}
.ace-spacecadet .ace_support{color:#8A4B66;}
.ace-spacecadet .ace_storage{color:#9EBF60;}
.ace-spacecadet .ace_invalid{background-color:#5F0047;}
.ace-spacecadet .ace_string{color:#805978;}
.ace-spacecadet .ace_comment{color:#473C45;}
.ace-spacecadet .ace_variable.ace_parameter{color:#596380;}
`;

ace.define("ace/theme/spacecadet-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/spacecadet", ["require", "exports", "module", "ace/theme/spacecadet-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-spacecadet";
	exports.cssText = require("./spacecadet-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
