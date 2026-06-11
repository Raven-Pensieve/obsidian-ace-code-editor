import * as ace from "ace-builds";

const cssText = `
.ace-monokai-mod-seangaffney .ace_gutter {
  background: rgba(29, 30, 25, 0.95);
  color: rgb(139, 139, 134);
}

.ace-monokai-mod-seangaffney .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-monokai-mod-seangaffney {
  background-color: rgba(29, 30, 25, 0.95);
  color: #F8F8F2;
}

.ace-monokai-mod-seangaffney .ace_cursor {
  color: #F8F8F0;
}

.ace-monokai-mod-seangaffney .ace_marker-layer .ace_selection {
  background: #3C3427;
}

.ace-monokai-mod-seangaffney.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(29, 30, 25, 0.95);
  border-radius: 2px;
}

.ace-monokai-mod-seangaffney .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-monokai-mod-seangaffney .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #6D6A58;
}

.ace-monokai-mod-seangaffney .ace_marker-layer .ace_active-line {
  background: #24241D;
}

.ace-monokai-mod-seangaffney .ace_gutter-active-line {
  background-color: #24241D;
}

.ace-monokai-mod-seangaffney .ace_marker-layer .ace_selected-word {
  border: 1px solid #3C3427;
}

.ace-monokai-mod-seangaffney .ace_fold {
    background-color: #A6E22E;
    border-color: #F8F8F2;
}
.ace-monokai-mod-seangaffney .ace_keyword{color:#F92672;}
.ace-monokai-mod-seangaffney .ace_constant.ace_language{color:#AE81FF;}
.ace-monokai-mod-seangaffney .ace_constant.ace_numeric{color:#AE81FF;}
.ace-monokai-mod-seangaffney .ace_constant.ace_character{color:#AE81FF;}
.ace-monokai-mod-seangaffney .ace_constant.ace_other{color:#AE81FF;}
.ace-monokai-mod-seangaffney .ace_support.ace_function{color:#66D9EF;}
.ace-monokai-mod-seangaffney .ace_support.ace_constant{color:#FFD2A7;}
.ace-monokai-mod-seangaffney .ace_support.ace_class{font-style:italic;
color:#66D9EF;}
.ace-monokai-mod-seangaffney .ace_support.ace_type{font-style:italic;
color:#66D9EF;}
.ace-monokai-mod-seangaffney .ace_storage{color:#F92672;}
.ace-monokai-mod-seangaffney .ace_storage.ace_type{font-style:italic;
color:#66D9EF;}
.ace-monokai-mod-seangaffney .ace_invalid{color:#F8F8F0;
background-color:#F92672;}
.ace-monokai-mod-seangaffney .ace_invalid.ace_deprecated{color:#F8F8F0;
background-color:#AE81FF;}
.ace-monokai-mod-seangaffney .ace_string{color:#E6DB74;}
.ace-monokai-mod-seangaffney .ace_string.ace_regexp{color:#E9B24B;}
.ace-monokai-mod-seangaffney .ace_comment{color:#75715E;}
.ace-monokai-mod-seangaffney .ace_variable{color:#F88767;}
.ace-monokai-mod-seangaffney .ace_variable.ace_parameter{font-style:italic;
color:#FD971F;}
.ace-monokai-mod-seangaffney .ace_entity.ace_other.ace_attribute-name{color:#A6E22E;}
.ace-monokai-mod-seangaffney .ace_entity.ace_name.ace_function{color:#A6E22E;}
.ace-monokai-mod-seangaffney .ace_entity.ace_name.ace_tag{color:#F92672;}
`;

(ace as any).define("ace/theme/monokai-mod-seangaffney-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/monokai-mod-seangaffney", ["require", "exports", "module", "ace/theme/monokai-mod-seangaffney-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-monokai-mod-seangaffney";
	exports.cssText = require("./monokai-mod-seangaffney-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
