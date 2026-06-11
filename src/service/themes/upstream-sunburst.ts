import * as ace from "ace-builds";

const cssText = `
.ace-upstream-sunburst .ace_gutter {
  background: rgba(0, 0, 0, 0.97);
  color: rgb(124, 124, 124);
}

.ace-upstream-sunburst .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-upstream-sunburst {
  background-color: rgba(0, 0, 0, 0.97);
  color: #F8F8F8;
}

.ace-upstream-sunburst .ace_cursor {
  color: #FFFFFF;
}

.ace-upstream-sunburst .ace_marker-layer .ace_selection {
  background: rgba(102, 140, 219, 0.61);
}

.ace-upstream-sunburst.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.97);
  border-radius: 2px;
}

.ace-upstream-sunburst .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-upstream-sunburst .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(97, 109, 121, 0.24);
}

.ace-upstream-sunburst .ace_marker-layer .ace_active-line {
  background: rgba(242, 236, 255, 0.12);
}

.ace-upstream-sunburst .ace_gutter-active-line {
  background-color: rgba(242, 236, 255, 0.12);
}

.ace-upstream-sunburst .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(102, 140, 219, 0.61);
}

.ace-upstream-sunburst .ace_fold {
    background-color: #89725B;
    border-color: #F8F8F8;
}
.ace-upstream-sunburst .ace_keyword{color:#89725B;}
.ace-upstream-sunburst .ace_keyword.ace_operator{color:#FFFFFF;}
.ace-upstream-sunburst .ace_constant{color:#259ADB;}
.ace-upstream-sunburst .ace_constant.ace_numeric{color:#B2D72C;}
.ace-upstream-sunburst .ace_support{color:#9B859D;}
.ace-upstream-sunburst .ace_support.ace_function{color:#DAD085;}
.ace-upstream-sunburst .ace_support.ace_constant{color:#CF6A4C;}
.ace-upstream-sunburst .ace_storage{color:#89725B;}
.ace-upstream-sunburst .ace_invalid.ace_illegal{color:#FD5FF1;
background-color:rgba(86, 45, 86, 0.75);}
.ace-upstream-sunburst .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#FD5FF1;}
.ace-upstream-sunburst .ace_string{color:#B2D72C;}
.ace-upstream-sunburst .ace_string.ace_regexp{color:#E9C062;}
.ace-upstream-sunburst .ace_comment{font-style:italic;
color:#3D3D3D;}
.ace-upstream-sunburst .ace_variable{color:#259ADB;}
.ace-upstream-sunburst .ace_meta.ace_tag{color:#259ADB;}
.ace-upstream-sunburst .ace_markup.ace_heading{color:#FEDCC5;
background-color:#632D04;}
.ace-upstream-sunburst .ace_markup.ace_list{color:#E1D4B9;}
`;

(ace as any).define("ace/theme/upstream-sunburst-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/upstream-sunburst", ["require", "exports", "module", "ace/theme/upstream-sunburst-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-upstream-sunburst";
	exports.cssText = require("./upstream-sunburst-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
