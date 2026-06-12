import * as ace from "ace-builds";

const cssText = `
.ace-mac-classic .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-mac-classic .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-mac-classic {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-mac-classic .ace_cursor {
  color: #000000;
}

.ace-mac-classic .ace_marker-layer .ace_selection {
  background: rgba(77, 151, 255, 0.33);
}

.ace-mac-classic.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-mac-classic .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-mac-classic .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-mac-classic .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-mac-classic .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-mac-classic .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(77, 151, 255, 0.33);
}

.ace-mac-classic .ace_fold {
    background-color: bold;
    border-color: #000000;
}
.ace-mac-classic .ace_keyword{font-weight:bold;
color:#0000FF;}
.ace-mac-classic .ace_constant{font-weight:bold;
color:#C5060B;}
.ace-mac-classic .ace_constant.ace_language{font-weight:bold;
color:#585CF6;}
.ace-mac-classic .ace_constant.ace_numeric{color:#0000CD;}
.ace-mac-classic .ace_constant.ace_character.ace_escape{color:#26B31A;}
.ace-mac-classic .ace_support.ace_function{font-weight:bold;
color:#3C4C72;}
.ace-mac-classic .ace_support.ace_constant{font-weight:bold;
color:#06960E;}
.ace-mac-classic .ace_support.ace_class{font-weight:bold;
color:#6D79DE;}
.ace-mac-classic .ace_support.ace_type{font-weight:bold;
color:#6D79DE;}
.ace-mac-classic .ace_storage{font-weight:bold;
color:#0000FF;}
.ace-mac-classic .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-mac-classic .ace_string{color:#036A07;}
.ace-mac-classic .ace_comment{font-style:italic;
color:#0066FF;}
.ace-mac-classic .ace_variable{font-weight:bold;
color:#0000A2;}
.ace-mac-classic .ace_variable.ace_language{color:#318495;}
.ace-mac-classic .ace_variable.ace_parameter{font-style:italic;}
.ace-mac-classic .ace_meta.ace_tag{color:#1C02FF;}
.ace-mac-classic .ace_entity.ace_other.ace_attribute-name{font-style:italic;}
.ace-mac-classic .ace_entity.ace_name.ace_function{font-weight:bold;
color:#0000A2;}
.ace-mac-classic .ace_entity.ace_name.ace_tag{font-weight:bold;}
.ace-mac-classic .ace_markup.ace_heading{font-weight:bold;
color:#0C07FF;}
.ace-mac-classic .ace_markup.ace_list{color:#B90690;}
`;

ace.define("ace/theme/mac-classic-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/mac-classic", ["require", "exports", "module", "ace/theme/mac-classic-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-mac-classic";
	exports.cssText = require("./mac-classic-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
