import * as ace from "ace-builds";

const cssText = `
.ace-starlight .ace_gutter {
  background: rgba(34, 56, 89, 0.95);
  color: rgb(113, 119, 129);
}

.ace-starlight .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-starlight {
  background-color: rgba(34, 56, 89, 0.95);
  color: #C0B6A8;
}

.ace-starlight .ace_cursor {
  color: #D0C179;
}

.ace-starlight .ace_marker-layer .ace_selection {
  background: #50729C;
}

.ace-starlight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(34, 56, 89, 0.95);
  border-radius: 2px;
}

.ace-starlight .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-starlight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-starlight .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.12);
}

.ace-starlight .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.12);
}

.ace-starlight .ace_marker-layer .ace_selected-word {
  border: 1px solid #50729C;
}

.ace-starlight .ace_fold {
    background-color: #A38474;
    border-color: #C0B6A8;
}
.ace-starlight .ace_keyword{color:#A38474;}
.ace-starlight .ace_constant.ace_numeric{color:#B9A185;}
.ace-starlight .ace_invalid{color:#F3D651;}
.ace-starlight .ace_string{color:#B9A185;}
.ace-starlight .ace_comment{color:#AEAEAE;}
.ace-starlight .ace_variable{color:#A19A83;}
`;

ace.define("ace/theme/starlight-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/starlight", ["require", "exports", "module", "ace/theme/starlight-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-starlight";
	exports.cssText = require("./starlight-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
