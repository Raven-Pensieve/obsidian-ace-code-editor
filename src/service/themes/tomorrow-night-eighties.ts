import * as ace from "ace-builds";

const cssText = `
.ace-tomorrow-night-eighties .ace_gutter {
  background: #2D2D2D;
  color: rgb(125, 125, 125);
}

.ace-tomorrow-night-eighties .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-tomorrow-night-eighties {
  background-color: #2D2D2D;
  color: #CCCCCC;
}

.ace-tomorrow-night-eighties .ace_cursor {
  color: #CCCCCC;
}

.ace-tomorrow-night-eighties .ace_marker-layer .ace_selection {
  background: #515151;
}

.ace-tomorrow-night-eighties.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #2D2D2D;
  border-radius: 2px;
}

.ace-tomorrow-night-eighties .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-tomorrow-night-eighties .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #6A6A6A;
}

.ace-tomorrow-night-eighties .ace_marker-layer .ace_active-line {
  background: #393939;
}

.ace-tomorrow-night-eighties .ace_gutter-active-line {
  background-color: #393939;
}

.ace-tomorrow-night-eighties .ace_marker-layer .ace_selected-word {
  border: 1px solid #515151;
}

.ace-tomorrow-night-eighties .ace_fold {
    background-color: #99CCCC;
    border-color: #CCCCCC;
}
.ace-tomorrow-night-eighties .ace_keyword{color:#CC99CC;}
.ace-tomorrow-night-eighties .ace_keyword.ace_operator{color:#66CCCC;}
.ace-tomorrow-night-eighties .ace_keyword.ace_other.ace_unit{color:#F99157;}
.ace-tomorrow-night-eighties .ace_constant.ace_language{color:#F99157;}
.ace-tomorrow-night-eighties .ace_constant.ace_numeric{color:#F99157;}
.ace-tomorrow-night-eighties .ace_constant.ace_character{color:#F99157;}
.ace-tomorrow-night-eighties .ace_constant.ace_other{color:#CCCCCC;}
.ace-tomorrow-night-eighties .ace_support.ace_function{color:#99CCCC;}
.ace-tomorrow-night-eighties .ace_support.ace_constant{color:#F99157;}
.ace-tomorrow-night-eighties .ace_support.ace_class{color:#FFCC66;}
.ace-tomorrow-night-eighties .ace_support.ace_type{color:#FFCC66;}
.ace-tomorrow-night-eighties .ace_storage{color:#CC99CC;}
.ace-tomorrow-night-eighties .ace_storage.ace_type{color:#CC99CC;}
.ace-tomorrow-night-eighties .ace_invalid{color:#CDCDCD;
background-color:#F2777A;}
.ace-tomorrow-night-eighties .ace_invalid.ace_deprecated{color:#CDCDCD;
background-color:#CC99CC;}
.ace-tomorrow-night-eighties .ace_string{color:#99CC99;}
.ace-tomorrow-night-eighties .ace_comment{color:#999999;}
.ace-tomorrow-night-eighties .ace_variable{color:#F2777A;}
.ace-tomorrow-night-eighties .ace_variable.ace_parameter{color:#F99157;}
.ace-tomorrow-night-eighties .ace_entity.ace_other.ace_attribute-name{color:#F2777A;}
.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_function{color:#99CCCC;}
.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_tag{color:#F2777A;}
.ace-tomorrow-night-eighties .ace_markup.ace_heading{color:#99CC99;}
`;

(ace as any).define("ace/theme/tomorrow-night-eighties-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/tomorrow-night-eighties", ["require", "exports", "module", "ace/theme/tomorrow-night-eighties-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-tomorrow-night-eighties";
	exports.cssText = require("./tomorrow-night-eighties-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
