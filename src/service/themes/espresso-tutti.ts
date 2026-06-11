import * as ace from "ace-builds";

const cssText = `
.ace-espresso-tutti .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-espresso-tutti .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-espresso-tutti {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-espresso-tutti .ace_cursor {
  color: #000000;
}

.ace-espresso-tutti .ace_marker-layer .ace_selection {
  background: #80C7FF;
}

.ace-espresso-tutti.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-espresso-tutti .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-espresso-tutti .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-espresso-tutti .ace_marker-layer .ace_active-line {
  background: #C1E2F8;
}

.ace-espresso-tutti .ace_gutter-active-line {
  background-color: #C1E2F8;
}

.ace-espresso-tutti .ace_marker-layer .ace_selected-word {
  border: 1px solid #80C7FF;
}

.ace-espresso-tutti .ace_fold {
    background-color: #3A1D72;
    border-color: #000000;
}
.ace-espresso-tutti .ace_keyword{color:#2F6F9F;
background-color:#F4FAFF;}
.ace-espresso-tutti .ace_constant{color:#7653C1;
background-color:#F3F2FF;}
.ace-espresso-tutti .ace_constant.ace_language{color:#7653C2;
background-color:#F3F2FF;}
.ace-espresso-tutti .ace_constant.ace_numeric{color:#CF4F5F;}
.ace-espresso-tutti .ace_constant.ace_character.ace_escape{color:#000000;
background-color:#E8FFD5;}
.ace-espresso-tutti .ace_support{color:#4E279A;}
.ace-espresso-tutti .ace_support.ace_function{color:#D71707;}
.ace-espresso-tutti .ace_support.ace_type{color:#0B51A6;}
.ace-espresso-tutti .ace_storage{color:#2F6F9F;
background-color:#F4FAFF;}
.ace-espresso-tutti .ace_invalid{color:#F9F2CE;
background-color:#F93232;}
.ace-espresso-tutti .ace_string{color:#73B00A;
background-color:#FFFFFF;}
.ace-espresso-tutti .ace_comment{color:#AAAAAA;}
.ace-espresso-tutti .ace_variable{color:#7B8C4D;}
.ace-espresso-tutti .ace_meta.ace_tag{color:#4F9EEB;}
.ace-espresso-tutti .ace_entity.ace_other.ace_attribute-name{color:#4F9FCF;}
.ace-espresso-tutti .ace_entity.ace_name.ace_function{color:#3A1D72;}
.ace-espresso-tutti .ace_entity.ace_name{color:#D44950;}
.ace-espresso-tutti .ace_entity.ace_name.ace_tag{color:#2F6F9F;
background-color:#F5FAFF;}
`;

(ace as any).define("ace/theme/espresso-tutti-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/espresso-tutti", ["require", "exports", "module", "ace/theme/espresso-tutti-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-espresso-tutti";
	exports.cssText = require("./espresso-tutti-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
