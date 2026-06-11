import * as ace from "ace-builds";

const cssText = `
.ace-happy-happy-joy-joy-2 .ace_gutter {
  background: #E5E5E5;
  color: rgb(136, 136, 136);
}

.ace-happy-happy-joy-joy-2 .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-happy-happy-joy-joy-2 {
  background-color: #E5E5E5;
  color: #2A2A2A;
}

.ace-happy-happy-joy-joy-2 .ace_cursor {
  color: #000000;
}

.ace-happy-happy-joy-joy-2 .ace_marker-layer .ace_selection {
  background: rgba(240, 201, 54, 0.50);
}

.ace-happy-happy-joy-joy-2.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #E5E5E5;
  border-radius: 2px;
}

.ace-happy-happy-joy-joy-2 .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-happy-happy-joy-joy-2 .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BBAEFF;
}

.ace-happy-happy-joy-joy-2 .ace_marker-layer .ace_active-line {
  background: rgba(242, 248, 254, 0.45);
}

.ace-happy-happy-joy-joy-2 .ace_gutter-active-line {
  background-color: rgba(242, 248, 254, 0.45);
}

.ace-happy-happy-joy-joy-2 .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(240, 201, 54, 0.50);
}

.ace-happy-happy-joy-joy-2 .ace_fold {
    background-color: underline;
    border-color: #2A2A2A;
}
.ace-happy-happy-joy-joy-2 .ace_keyword.ace_operator{color:#2060A0;}
.ace-happy-happy-joy-joy-2 .ace_keyword.ace_other.ace_unit{color:#3C8F93;}
.ace-happy-happy-joy-joy-2 .ace_constant{text-decoration:underline;
font-weight:bold;
color:#E12B1F;}
.ace-happy-happy-joy-joy-2 .ace_constant.ace_language{text-decoration:underline;
font-weight:bold;
color:#376FC3;}
.ace-happy-happy-joy-joy-2 .ace_constant.ace_numeric{text-decoration:underline;
font-weight:bold;
color:#4F9B00;}
.ace-happy-happy-joy-joy-2 .ace_constant.ace_character{text-decoration:underline;
font-weight:bold;
color:#AE81FF;}
.ace-happy-happy-joy-joy-2 .ace_constant.ace_character.ace_escape{font-weight:bold;
color:#000000;
background-color:rgba(251, 0, 22, 0.50);}
.ace-happy-happy-joy-joy-2 .ace_constant.ace_character.ace_entity{text-decoration:underline;
font-weight:bold;
color:#2A9A66;}
.ace-happy-happy-joy-joy-2 .ace_support.ace_function{font-weight:bold;}
.ace-happy-happy-joy-joy-2 .ace_support.ace_constant{text-decoration:underline;
font-weight:bold;
color:#E12B1F;}
.ace-happy-happy-joy-joy-2 .ace_support.ace_class{font-weight:bold;
color:#2970CA;}
.ace-happy-happy-joy-joy-2 .ace_support.ace_type{color:#A08000;}
.ace-happy-happy-joy-joy-2 .ace_storage.ace_type{color:#A08000;}
.ace-happy-happy-joy-joy-2 .ace_invalid{font-weight:bold;
color:#FFFFFF;
background-color:#990000;}
.ace-happy-happy-joy-joy-2 .ace_invalid.ace_illegal{font-weight:bold;
color:#FFFFFF;
background-color:#562D56;}
.ace-happy-happy-joy-joy-2 .ace_invalid.ace_deprecated{font-weight:bold;
color:#5B62B5;
background-color:#AE81FF;}
.ace-happy-happy-joy-joy-2 .ace_string{font-style:italic;
font-weight:bold;
color:#901A12;
background-color:#DFC8C7;}
.ace-happy-happy-joy-joy-2 .ace_string.ace_regexp{font-style:italic;
font-weight:bold;
color:#FFFFFF;
background-color:#CC3E37;}
.ace-happy-happy-joy-joy-2 .ace_comment{font-style:italic;
color:#858B7C;}
.ace-happy-happy-joy-joy-2 .ace_variable{font-weight:bold;
color:#54AC3B;}
.ace-happy-happy-joy-joy-2 .ace_entity.ace_other.ace_attribute-name{text-decoration:underline;
color:#D2261B;}
.ace-happy-happy-joy-joy-2 .ace_entity.ace_name.ace_function{text-decoration:underline;
font-weight:bold;
color:#5C3566;}
.ace-happy-happy-joy-joy-2 .ace_entity.ace_name.ace_tag{text-decoration:underline;
font-weight:bold;
color:#519A58;}
.ace-happy-happy-joy-joy-2 .ace_markup.ace_heading{font-weight:bold;
color:#4266A0;}
.ace-happy-happy-joy-joy-2 .ace_markup.ace_list{color:#B90690;}
`;

(ace as any).define("ace/theme/happy-happy-joy-joy-2-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/happy-happy-joy-joy-2", ["require", "exports", "module", "ace/theme/happy-happy-joy-joy-2-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-happy-happy-joy-joy-2";
	exports.cssText = require("./happy-happy-joy-joy-2-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
