import * as ace from "ace-builds";

const cssText = `
.ace-sidewalkchalk .ace_gutter {
  background: #2B2D2E;
  color: rgb(147, 148, 148);
}

.ace-sidewalkchalk .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-sidewalkchalk {
  background-color: #2B2D2E;
  color: #FAFAFA;
}

.ace-sidewalkchalk .ace_cursor {
  color: #7F7F7F;
}

.ace-sidewalkchalk .ace_marker-layer .ace_selection {
  background: rgba(198, 198, 198, 0.56);
}

.ace-sidewalkchalk.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #2B2D2E;
  border-radius: 2px;
}

.ace-sidewalkchalk .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-sidewalkchalk .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #525252;
}

.ace-sidewalkchalk .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-sidewalkchalk .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-sidewalkchalk .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(198, 198, 198, 0.56);
}

.ace-sidewalkchalk .ace_fold {
    background-color: #A3A3A3;
    border-color: #FAFAFA;
}
.ace-sidewalkchalk .ace_keyword{color:#62BA4D;}
.ace-sidewalkchalk .ace_keyword.ace_operator{color:#A3A3A3;}
.ace-sidewalkchalk .ace_constant.ace_language{color:#D56E26;}
.ace-sidewalkchalk .ace_constant.ace_numeric{color:#E5DA39;}
.ace-sidewalkchalk .ace_constant.ace_character{color:#E5DA39;}
.ace-sidewalkchalk .ace_constant.ace_other{color:#E5DA39;}
.ace-sidewalkchalk .ace_support.ace_function{color:#66FFCC;}
.ace-sidewalkchalk .ace_support.ace_class{color:#5F88B8;}
.ace-sidewalkchalk .ace_support.ace_type{color:#5F88B8;}
.ace-sidewalkchalk .ace_string{color:#5F88B8;
background-color:rgba(1, 10, 46, 0.25);}
.ace-sidewalkchalk .ace_comment{color:#535353;
background-color:#212223;}
.ace-sidewalkchalk .ace_variable{color:#A3A3A3;}
.ace-sidewalkchalk .ace_variable.ace_language{color:#55A9DB;}
.ace-sidewalkchalk .ace_entity.ace_name.ace_function{color:#A3A3A3;}
.ace-sidewalkchalk .ace_entity.ace_name{color:#5F88B8;}
`;

(ace as any).define("ace/theme/sidewalkchalk-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/sidewalkchalk", ["require", "exports", "module", "ace/theme/sidewalkchalk-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-sidewalkchalk";
	exports.cssText = require("./sidewalkchalk-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
