import * as ace from "ace-builds";

const cssText = `
.ace-coal-graal .ace_gutter {
  background: #222222;
  color: rgb(125, 126, 122);
}

.ace-coal-graal .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-coal-graal {
  background-color: #222222;
  color: #D8D9D1;
}

.ace-coal-graal .ace_cursor {
  color: #D8D9D1;
}

.ace-coal-graal .ace_marker-layer .ace_selection {
  background: #6405D0;
}

.ace-coal-graal.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #222222;
  border-radius: 2px;
}

.ace-coal-graal .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-coal-graal .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #E5E5B2;
}

.ace-coal-graal .ace_marker-layer .ace_active-line {
  background: #282828;
}

.ace-coal-graal .ace_gutter-active-line {
  background-color: #282828;
}

.ace-coal-graal .ace_marker-layer .ace_selected-word {
  border: 1px solid #6405D0;
}

.ace-coal-graal .ace_fold {
    background-color: #DFCC94;
    border-color: #D8D9D1;
}
.ace-coal-graal .ace_keyword{color:#A3AAD8;}
.ace-coal-graal .ace_constant.ace_language{color:#EDB272;}
.ace-coal-graal .ace_constant.ace_numeric{color:#E4D962;}
.ace-coal-graal .ace_constant.ace_character{color:#DFCA53;}
.ace-coal-graal .ace_constant.ace_other{color:#DFCA53;}
.ace-coal-graal .ace_support.ace_function{color:#D9C589;}
.ace-coal-graal .ace_support.ace_class{color:#A9A5D9;}
.ace-coal-graal .ace_storage{color:#DBBFED;}
.ace-coal-graal .ace_invalid{color:#DFDFD5;
background-color:#CC1B27;}
.ace-coal-graal .ace_string{color:#ACC6D7;}
.ace-coal-graal .ace_comment{color:#B4DF61;}
.ace-coal-graal .ace_variable{color:#DFCC94;}
.ace-coal-graal .ace_variable.ace_language{color:#7AC0ED;}
.ace-coal-graal .ace_variable.ace_parameter{color:#85C6D9;}
.ace-coal-graal .ace_entity.ace_name.ace_function{color:#DFCC94;}
`;

(ace as any).define("ace/theme/coal-graal-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/coal-graal", ["require", "exports", "module", "ace/theme/coal-graal-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-coal-graal";
	exports.cssText = require("./coal-graal-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
