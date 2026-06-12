import * as ace from "ace-builds";

const cssText = `
.ace-spectacular .ace_gutter {
  background: #0B0A0A;
  color: rgb(127, 127, 127);
}

.ace-spectacular .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-spectacular {
  background-color: #0B0A0A;
  color: #F3F3F3;
}

.ace-spectacular .ace_cursor {
  color: #8BA7A7;
}

.ace-spectacular .ace_marker-layer .ace_selection {
  background: rgba(255, 255, 255, 0.35);
}

.ace-spectacular.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0B0A0A;
  border-radius: 2px;
}

.ace-spectacular .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-spectacular .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #484848;
}

.ace-spectacular .ace_marker-layer .ace_active-line {
  background: #F8F8F8;
}

.ace-spectacular .ace_gutter-active-line {
  background-color: #F8F8F8;
}

.ace-spectacular .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.ace-spectacular .ace_fold {
    background-color: bold;
    border-color: #F3F3F3;
}
.ace-spectacular .ace_keyword{font-weight:bold;
color:#FFAA00;}
.ace-spectacular .ace_constant{color:#FF3A55;}
.ace-spectacular .ace_support{color:#84BEE2;}
.ace-spectacular .ace_support.ace_function{color:#FFB454;}
.ace-spectacular .ace_support.ace_constant{color:#EB939A;}
.ace-spectacular .ace_storage{color:#F6F080;}
.ace-spectacular .ace_invalid{color:#F8F8F8;
background-color:rgba(216, 41, 13, 0.75);}
.ace-spectacular .ace_string{color:#A9E448;}
.ace-spectacular .ace_string.ace_regexp{color:#FFB454;}
.ace-spectacular .ace_comment{font-style:italic;
color:#60606D;}
.ace-spectacular .ace_variable{color:#FB9A4B;}
.ace-spectacular .ace_meta.ace_tag{color:#9EFFFF;}
`;

ace.define("ace/theme/spectacular-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/spectacular", ["require", "exports", "module", "ace/theme/spectacular-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-spectacular";
	exports.cssText = require("./spectacular-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
