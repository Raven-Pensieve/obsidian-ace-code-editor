import * as ace from "ace-builds";

const cssText = `
.ace-monokai-dark .ace_gutter {
  background: #0D0D0D;
  color: rgb(131, 131, 128);
}

.ace-monokai-dark .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-monokai-dark {
  background-color: #0D0D0D;
  color: #F8F8F2;
}

.ace-monokai-dark .ace_cursor {
  color: #F8F8F0;
}

.ace-monokai-dark .ace_marker-layer .ace_selection {
  background: #A63A62;
}

.ace-monokai-dark.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0D0D0D;
  border-radius: 2px;
}

.ace-monokai-dark .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-monokai-dark .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #3B3A32;
}

.ace-monokai-dark .ace_marker-layer .ace_active-line {
  background: rgba(61, 61, 61, 0.33);
}

.ace-monokai-dark .ace_gutter-active-line {
  background-color: rgba(61, 61, 61, 0.33);
}

.ace-monokai-dark .ace_marker-layer .ace_selected-word {
  border: 1px solid #A63A62;
}

.ace-monokai-dark .ace_fold {
    background-color: #A6E22E;
    border-color: #F8F8F2;
}
.ace-monokai-dark .ace_keyword{color:#F92672;}
.ace-monokai-dark .ace_constant.ace_language{color:#FF80F4;}
.ace-monokai-dark .ace_constant.ace_numeric{color:#FF80F4;}
.ace-monokai-dark .ace_constant.ace_character{color:#FF80F4;}
.ace-monokai-dark .ace_constant.ace_other{color:#FF80F4;}
.ace-monokai-dark .ace_support.ace_function{color:#66D9EF;}
.ace-monokai-dark .ace_support.ace_constant{color:#66D9EF;}
.ace-monokai-dark .ace_support.ace_class{font-style:italic;
color:#66D9EF;}
.ace-monokai-dark .ace_support.ace_type{font-style:italic;
color:#66D9EF;}
.ace-monokai-dark .ace_storage{color:#F92672;}
.ace-monokai-dark .ace_storage.ace_type{font-style:italic;
color:#66D9EF;}
.ace-monokai-dark .ace_invalid{color:#F8F8F0;
background-color:#F92672;}
.ace-monokai-dark .ace_invalid.ace_deprecated{color:#F8F8F0;
background-color:#FF80F4;}
.ace-monokai-dark .ace_string{color:#FFEE99;}
.ace-monokai-dark .ace_comment{color:#8C8C8C;}
.ace-monokai-dark .ace_variable{color:#A6E22E;}
.ace-monokai-dark .ace_variable.ace_parameter{font-style:italic;
color:#FD971F;}
.ace-monokai-dark .ace_entity.ace_other.ace_attribute-name{color:#A6E22E;}
.ace-monokai-dark .ace_entity.ace_name.ace_function{color:#A6E22E;}
.ace-monokai-dark .ace_entity.ace_name.ace_tag{color:#F92672;}
`;

ace.define("ace/theme/monokai-dark-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/monokai-dark", ["require", "exports", "module", "ace/theme/monokai-dark-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-monokai-dark";
	exports.cssText = require("./monokai-dark-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
