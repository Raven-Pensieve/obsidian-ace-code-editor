import * as ace from "ace-builds";

const cssText = `
.ace-espresso .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-espresso .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-espresso {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-espresso .ace_cursor {
  color: #000000;
}

.ace-espresso .ace_marker-layer .ace_selection {
  background: #80C7FF;
}

.ace-espresso.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-espresso .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-espresso .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-espresso .ace_marker-layer .ace_active-line {
  background: #C1E2F8;
}

.ace-espresso .ace_gutter-active-line {
  background-color: #C1E2F8;
}

.ace-espresso .ace_marker-layer .ace_selected-word {
  border: 1px solid #80C7FF;
}

.ace-espresso .ace_fold {
    background-color: #4F9FD0;
    border-color: #000000;
}
.ace-espresso .ace_keyword{font-weight:bold;
color:#2F6F9F;
background-color:#F5FAFF;}
.ace-espresso .ace_constant{font-weight:bold;
color:#CF4F5F;}
.ace-espresso .ace_constant.ace_language{font-weight:bold;
color:#0B51A6;}
.ace-espresso .ace_constant.ace_numeric{font-weight:bold;
color:#CF4F5F;}
.ace-espresso .ace_constant.ace_character.ace_escape{color:#000000;
background-color:#FFF0F0;}
.ace-espresso .ace_support{font-weight:bold;
color:#2F6F9F;}
.ace-espresso .ace_support.ace_function{font-weight:bold;
color:#D71707;}
.ace-espresso .ace_support.ace_type{color:#0B51A6;}
.ace-espresso .ace_storage{font-weight:bold;
color:#2F6F9F;
background-color:#F5FAFF;}
.ace-espresso .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-espresso .ace_string{color:#CF4F5F;
background-color:#FFF0F0;}
.ace-espresso .ace_comment{font-style:italic;
color:#AAAAAA;}
.ace-espresso .ace_variable{font-weight:bold;
color:#000000;}
.ace-espresso .ace_meta.ace_tag{color:#000000;}
.ace-espresso .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#4F9FD0;}
.ace-espresso .ace_entity.ace_name.ace_function{color:#4F9FD0;}
.ace-espresso .ace_entity.ace_name{color:#CF4F5F;}
.ace-espresso .ace_entity.ace_name.ace_tag{color:#2F6F9F;
background-color:#F5FAFF;}
`;

ace.define("ace/theme/espresso-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/espresso", ["require", "exports", "module", "ace/theme/espresso-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-espresso";
	exports.cssText = require("./espresso-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
