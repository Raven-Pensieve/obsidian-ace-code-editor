import * as ace from "ace-builds";

const cssText = `
.ace-classic-modified .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-classic-modified .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-classic-modified {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-classic-modified .ace_cursor {
  color: #000000;
}

.ace-classic-modified .ace_marker-layer .ace_selection {
  background: rgba(77, 151, 255, 0.33);
}

.ace-classic-modified.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-classic-modified .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-classic-modified .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-classic-modified .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-classic-modified .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-classic-modified .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(77, 151, 255, 0.33);
}

.ace-classic-modified .ace_fold {
    background-color: bold;
    border-color: #000000;
}
.ace-classic-modified .ace_keyword{font-weight:bold;
color:#0000FF;}
.ace-classic-modified .ace_constant{color:#000000;}
.ace-classic-modified .ace_constant.ace_language{font-weight:bold;
color:#000CFF;}
.ace-classic-modified .ace_constant.ace_numeric{color:#FF0000;}
.ace-classic-modified .ace_constant.ace_character.ace_escape{color:#33CC33;}
.ace-classic-modified .ace_support.ace_function{color:#990099;}
.ace-classic-modified .ace_support.ace_constant{color:#990099;}
.ace-classic-modified .ace_support.ace_class{color:#CC6633;}
.ace-classic-modified .ace_support.ace_type{color:#CC6633;}
.ace-classic-modified .ace_storage{font-weight:bold;
color:#0000FF;}
.ace-classic-modified .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-classic-modified .ace_string{color:#666666;
background-color:#FFFFFF;}
.ace-classic-modified .ace_comment{font-style:italic;
color:#CCCCCC;}
.ace-classic-modified .ace_variable{font-weight:bold;
color:#000099;}
.ace-classic-modified .ace_variable.ace_language{color:#318495;}
.ace-classic-modified .ace_meta.ace_tag{color:#1C02FF;}
.ace-classic-modified .ace_entity.ace_other.ace_attribute-name{font-style:italic;}
.ace-classic-modified .ace_entity.ace_name.ace_function{font-weight:bold;
color:#000099;}
.ace-classic-modified .ace_entity.ace_name.ace_tag{font-weight:bold;}
.ace-classic-modified .ace_markup.ace_heading{font-weight:bold;
color:#0C07FF;}
.ace-classic-modified .ace_markup.ace_list{color:#B90690;}
`;

(ace as any).define("ace/theme/classic-modified-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/classic-modified", ["require", "exports", "module", "ace/theme/classic-modified-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-classic-modified";
	exports.cssText = require("./classic-modified-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
