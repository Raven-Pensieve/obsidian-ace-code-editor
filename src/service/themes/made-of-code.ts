import * as ace from "ace-builds";

const cssText = `
.ace-made-of-code .ace_gutter {
  background: rgba(9, 10, 27, 0.95);
  color: rgb(129, 129, 138);
}

.ace-made-of-code .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-made-of-code {
  background-color: rgba(9, 10, 27, 0.95);
  color: #F8F8F8;
}

.ace-made-of-code .ace_cursor {
  color: #00FFFF;
}

.ace-made-of-code .ace_marker-layer .ace_selection {
  background: rgba(0, 125, 255, 0.50);
}

.ace-made-of-code.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(9, 10, 27, 0.95);
  border-radius: 2px;
}

.ace-made-of-code .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-made-of-code .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(202, 226, 251, 0.24);
}

.ace-made-of-code .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.0);
}

.ace-made-of-code .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.0);
}

.ace-made-of-code .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(0, 125, 255, 0.50);
}

.ace-made-of-code .ace_fold {
    background-color: #FF3854;
    border-color: #F8F8F8;
}
.ace-made-of-code .ace_keyword{color:#FF3854;}
.ace-made-of-code .ace_constant{color:#0A9CFF;}
.ace-made-of-code .ace_support{color:#00FFBC;}
.ace-made-of-code .ace_support.ace_function{color:#F1D950;}
.ace-made-of-code .ace_support.ace_constant{color:#CF6A4C;}
.ace-made-of-code .ace_storage{color:#99CF50;}
.ace-made-of-code .ace_invalid.ace_illegal{color:#FD5FF1;
background-color:rgba(86, 45, 86, 0.75);}
.ace-made-of-code .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#FD5FF1;}
.ace-made-of-code .ace_string{color:#8FFF58;
background-color:rgba(16, 38, 34, 0.98);}
.ace-made-of-code .ace_string.ace_regexp{color:#E9C062;}
.ace-made-of-code .ace_comment{font-style:italic;
color:#C050C2;
background-color:#000000;}
.ace-made-of-code .ace_variable{color:#588AFF;}
.ace-made-of-code .ace_meta.ace_tag{color:#45C1EA;}
.ace-made-of-code .ace_markup.ace_heading{color:#FEDCC5;
background-color:#632D04;}
.ace-made-of-code .ace_markup.ace_list{color:#E1D4B9;}
`;

(ace as any).define("ace/theme/made-of-code-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/made-of-code", ["require", "exports", "module", "ace/theme/made-of-code-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-made-of-code";
	exports.cssText = require("./made-of-code-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
