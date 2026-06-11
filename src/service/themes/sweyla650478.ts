import * as ace from "ace-builds";

const cssText = `
.ace-sweyla650478 .ace_gutter {
  background: #020306;
  color: rgb(129, 129, 131);
}

.ace-sweyla650478 .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-sweyla650478 {
  background-color: #020306;
  color: #FFFFFF;
}

.ace-sweyla650478 .ace_cursor {
  color: #FFFFFF;
}

.ace-sweyla650478 .ace_marker-layer .ace_selection {
  background: #323232;
}

.ace-sweyla650478.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #020306;
  border-radius: 2px;
}

.ace-sweyla650478 .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-sweyla650478 .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(202, 226, 251, 0.24);
}

.ace-sweyla650478 .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.14);
}

.ace-sweyla650478 .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.14);
}

.ace-sweyla650478 .ace_marker-layer .ace_selected-word {
  border: 1px solid #323232;
}

.ace-sweyla650478 .ace_fold {
    background-color: #B26884;
    border-color: #FFFFFF;
}
.ace-sweyla650478 .ace_keyword{color:#7FB26C;}
.ace-sweyla650478 .ace_keyword.ace_operator{color:#879734;}
.ace-sweyla650478 .ace_constant{color:#6BA128;}
.ace-sweyla650478 .ace_constant.ace_language{color:#E300B9;}
.ace-sweyla650478 .ace_support{color:#FA0051;}
.ace-sweyla650478 .ace_support.ace_function{color:#935261;}
.ace-sweyla650478 .ace_storage{color:#7FB26C;}
.ace-sweyla650478 .ace_invalid{color:#7FB26C;}
.ace-sweyla650478 .ace_string{color:#CAD130;}
.ace-sweyla650478 .ace_comment{color:#A082B9;}
.ace-sweyla650478 .ace_variable{color:#E300B9;}
.ace-sweyla650478 .ace_entity.ace_name.ace_function{color:#B26884;}
.ace-sweyla650478 .ace_entity.ace_name{color:#A98FF1;}
`;

(ace as any).define("ace/theme/sweyla650478-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/sweyla650478", ["require", "exports", "module", "ace/theme/sweyla650478-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-sweyla650478";
	exports.cssText = require("./sweyla650478-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
