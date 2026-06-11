import * as ace from "ace-builds";

const cssText = `
.ace-juicy .ace_gutter {
  background: #F1F1F1;
  color: rgb(121, 121, 121);
}

.ace-juicy .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-juicy {
  background-color: #F1F1F1;
  color: #000000;
}

.ace-juicy .ace_cursor {
  color: #000000;
}

.ace-juicy .ace_marker-layer .ace_selection {
  background: #A9C9FF;
}

.ace-juicy.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #F1F1F1;
  border-radius: 2px;
}

.ace-juicy .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-juicy .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-juicy .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-juicy .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-juicy .ace_marker-layer .ace_selected-word {
  border: 1px solid #A9C9FF;
}

.ace-juicy .ace_fold {
    background-color: #FF0000;
    border-color: #000000;
}
.ace-juicy .ace_keyword{color:#993300;}
.ace-juicy .ace_constant{color:#336699;}
.ace-juicy .ace_constant.ace_numeric{color:#33CC00;}
.ace-juicy .ace_support.ace_function{color:#CC0000;}
.ace-juicy .ace_support.ace_constant{color:#336699;}
.ace-juicy .ace_support.ace_class{color:#0099CC;}
.ace-juicy .ace_support.ace_type{color:#0099CC;}
.ace-juicy .ace_invalid{background-color:#FF0000;}
.ace-juicy .ace_string{color:#FF6600;}
.ace-juicy .ace_comment{font-style:italic;
color:#999999;}
.ace-juicy .ace_variable{color:#FF0000;}
.ace-juicy .ace_variable.ace_language{color:#0099CC;}
.ace-juicy .ace_entity.ace_other.ace_attribute-name{color:#993300;}
.ace-juicy .ace_entity.ace_name.ace_function{color:#FF0000;}
.ace-juicy .ace_entity.ace_name.ace_tag{color:#FF0000;}
`;

(ace as any).define("ace/theme/juicy-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/juicy", ["require", "exports", "module", "ace/theme/juicy-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-juicy";
	exports.cssText = require("./juicy-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
