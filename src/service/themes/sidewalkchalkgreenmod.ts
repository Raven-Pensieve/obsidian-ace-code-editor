import * as ace from "ace-builds";

const cssText = `
.ace-sidewalkchalkgreenmod .ace_gutter {
  background: #2B2D2E;
  color: rgb(147, 148, 148);
}

.ace-sidewalkchalkgreenmod .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-sidewalkchalkgreenmod {
  background-color: #2B2D2E;
  color: #FAFAFA;
}

.ace-sidewalkchalkgreenmod .ace_cursor {
  color: #7F7F7F;
}

.ace-sidewalkchalkgreenmod .ace_marker-layer .ace_selection {
  background: rgba(198, 198, 198, 0.56);
}

.ace-sidewalkchalkgreenmod.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #2B2D2E;
  border-radius: 2px;
}

.ace-sidewalkchalkgreenmod .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-sidewalkchalkgreenmod .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #525252;
}

.ace-sidewalkchalkgreenmod .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-sidewalkchalkgreenmod .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-sidewalkchalkgreenmod .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(198, 198, 198, 0.56);
}

.ace-sidewalkchalkgreenmod .ace_fold {
    background-color: #A3A3A3;
    border-color: #FAFAFA;
}
.ace-sidewalkchalkgreenmod .ace_keyword{color:#62BA4D;}
.ace-sidewalkchalkgreenmod .ace_keyword.ace_operator{color:#A3A3A3;}
.ace-sidewalkchalkgreenmod .ace_constant.ace_language{color:#D56E26;}
.ace-sidewalkchalkgreenmod .ace_constant.ace_numeric{color:#E5DA39;}
.ace-sidewalkchalkgreenmod .ace_constant.ace_character{color:#C7EB37;}
.ace-sidewalkchalkgreenmod .ace_constant.ace_other{color:#C7EB37;}
.ace-sidewalkchalkgreenmod .ace_support.ace_function{color:#66FFCC;}
.ace-sidewalkchalkgreenmod .ace_support.ace_class{color:#5F88B8;}
.ace-sidewalkchalkgreenmod .ace_support.ace_type{color:#5F88B8;}
.ace-sidewalkchalkgreenmod .ace_string{color:#5F88B8;
background-color:rgba(1, 10, 46, 0.25);}
.ace-sidewalkchalkgreenmod .ace_comment{color:#535353;
background-color:#212223;}
.ace-sidewalkchalkgreenmod .ace_variable{color:#A3A3A3;}
.ace-sidewalkchalkgreenmod .ace_variable.ace_language{color:#55A9DB;}
.ace-sidewalkchalkgreenmod .ace_entity.ace_name.ace_function{color:#A3A3A3;}
.ace-sidewalkchalkgreenmod .ace_entity.ace_name{color:#5F88B8;}
`;

(ace as any).define("ace/theme/sidewalkchalkgreenmod-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/sidewalkchalkgreenmod", ["require", "exports", "module", "ace/theme/sidewalkchalkgreenmod-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-sidewalkchalkgreenmod";
	exports.cssText = require("./sidewalkchalkgreenmod-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
