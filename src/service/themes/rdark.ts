import * as ace from "ace-builds";

const cssText = `
.ace-rdark .ace_gutter {
  background: #1B2426;
  color: rgb(106, 113, 110);
}

.ace-rdark .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-rdark {
  background-color: #1B2426;
  color: #B9BDB6;
}

.ace-rdark .ace_cursor {
  color: #FFFFFF;
}

.ace-rdark .ace_marker-layer .ace_selection {
  background: rgba(224, 232, 255, 0.40);
}

.ace-rdark.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #1B2426;
  border-radius: 2px;
}

.ace-rdark .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-rdark .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-rdark .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.44);
}

.ace-rdark .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.44);
}

.ace-rdark .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(224, 232, 255, 0.40);
}

.ace-rdark .ace_fold {
    background-color: #FFAA3E;
    border-color: #B9BDB6;
}
.ace-rdark .ace_keyword{color:#5BA1CF;}
.ace-rdark .ace_constant.ace_language{color:#5CE638;}
.ace-rdark .ace_constant.ace_numeric{color:#5CE638;}
.ace-rdark .ace_constant.ace_character{color:#FFFFFF;}
.ace-rdark .ace_constant.ace_other{color:#FFFFFF;}
.ace-rdark .ace_storage{color:#FFFFFF;}
.ace-rdark .ace_string{color:#5CE638;}
.ace-rdark .ace_comment{color:#646763;}
.ace-rdark .ace_variable{color:#FFAA3E;}
.ace-rdark .ace_variable.ace_language{color:#FFFFFF;}
.ace-rdark .ace_variable.ace_parameter{color:#FFFFFF;}
.ace-rdark .ace_entity.ace_other.ace_attribute-name{color:#878A85;}
.ace-rdark .ace_entity.ace_name.ace_function{color:#FFAA3E;}
.ace-rdark .ace_entity.ace_name.ace_tag{color:#FFFFFF;}
`;

(ace as any).define("ace/theme/rdark-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/rdark", ["require", "exports", "module", "ace/theme/rdark-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-rdark";
	exports.cssText = require("./rdark-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
