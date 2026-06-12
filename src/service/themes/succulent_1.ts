import * as ace from "ace-builds";

const cssText = `
.ace-succulent-1 .ace_gutter {
  background: #000000;
  color: rgb(124, 124, 124);
}

.ace-succulent-1 .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-succulent-1 {
  background-color: #000000;
  color: #F8F8F8;
}

.ace-succulent-1 .ace_cursor {
  color: #A7A7A7;
}

.ace-succulent-1 .ace_marker-layer .ace_selection {
  background: rgba(221, 240, 255, 0.20);
}

.ace-succulent-1.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-succulent-1 .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-succulent-1 .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(202, 226, 251, 0.24);
}

.ace-succulent-1 .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.051);
}

.ace-succulent-1 .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.051);
}

.ace-succulent-1 .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(221, 240, 255, 0.20);
}

.ace-succulent-1 .ace_fold {
    background-color: #FF6458;
    border-color: #F8F8F8;
}
.ace-succulent-1 .ace_keyword{color:#FF6458;}
.ace-succulent-1 .ace_constant{color:#0A9CFF;}
.ace-succulent-1 .ace_support{color:#00FFBC;}
.ace-succulent-1 .ace_support.ace_function{color:#F1D950;}
.ace-succulent-1 .ace_support.ace_constant{color:#CF6A4C;}
.ace-succulent-1 .ace_storage{color:#99CF50;}
.ace-succulent-1 .ace_invalid.ace_illegal{color:#FD5FF1;
background-color:rgba(86, 45, 86, 0.75);}
.ace-succulent-1 .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#FD5FF1;}
.ace-succulent-1 .ace_string{color:#90FF5E;}
.ace-succulent-1 .ace_string.ace_regexp{color:#E9C062;}
.ace-succulent-1 .ace_comment{font-style:italic;
color:#C05DFF;}
.ace-succulent-1 .ace_variable{color:#4596FF;}
.ace-succulent-1 .ace_meta.ace_tag{color:#89BDFF;}
.ace-succulent-1 .ace_markup.ace_heading{color:#FEDCC5;
background-color:#632D04;}
.ace-succulent-1 .ace_markup.ace_list{color:#E1D4B9;}
`;

ace.define("ace/theme/succulent_1-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/succulent_1", ["require", "exports", "module", "ace/theme/succulent_1-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-succulent-1";
	exports.cssText = require("./succulent_1-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
