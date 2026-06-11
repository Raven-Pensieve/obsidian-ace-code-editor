import * as ace from "ace-builds";

const cssText = `
.ace-upstream-vibrant .ace_gutter {
  background: rgba(0, 0, 0, 0.85);
  color: rgb(113, 123, 128);
}

.ace-upstream-vibrant .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-upstream-vibrant {
  background-color: rgba(0, 0, 0, 0.85);
  color: #E2F6FF;
}

.ace-upstream-vibrant .ace_cursor {
  color: #E2F6FF;
}

.ace-upstream-vibrant .ace_marker-layer .ace_selection {
  background: rgba(179, 63, 67, 0.55);
}

.ace-upstream-vibrant.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.85);
  border-radius: 2px;
}

.ace-upstream-vibrant .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-upstream-vibrant .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #222222;
}

.ace-upstream-vibrant .ace_marker-layer .ace_active-line {
  background: #181818;
}

.ace-upstream-vibrant .ace_gutter-active-line {
  background-color: #181818;
}

.ace-upstream-vibrant .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(179, 63, 67, 0.55);
}

.ace-upstream-vibrant .ace_fold {
    background-color: #EEEEEE;
    border-color: #E2F6FF;
}
.ace-upstream-vibrant .ace_keyword{font-weight:bold;
color:#2499DA;}
.ace-upstream-vibrant .ace_keyword.ace_operator{color:#EEEEEE;}
.ace-upstream-vibrant .ace_constant{color:#9CFFFF;}
.ace-upstream-vibrant .ace_constant.ace_language{color:#FF6C60;}
.ace-upstream-vibrant .ace_constant.ace_numeric{color:#FF73FD;}
.ace-upstream-vibrant .ace_constant.ace_character.ace_escape{color:#E2F6F2;}
.ace-upstream-vibrant .ace_support.ace_function{color:#E1F5B1;}
.ace-upstream-vibrant .ace_support.ace_constant{color:#B2D72C;}
.ace-upstream-vibrant .ace_support.ace_class{color:#FFF7B0;}
.ace-upstream-vibrant .ace_support.ace_type{color:#FFF7B0;}
.ace-upstream-vibrant .ace_storage{font-weight:bold;
color:#2499DA;}
.ace-upstream-vibrant .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-upstream-vibrant .ace_string{color:#B2D72C;}
.ace-upstream-vibrant .ace_comment{font-style:italic;
font-weight:bold;
color:#4E4E4E;}
.ace-upstream-vibrant .ace_variable{color:#9CFFFF;}
.ace-upstream-vibrant .ace_variable.ace_language{color:#FF6C60;}
.ace-upstream-vibrant .ace_variable.ace_parameter{font-style:italic;}
.ace-upstream-vibrant .ace_meta.ace_tag{color:#2499DA;}
.ace-upstream-vibrant .ace_entity.ace_other.ace_attribute-name{color:#E1F5B1;}
.ace-upstream-vibrant .ace_entity.ace_name.ace_function{color:#EEEEEE;}
.ace-upstream-vibrant .ace_entity.ace_name.ace_tag{color:#2499DA;}
.ace-upstream-vibrant .ace_markup.ace_heading{color:#4266A0;}
.ace-upstream-vibrant .ace_markup.ace_list{color:#B90690;}
`;

(ace as any).define("ace/theme/upstream-vibrant-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/upstream-vibrant", ["require", "exports", "module", "ace/theme/upstream-vibrant-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-upstream-vibrant";
	exports.cssText = require("./upstream-vibrant-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
