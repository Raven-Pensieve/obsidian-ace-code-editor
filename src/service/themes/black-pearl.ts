import * as ace from "ace-builds";

const cssText = `
.ace-black-pearl .ace_gutter {
  background: #000000;
  color: rgb(128, 128, 128);
}

.ace-black-pearl .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-black-pearl {
  background-color: #000000;
  color: #FFFFFF;
}

.ace-black-pearl .ace_cursor {
  color: #FFFFFF;
}

.ace-black-pearl .ace_marker-layer .ace_selection {
  background: rgba(255, 255, 255, 0.15);
}

.ace-black-pearl.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
  border-radius: 2px;
}

.ace-black-pearl .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-black-pearl .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-black-pearl .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.051);
}

.ace-black-pearl .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.051);
}

.ace-black-pearl .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.ace-black-pearl .ace_fold {
    background-color: #8AA6C1;
    border-color: #FFFFFF;
}
.ace-black-pearl .ace_keyword{color:#8AA6C1;}
.ace-black-pearl .ace_keyword.ace_operator{font-weight:bold;
color:#FFFFFF;}
.ace-black-pearl .ace_constant{color:#8AA6C1;}
.ace-black-pearl .ace_constant.ace_numeric{color:#EDDD5A;}
.ace-black-pearl .ace_constant.ace_other{color:#80D500;}
.ace-black-pearl .ace_storage{color:#80D500;}
.ace-black-pearl .ace_invalid{color:#FFFFFF;
background-color:#670000;}
.ace-black-pearl .ace_string{color:#CC66FF;}
.ace-black-pearl .ace_string.ace_regexp{color:#CA4344;}
.ace-black-pearl .ace_comment{font-style:italic;
color:#428BDD;}
.ace-black-pearl .ace_variable.ace_parameter{font-style:italic;
color:#8AA6C1;}
.ace-black-pearl .ace_entity.ace_other.ace_attribute-name{color:#FFFFFF;}
.ace-black-pearl .ace_entity.ace_name.ace_tag{font-weight:bold;
color:#FFFFFF;}
`;

(ace as any).define("ace/theme/black-pearl-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/black-pearl", ["require", "exports", "module", "ace/theme/black-pearl-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-black-pearl";
	exports.cssText = require("./black-pearl-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
