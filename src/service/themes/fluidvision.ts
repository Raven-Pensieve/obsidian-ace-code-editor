import * as ace from "ace-builds";

const cssText = `
.ace-fluidvision .ace_gutter {
  background: rgba(244, 244, 244, 0.95);
  color: rgb(122, 122, 122);
}

.ace-fluidvision .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-fluidvision {
  background-color: rgba(244, 244, 244, 0.95);
  color: #000000;
}

.ace-fluidvision .ace_cursor {
  color: #000000;
}

.ace-fluidvision .ace_marker-layer .ace_selection {
  background: #FFD793;
}

.ace-fluidvision.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(244, 244, 244, 0.95);
  border-radius: 2px;
}

.ace-fluidvision .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-fluidvision .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-fluidvision .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-fluidvision .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-fluidvision .ace_marker-layer .ace_selected-word {
  border: 1px solid #FFD793;
}

.ace-fluidvision .ace_fold {
    background-color: bold;
    border-color: #000000;
}
.ace-fluidvision .ace_keyword{font-weight:bold;
color:#5B91E1;}
.ace-fluidvision .ace_constant{font-style:italic;
color:#C5060B;}
.ace-fluidvision .ace_constant.ace_language{font-style:italic;
color:#585CF6;}
.ace-fluidvision .ace_constant.ace_numeric{font-weight:bold;
color:#C34F0A;}
.ace-fluidvision .ace_constant.ace_character.ace_escape{color:#26B31A;}
.ace-fluidvision .ace_support.ace_function{font-weight:bold;
color:#3C4C72;}
.ace-fluidvision .ace_support.ace_constant{font-weight:bold;
color:#619A1C;}
.ace-fluidvision .ace_support.ace_class{font-weight:bold;
color:#2D5579;}
.ace-fluidvision .ace_support.ace_type{font-weight:bold;
color:#2D5579;}
.ace-fluidvision .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-fluidvision .ace_string{color:#840E0B;}
.ace-fluidvision .ace_comment{color:#386F90;
background-color:rgba(221, 238, 254, 0.95);}
.ace-fluidvision .ace_variable{font-style:italic;
color:#20498D;}
.ace-fluidvision .ace_variable.ace_parameter{font-style:italic;}
.ace-fluidvision .ace_meta.ace_tag{color:#1C3981;}
.ace-fluidvision .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#000000;}
.ace-fluidvision .ace_entity.ace_name.ace_function{font-weight:bold;
color:#1B4B9D;}
.ace-fluidvision .ace_entity.ace_name.ace_tag{font-weight:bold;
color:#001D56;}
.ace-fluidvision .ace_markup.ace_heading{font-weight:bold;
color:#0C07FF;}
.ace-fluidvision .ace_markup.ace_list{color:#B90690;}
`;

ace.define("ace/theme/fluidvision-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/fluidvision", ["require", "exports", "module", "ace/theme/fluidvision-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-fluidvision";
	exports.cssText = require("./fluidvision-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
