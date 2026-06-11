import * as ace from "ace-builds";

const cssText = `
.ace-codainkdeep .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-codainkdeep .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-codainkdeep {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-codainkdeep .ace_cursor {
  color: #000000;
}

.ace-codainkdeep .ace_marker-layer .ace_selection {
  background: #A7CAFF;
}

.ace-codainkdeep.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-codainkdeep .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-codainkdeep .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-codainkdeep .ace_marker-layer .ace_active-line {
  background: #EEF1F5;
}

.ace-codainkdeep .ace_gutter-active-line {
  background-color: #EEF1F5;
}

.ace-codainkdeep .ace_marker-layer .ace_selected-word {
  border: 1px solid #A7CAFF;
}

.ace-codainkdeep .ace_fold {
    background-color: #D20037;
    border-color: #000000;
}
.ace-codainkdeep .ace_keyword{color:#008DE2;}
.ace-codainkdeep .ace_constant.ace_language{color:#D20037;}
.ace-codainkdeep .ace_constant.ace_numeric{color:#0F20F6;}
.ace-codainkdeep .ace_constant.ace_character{color:#0E00A7;}
.ace-codainkdeep .ace_constant.ace_other{color:#0E00A7;}
.ace-codainkdeep .ace_support.ace_function{color:#728F3A;}
.ace-codainkdeep .ace_storage{color:#AA2063;}
.ace-codainkdeep .ace_invalid{color:#EB291C;}
.ace-codainkdeep .ace_string{color:#EA8500;}
.ace-codainkdeep .ace_comment{font-style:italic;
color:#ADADAD;}
.ace-codainkdeep .ace_variable{color:#D20037;}
.ace-codainkdeep .ace_variable.ace_language{color:#1892FF;}
.ace-codainkdeep .ace_variable.ace_parameter{color:#053369;}
.ace-codainkdeep .ace_entity.ace_other.ace_attribute-name{color:#525F3C;}
.ace-codainkdeep .ace_entity.ace_name.ace_function{color:#D20037;}
.ace-codainkdeep .ace_entity.ace_name.ace_tag{color:#525F3C;}
`;

(ace as any).define("ace/theme/codainkdeep-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/codainkdeep", ["require", "exports", "module", "ace/theme/codainkdeep-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-codainkdeep";
	exports.cssText = require("./codainkdeep-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
