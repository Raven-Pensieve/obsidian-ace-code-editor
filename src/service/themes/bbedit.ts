import * as ace from "ace-builds";

const cssText = `
.ace-bbedit .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-bbedit .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-bbedit {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-bbedit .ace_cursor {
  color: #000000;
}

.ace-bbedit .ace_marker-layer .ace_selection {
  background: #FFD420;
}

.ace-bbedit.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-bbedit .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-bbedit .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-bbedit .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-bbedit .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-bbedit .ace_marker-layer .ace_selected-word {
  border: 1px solid #FFD420;
}

.ace-bbedit .ace_fold {
    background-color: #0000A2;
    border-color: #000000;
}
.ace-bbedit .ace_keyword{color:#0000FF;}
.ace-bbedit .ace_constant{color:#C5060B;}
.ace-bbedit .ace_constant.ace_language{color:#004080;}
.ace-bbedit .ace_constant.ace_numeric{color:#FF0080;}
.ace-bbedit .ace_constant.ace_character.ace_escape{color:#33CC33;}
.ace-bbedit .ace_support.ace_function{color:#0000FF;}
.ace-bbedit .ace_support.ace_constant{color:#06960E;}
.ace-bbedit .ace_support.ace_class{color:#6D79DE;}
.ace-bbedit .ace_support.ace_type{color:#6D79DE;}
.ace-bbedit .ace_storage{color:#0000FF;}
.ace-bbedit .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-bbedit .ace_string{color:#FF0080;}
.ace-bbedit .ace_comment{color:#804000;}
.ace-bbedit .ace_variable{color:#0000A2;}
.ace-bbedit .ace_variable.ace_language{color:#006600;}
.ace-bbedit .ace_meta.ace_tag{color:#1C02FF;}
.ace-bbedit .ace_entity.ace_name.ace_function{color:#0000A2;}
.ace-bbedit .ace_markup.ace_heading{color:#0C07FF;}
.ace-bbedit .ace_markup.ace_list{color:#B90690;}
`;

(ace as any).define("ace/theme/bbedit-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/bbedit", ["require", "exports", "module", "ace/theme/bbedit-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-bbedit";
	exports.cssText = require("./bbedit-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
