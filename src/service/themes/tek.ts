import * as ace from "ace-builds";

const cssText = `
.ace-tek .ace_gutter {
  background: #2F4F4F;
  color: rgb(133, 167, 164);
}

.ace-tek .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-tek {
  background-color: #2F4F4F;
  color: #DBFEF8;
}

.ace-tek .ace_cursor {
  color: #FFFFFF;
}

.ace-tek .ace_marker-layer .ace_selection {
  background: rgba(255, 255, 255, 0.40);
}

.ace-tek.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #2F4F4F;
  border-radius: 2px;
}

.ace-tek .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-tek .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #FFC600;
}

.ace-tek .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.15);
}

.ace-tek .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.15);
}

.ace-tek .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 255, 255, 0.40);
}

.ace-tek .ace_fold {
    background-color: bold;
    border-color: #DBFEF8;
}
.ace-tek .ace_keyword{font-weight:bold;}
.ace-tek .ace_constant.ace_numeric{color:#F0F8FF;}
.ace-tek .ace_string{color:#FFFCCF;}
.ace-tek .ace_comment{font-style:italic;
color:#E6E8FA;}
`;

ace.define("ace/theme/tek-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/tek", ["require", "exports", "module", "ace/theme/tek-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-tek";
	exports.cssText = require("./tek-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
