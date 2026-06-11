import * as ace from "ace-builds";

const cssText = `
.ace-imathis .ace_gutter {
  background: #000000;
  color: rgb(128, 128, 128);
}

.ace-imathis .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-imathis {
  background-color: #000000;
  color: #FFFFFF;
}

.ace-imathis .ace_cursor {
  color: #ABABAB;
}

.ace-imathis .ace_marker-layer .ace_selection {
  background: rgba(142, 186, 231, 0.65);
}

.ace-imathis.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-imathis .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-imathis .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(180, 180, 180, 0.62);
}

.ace-imathis .ace_marker-layer .ace_active-line {
  background: rgba(186, 229, 28, 0.25);
}

.ace-imathis .ace_gutter-active-line {
  background-color: rgba(186, 229, 28, 0.25);
}

.ace-imathis .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(142, 186, 231, 0.65);
}

.ace-imathis .ace_fold {
    background-color: #6b72e6;
    border-color: #FFFFFF;
}
.ace-imathis .ace_constant{color:#CD6839;}
.ace-imathis .ace_support{color:#104E8B;}
.ace-imathis .ace_support.ace_function{color:#E0D79A;}
.ace-imathis .ace_support.ace_constant{color:#CD643E;}
.ace-imathis .ace_storage{color:#A52A2A;}
.ace-imathis .ace_invalid.ace_illegal{color:#FD1224;
background-color:rgba(255, 6, 0, 0.15);}
.ace-imathis .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#FD1732;
background-color:rgba(232, 233, 232, 0.031);}
.ace-imathis .ace_string{color:#65B042;}
.ace-imathis .ace_string.ace_regexp{color:#417E00;
background-color:#C9D4BE;}
.ace-imathis .ace_comment{font-style:italic;
color:#BCBCBC;
background-color:rgba(220, 220, 220, 0.090);}
.ace-imathis .ace_variable{color:#549DE6;}
.ace-imathis .ace_meta.ace_tag{color:#51A2F9;}
.ace-imathis .ace_markup.ace_heading{color:#FEDCC5;
background-color:#632D04;}
.ace-imathis .ace_markup.ace_list{color:#8F5B26;}
`;

(ace as any).define("ace/theme/imathis-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/imathis", ["require", "exports", "module", "ace/theme/imathis-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-imathis";
	exports.cssText = require("./imathis-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
