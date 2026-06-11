import * as ace from "ace-builds";

const cssText = `
.ace-close-to-the-sea .ace_gutter {
  background: #172024;
  color: rgb(139, 144, 143);
}

.ace-close-to-the-sea .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-close-to-the-sea {
  background-color: #172024;
  color: #FFFFFA;
}

.ace-close-to-the-sea .ace_cursor {
  color: #FFFFFF;
}

.ace-close-to-the-sea .ace_marker-layer .ace_selection {
  background: #B5A9AD;
}

.ace-close-to-the-sea.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #172024;
  border-radius: 2px;
}

.ace-close-to-the-sea .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-close-to-the-sea .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #FAFAF5;
}

.ace-close-to-the-sea .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-close-to-the-sea .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-close-to-the-sea .ace_marker-layer .ace_selected-word {
  border: 1px solid #B5A9AD;
}

.ace-close-to-the-sea .ace_fold {
    background-color: #EA511B;
    border-color: #FFFFFA;
}
.ace-close-to-the-sea .ace_keyword{font-weight:bold;
color:#5F919A;}
.ace-close-to-the-sea .ace_constant.ace_numeric{color:#B8252A;}
.ace-close-to-the-sea .ace_constant.ace_character{color:#AED4DC;}
.ace-close-to-the-sea .ace_constant.ace_other{color:#AED4DC;}
.ace-close-to-the-sea .ace_support.ace_function{color:#E1DA69;}
.ace-close-to-the-sea .ace_support.ace_constant{color:#FF005C;}
.ace-close-to-the-sea .ace_support.ace_class{color:#54BA42;}
.ace-close-to-the-sea .ace_support.ace_type{color:#54BA42;}
.ace-close-to-the-sea .ace_storage{color:#FFFFFA;}
.ace-close-to-the-sea .ace_string{color:#3A81C8;}
.ace-close-to-the-sea .ace_comment{font-style:italic;
color:#78B2C7;}
.ace-close-to-the-sea .ace_variable{color:#EA511B;}
.ace-close-to-the-sea .ace_variable.ace_language{color:#D0BFAF;}
.ace-close-to-the-sea .ace_variable.ace_parameter{color:#C0EFFE;}
.ace-close-to-the-sea .ace_entity.ace_name.ace_function{color:#EA511B;}
`;

(ace as any).define("ace/theme/close_to_the_sea-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/close_to_the_sea", ["require", "exports", "module", "ace/theme/close_to_the_sea-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-close-to-the-sea";
	exports.cssText = require("./close_to_the_sea-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
