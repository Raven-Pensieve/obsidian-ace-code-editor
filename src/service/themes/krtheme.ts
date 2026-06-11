import * as ace from "ace-builds";

const cssText = `
.ace-krtheme .ace_gutter {
  background: #0B0A09;
  color: rgb(132, 133, 117);
}

.ace-krtheme .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-krtheme {
  background-color: #0B0A09;
  color: #FCFFE0;
}

.ace-krtheme .ace_cursor {
  color: #FF9900;
}

.ace-krtheme .ace_marker-layer .ace_selection {
  background: rgba(170, 0, 255, 0.45);
}

.ace-krtheme.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0B0A09;
  border-radius: 2px;
}

.ace-krtheme .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-krtheme .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 177, 111, 0.32);
}

.ace-krtheme .ace_marker-layer .ace_active-line {
  background: #38403D;
}

.ace-krtheme .ace_gutter-active-line {
  background-color: #38403D;
}

.ace-krtheme .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(170, 0, 255, 0.45);
}

.ace-krtheme .ace_fold {
    background-color: #949C8B;
    border-color: #FCFFE0;
}
.ace-krtheme .ace_keyword{color:#949C8B;}
.ace-krtheme .ace_constant{color:rgba(210, 117, 24, 0.76);}
.ace-krtheme .ace_support{color:#9FC28A;}
.ace-krtheme .ace_support.ace_function{color:#85873A;}
.ace-krtheme .ace_support.ace_constant{color:#C27E66;}
.ace-krtheme .ace_storage{color:#FFEE80;}
.ace-krtheme .ace_invalid{color:#F8F8F8;
background-color:#A41300;}
.ace-krtheme .ace_string.ace_regexp{color:rgba(125, 255, 192, 0.65);}
.ace-krtheme .ace_comment{font-style:italic;
color:#706D5B;}
.ace-krtheme .ace_variable{color:#D1A796;}
.ace-krtheme .ace_variable.ace_language{color:#FF80E1;}
.ace-krtheme .ace_meta.ace_tag{color:#BABD9C;}
.ace-krtheme .ace_markup.ace_heading{font-weight:bold;}
.ace-krtheme .ace_markup.ace_list{background-color:#0F0040;}
`;

(ace as any).define("ace/theme/krtheme-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/krtheme", ["require", "exports", "module", "ace/theme/krtheme-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-krtheme";
	exports.cssText = require("./krtheme-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
