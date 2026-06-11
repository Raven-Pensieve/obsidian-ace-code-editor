import * as ace from "ace-builds";

const cssText = `
.ace-vibrant-tango .ace_gutter {
  background: #191D1E;
  color: rgb(140, 142, 143);
}

.ace-vibrant-tango .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-vibrant-tango {
  background-color: #191D1E;
  color: #FFFFFF;
}

.ace-vibrant-tango .ace_cursor {
  color: #FBEC50;
}

.ace-vibrant-tango .ace_marker-layer .ace_selection {
  background: #434441;
}

.ace-vibrant-tango.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #191D1E;
  border-radius: 2px;
}

.ace-vibrant-tango .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-vibrant-tango .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-vibrant-tango .ace_marker-layer .ace_active-line {
  background: #131413;
}

.ace-vibrant-tango .ace_gutter-active-line {
  background-color: #131413;
}

.ace-vibrant-tango .ace_marker-layer .ace_selected-word {
  border: 1px solid #434441;
}

.ace-vibrant-tango .ace_fold {
    background-color: #FBEB50;
    border-color: #FFFFFF;
}
.ace-vibrant-tango .ace_keyword{color:#F27709;}
.ace-vibrant-tango .ace_constant{color:#739FCF;}
.ace-vibrant-tango .ace_string{color:#8DE635;}
.ace-vibrant-tango .ace_string.ace_regexp{color:#739FCF;}
.ace-vibrant-tango .ace_comment{color:#744E7B;}
.ace-vibrant-tango .ace_variable{color:#FBEB50;}
.ace-vibrant-tango .ace_variable.ace_parameter{font-style:italic;}
.ace-vibrant-tango .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#8DE635;}
.ace-vibrant-tango .ace_entity.ace_name.ace_function{color:#FBEB50;}
`;

(ace as any).define("ace/theme/vibrant-tango-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/vibrant-tango", ["require", "exports", "module", "ace/theme/vibrant-tango-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-vibrant-tango";
	exports.cssText = require("./vibrant-tango-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
