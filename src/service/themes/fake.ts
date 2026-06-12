import * as ace from "ace-builds";

const cssText = `
.ace-fake .ace_gutter {
  background: #010304;
  color: rgb(128, 120, 101);
}

.ace-fake .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-fake {
  background-color: #010304;
  color: #FFEDC5;
}

.ace-fake .ace_cursor {
  color: #A7A7A7;
}

.ace-fake .ace_marker-layer .ace_selection {
  background: rgba(221, 240, 255, 0.20);
}

.ace-fake.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #010304;
  border-radius: 2px;
}

.ace-fake .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-fake .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(202, 226, 251, 0.24);
}

.ace-fake .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.051);
}

.ace-fake .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.051);
}

.ace-fake .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(221, 240, 255, 0.20);
}

.ace-fake .ace_fold {
    background-color: bold;
    border-color: #FFEDC5;
}
.ace-fake .ace_keyword{font-weight:bold;
color:#FF4A1A;}
.ace-fake .ace_constant{color:#FF4A1A;}
.ace-fake .ace_support{color:#FF4A1A;}
.ace-fake .ace_support.ace_function{color:#DAD085;}
.ace-fake .ace_support.ace_constant{color:#CF6A4C;}
.ace-fake .ace_storage{color:#B4CCE4;}
.ace-fake .ace_invalid.ace_illegal{color:#FD5FF1;
background-color:rgba(86, 45, 86, 0.75);}
.ace-fake .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#FD5FF1;}
.ace-fake .ace_string{color:#FF9924;}
.ace-fake .ace_string.ace_regexp{color:#E9C062;}
.ace-fake .ace_comment{font-style:italic;
font-weight:bold;
color:#8E8D93;}
.ace-fake .ace_variable{color:#FF4A1A;}
.ace-fake .ace_meta.ace_tag{color:#89BDFF;}
.ace-fake .ace_markup.ace_heading{color:#FEDCC5;
background-color:#632D04;}
.ace-fake .ace_markup.ace_list{color:#E1D4B9;}
`;

ace.define("ace/theme/fake-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/fake", ["require", "exports", "module", "ace/theme/fake-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-fake";
	exports.cssText = require("./fake-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
