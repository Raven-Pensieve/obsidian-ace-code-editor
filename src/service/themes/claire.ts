import * as ace from "ace-builds";

const cssText = `
.ace-claire .ace_gutter {
  background: #000000;
  color: rgb(116, 117, 116);
}

.ace-claire .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-claire {
  background-color: #000000;
  color: #E8E9E8;
}

.ace-claire .ace_cursor {
  color: #FFFFFF;
}

.ace-claire .ace_marker-layer .ace_selection {
  background: rgba(252, 249, 255, 0.88);
}

.ace-claire.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-claire .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-claire .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-claire .ace_marker-layer .ace_active-line {
  background: #9B9B00;
}

.ace-claire .ace_gutter-active-line {
  background-color: #9B9B00;
}

.ace-claire .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(252, 249, 255, 0.88);
}

.ace-claire .ace_fold {
    background-color: #4CCCFF;
    border-color: #E8E9E8;
}
.ace-claire .ace_keyword{color:#FF3190;}
.ace-claire .ace_constant{color:#339999;}
.ace-claire .ace_storage{color:#FF319F;}
.ace-claire .ace_string{color:#71ED15;}
.ace-claire .ace_string.ace_regexp{color:#CC8C2B;}
.ace-claire .ace_comment{color:#683E81;}
.ace-claire .ace_variable{color:#4CCCFF;}
.ace-claire .ace_variable.ace_parameter{font-style:italic;}
.ace-claire .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#99CC99;}
.ace-claire .ace_entity.ace_name.ace_function{color:#4CCCFF;}
`;

(ace as any).define("ace/theme/claire-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/claire", ["require", "exports", "module", "ace/theme/claire-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-claire";
	exports.cssText = require("./claire-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
