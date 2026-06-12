import * as ace from "ace-builds";

const cssText = `
.ace-cssedit .ace_gutter {
  background: #FFFFFF;
  color: rgb(163, 163, 163);
}

.ace-cssedit .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-cssedit {
  background-color: #FFFFFF;
  color: #474747;
}

.ace-cssedit .ace_cursor {
  color: #000000;
}

.ace-cssedit .ace_marker-layer .ace_selection {
  background: #A0CDFF;
}

.ace-cssedit.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-cssedit .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-cssedit .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-cssedit .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-cssedit .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-cssedit .ace_marker-layer .ace_selected-word {
  border: 1px solid #A0CDFF;
}

.ace-cssedit .ace_fold {
    background-color: #4678BC;
    border-color: #474747;
}
.ace-cssedit .ace_keyword{color:#4678BC;}
.ace-cssedit .ace_constant.ace_numeric{color:#6D4496;}
.ace-cssedit .ace_string{color:#5D9629;}
.ace-cssedit .ace_comment{color:#A8A8A8;}
.ace-cssedit .ace_entity.ace_other.ace_attribute-name{color:#B84610;}
.ace-cssedit .ace_entity.ace_name.ace_tag{color:#4678BC;}
`;

ace.define("ace/theme/cssedit-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/cssedit", ["require", "exports", "module", "ace/theme/cssedit-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-cssedit";
	exports.cssText = require("./cssedit-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
