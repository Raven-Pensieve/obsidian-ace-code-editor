import * as ace from "ace-builds";

const cssText = `
.ace-text-ex-machina .ace_gutter {
  background: #151515;
  color: rgb(126, 126, 126);
}

.ace-text-ex-machina .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-text-ex-machina {
  background-color: #151515;
  color: #E6E6E6;
}

.ace-text-ex-machina .ace_cursor {
  color: #F8F8F0;
}

.ace-text-ex-machina .ace_marker-layer .ace_selection {
  background: #666666;
}

.ace-text-ex-machina.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #151515;
  border-radius: 2px;
}

.ace-text-ex-machina .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-text-ex-machina .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #3B3A32;
}

.ace-text-ex-machina .ace_marker-layer .ace_active-line {
  background: #3E3D32;
}

.ace-text-ex-machina .ace_gutter-active-line {
  background-color: #3E3D32;
}

.ace-text-ex-machina .ace_marker-layer .ace_selected-word {
  border: 1px solid #666666;
}

.ace-text-ex-machina .ace_fold {
    background-color: #CCFF66;
    border-color: #E6E6E6;
}
.ace-text-ex-machina .ace_keyword{color:#777CB2;}
.ace-text-ex-machina .ace_constant.ace_language{color:#AE81FF;}
.ace-text-ex-machina .ace_constant.ace_numeric{color:#AE81FF;}
.ace-text-ex-machina .ace_constant.ace_character{color:#AE81FF;}
.ace-text-ex-machina .ace_constant.ace_other{color:#AE81FF;}
.ace-text-ex-machina .ace_support.ace_function{color:rgba(128, 255, 0, 0.50);}
.ace-text-ex-machina .ace_support.ace_constant{color:#FFFFFF;}
.ace-text-ex-machina .ace_support.ace_class{font-style:italic;
color:#3FE200;}
.ace-text-ex-machina .ace_support.ace_type{font-style:italic;
color:#3FE200;}
.ace-text-ex-machina .ace_storage{color:#323464;}
.ace-text-ex-machina .ace_storage.ace_type{color:#656797;}
.ace-text-ex-machina .ace_invalid{text-decoration:underline;
font-style:italic;
color:#F8F8F0;
background-color:#0000FF;}
.ace-text-ex-machina .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#F8F8F0;
background-color:#0080FF;}
.ace-text-ex-machina .ace_string{color:#66CCFF;}
.ace-text-ex-machina .ace_comment{color:#333333;}
.ace-text-ex-machina .ace_variable{color:#FFFFFF;}
.ace-text-ex-machina .ace_variable.ace_parameter{font-style:italic;
color:rgba(204, 255, 102, 0.50);}
.ace-text-ex-machina .ace_entity.ace_other.ace_attribute-name{color:#777CB2;}
.ace-text-ex-machina .ace_entity.ace_name.ace_function{color:#CCFF66;}
.ace-text-ex-machina .ace_entity.ace_name.ace_tag{color:#323464;}
`;

(ace as any).define("ace/theme/text-ex-machina-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/text-ex-machina", ["require", "exports", "module", "ace/theme/text-ex-machina-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-text-ex-machina";
	exports.cssText = require("./text-ex-machina-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
