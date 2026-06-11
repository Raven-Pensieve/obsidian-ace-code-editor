import * as ace from "ace-builds";

const cssText = `
.ace-tango .ace_gutter {
  background: #FFFFFF;
  color: rgb(152, 154, 155);
}

.ace-tango .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-tango {
  background-color: #FFFFFF;
  color: #303436;
}

.ace-tango .ace_cursor {
  color: #000000;
}

.ace-tango .ace_marker-layer .ace_selection {
  background: rgba(77, 151, 255, 0.33);
}

.ace-tango.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-tango .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-tango .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-tango .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.059);
}

.ace-tango .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.059);
}

.ace-tango .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(77, 151, 255, 0.33);
}

.ace-tango .ace_fold {
    background-color: #5C3566;
    border-color: #303436;
}
.ace-tango .ace_keyword{font-weight:bold;
color:#303436;}
.ace-tango .ace_constant{color:#194A87;}
.ace-tango .ace_constant.ace_language{color:#194A87;}
.ace-tango .ace_constant.ace_numeric{color:#4F9B00;}
.ace-tango .ace_constant.ace_character.ace_escape{color:#A70000;}
.ace-tango .ace_support.ace_function{color:#3C4C72;}
.ace-tango .ace_support.ace_constant{color:#529C08;}
.ace-tango .ace_support.ace_class{color:#D15B00;}
.ace-tango .ace_support.ace_type{color:#D15B00;}
.ace-tango .ace_storage{font-weight:bold;
color:#303436;}
.ace-tango .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-tango .ace_string{color:#A70000;}
.ace-tango .ace_comment{font-style:italic;
color:#555753;}
.ace-tango .ace_variable{color:#5C3566;}
.ace-tango .ace_variable.ace_language{color:#194A87;}
.ace-tango .ace_variable.ace_parameter{font-style:italic;}
.ace-tango .ace_meta.ace_tag{color:#4266A0;}
.ace-tango .ace_entity.ace_other.ace_attribute-name{font-style:italic;}
.ace-tango .ace_entity.ace_name.ace_function{color:#5C3566;}
.ace-tango .ace_markup.ace_heading{color:#4266A0;}
.ace-tango .ace_markup.ace_list{color:#B90690;}
`;

(ace as any).define("ace/theme/tango-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/tango", ["require", "exports", "module", "ace/theme/tango-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-tango";
	exports.cssText = require("./tango-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
