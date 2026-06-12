import * as ace from "ace-builds";

const cssText = `
.ace-sweyla674314 .ace_gutter {
  background: #0E0C00;
  color: rgb(135, 134, 128);
}

.ace-sweyla674314 .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-sweyla674314 {
  background-color: #0E0C00;
  color: #FFFFFF;
}

.ace-sweyla674314 .ace_cursor {
  color: #FFFFFF;
}

.ace-sweyla674314 .ace_marker-layer .ace_selection {
  background: #323232;
}

.ace-sweyla674314.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0E0C00;
  border-radius: 2px;
}

.ace-sweyla674314 .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-sweyla674314 .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(202, 226, 251, 0.24);
}

.ace-sweyla674314 .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.14);
}

.ace-sweyla674314 .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.14);
}

.ace-sweyla674314 .ace_marker-layer .ace_selected-word {
  border: 1px solid #323232;
}

.ace-sweyla674314 .ace_fold {
    background-color: #B143F0;
    border-color: #FFFFFF;
}
.ace-sweyla674314 .ace_keyword{color:#B2371B;}
.ace-sweyla674314 .ace_keyword.ace_operator{color:#0C10FF;}
.ace-sweyla674314 .ace_constant{color:#64AA1A;}
.ace-sweyla674314 .ace_constant.ace_language{color:#AF3B69;}
.ace-sweyla674314 .ace_support{color:#56811A;}
.ace-sweyla674314 .ace_support.ace_function{color:#852FBC;}
.ace-sweyla674314 .ace_storage{color:#B2371B;}
.ace-sweyla674314 .ace_invalid{color:#B2371B;}
.ace-sweyla674314 .ace_string{color:#B1969B;}
.ace-sweyla674314 .ace_comment{color:#93AFD5;}
.ace-sweyla674314 .ace_variable{color:#AF3B69;}
.ace-sweyla674314 .ace_entity.ace_name.ace_function{color:#B143F0;}
.ace-sweyla674314 .ace_entity.ace_name{color:#2B9E2B;}
`;

ace.define("ace/theme/sweyla674314-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/sweyla674314", ["require", "exports", "module", "ace/theme/sweyla674314-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-sweyla674314";
	exports.cssText = require("./sweyla674314-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
