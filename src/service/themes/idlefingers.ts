import * as ace from "ace-builds";

const cssText = `
.ace-idlefingers .ace_gutter {
  background: #323232;
  color: rgb(153, 153, 153);
}

.ace-idlefingers .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-idlefingers {
  background-color: #323232;
  color: #FFFFFF;
}

.ace-idlefingers .ace_cursor {
  color: #91FF00;
}

.ace-idlefingers .ace_marker-layer .ace_selection {
  background: rgba(90, 100, 126, 0.88);
}

.ace-idlefingers.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #323232;
  border-radius: 2px;
}

.ace-idlefingers .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-idlefingers .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-idlefingers .ace_marker-layer .ace_active-line {
  background: #353637;
}

.ace-idlefingers .ace_gutter-active-line {
  background-color: #353637;
}

.ace-idlefingers .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(90, 100, 126, 0.88);
}

.ace-idlefingers .ace_fold {
    background-color: #CC7833;
    border-color: #FFFFFF;
}
.ace-idlefingers .ace_keyword{color:#CC7833;}
.ace-idlefingers .ace_constant{color:#6C99BB;}
.ace-idlefingers .ace_support.ace_function{color:#B83426;}
.ace-idlefingers .ace_support.ace_constant{color:#6C99BB;}
.ace-idlefingers .ace_invalid{color:#FFFFFF;
background-color:#FF0000;}
.ace-idlefingers .ace_string{color:#A5C261;}
.ace-idlefingers .ace_string.ace_regexp{color:#CCCC33;}
.ace-idlefingers .ace_comment{font-style:italic;
color:#BC9458;}
.ace-idlefingers .ace_variable.ace_parameter{font-style:italic;}
.ace-idlefingers .ace_meta.ace_tag{color:#FFE5BB;}
.ace-idlefingers .ace_entity.ace_name{color:#FFC66D;}
`;

(ace as any).define("ace/theme/idlefingers-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/idlefingers", ["require", "exports", "module", "ace/theme/idlefingers-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-idlefingers";
	exports.cssText = require("./idlefingers-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
