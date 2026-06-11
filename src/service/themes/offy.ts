import * as ace from "ace-builds";

const cssText = `
.ace-offy .ace_gutter {
  background: rgba(0, 0, 46, 0.80);
  color: rgb(128, 128, 151);
}

.ace-offy .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-offy {
  background-color: rgba(0, 0, 46, 0.80);
  color: #FFFFFF;
}

.ace-offy .ace_cursor {
  color: #FF1C97;
}

.ace-offy .ace_marker-layer .ace_selection {
  background: #535009;
}

.ace-offy.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 46, 0.80);
  border-radius: 2px;
}

.ace-offy .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-offy .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #947991;
}

.ace-offy .ace_marker-layer .ace_active-line {
  background: #000000;
}

.ace-offy .ace_gutter-active-line {
  background-color: #000000;
}

.ace-offy .ace_marker-layer .ace_selected-word {
  border: 1px solid #535009;
}

.ace-offy .ace_fold {
    background-color: #FF6609;
    border-color: #FFFFFF;
}
.ace-offy .ace_keyword{color:#FF0205;}
.ace-offy .ace_constant{color:#BC83FC;}
.ace-offy .ace_constant.ace_language{color:#FF57FF;}
.ace-offy .ace_constant.ace_numeric{color:#7EAAC0;}
.ace-offy .ace_constant.ace_character.ace_escape{color:#ACDB85;}
.ace-offy .ace_support.ace_function{color:#FCFF00;}
.ace-offy .ace_support.ace_constant{color:#5CD9EB;}
.ace-offy .ace_support.ace_class{color:#8B62E1;}
.ace-offy .ace_support.ace_type{color:#8B62E1;}
.ace-offy .ace_storage{color:#FF0205;}
.ace-offy .ace_invalid{color:#FF0AF1;}
.ace-offy .ace_string{color:#339900;}
.ace-offy .ace_string.ace_regexp{color:#60FF2E;}
.ace-offy .ace_comment{font-style:italic;
font-weight:bold;
color:rgba(87, 116, 120, 0.80);}
.ace-offy .ace_variable{color:#FF6609;}
.ace-offy .ace_variable.ace_language{color:#007EC9;}
.ace-offy .ace_variable.ace_parameter{color:#A6FFFF;}
.ace-offy .ace_meta.ace_tag{color:#FFFF33;}
.ace-offy .ace_entity.ace_other.ace_attribute-name{color:#3293E7;}
.ace-offy .ace_entity.ace_name.ace_function{color:#FF6609;}
.ace-offy .ace_entity.ace_name.ace_tag{color:#FFFF33;}
.ace-offy .ace_markup.ace_heading{color:#1645FF;}
.ace-offy .ace_markup.ace_list{color:#B90690;}
`;

(ace as any).define("ace/theme/offy-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/offy", ["require", "exports", "module", "ace/theme/offy-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-offy";
	exports.cssText = require("./offy-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
