import * as ace from "ace-builds";

const cssText = `
.ace-deluxe .ace_gutter {
  background: rgba(0, 0, 0, 0.95);
  color: rgb(124, 124, 121);
}

.ace-deluxe .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-deluxe {
  background-color: rgba(0, 0, 0, 0.95);
  color: #F8F8F2;
}

.ace-deluxe .ace_cursor {
  color: #F8F8F0;
}

.ace-deluxe .ace_marker-layer .ace_selection {
  background: #273C40;
}

.ace-deluxe.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.95);
  border-radius: 2px;
}

.ace-deluxe .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-deluxe .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #3B3A32;
}

.ace-deluxe .ace_marker-layer .ace_active-line {
  background: #3E3D32;
}

.ace-deluxe .ace_gutter-active-line {
  background-color: #3E3D32;
}

.ace-deluxe .ace_marker-layer .ace_selected-word {
  border: 1px solid #273C40;
}

.ace-deluxe .ace_fold {
    background-color: bold;
    border-color: #F8F8F2;
}
.ace-deluxe .ace_keyword{color:#EBD17C;}
.ace-deluxe .ace_keyword.ace_operator{color:#8794F8;}
.ace-deluxe .ace_constant.ace_language{color:#AE81FF;}
.ace-deluxe .ace_constant.ace_numeric{color:#AE81FF;}
.ace-deluxe .ace_constant.ace_character{color:#70FFE0;}
.ace-deluxe .ace_constant.ace_other{color:#70FFE0;}
.ace-deluxe .ace_support.ace_function{color:#66D9EF;}
.ace-deluxe .ace_support.ace_constant{color:#8FEFAE;}
.ace-deluxe .ace_support.ace_class{font-style:italic;
color:#FFE243;}
.ace-deluxe .ace_support.ace_type{font-style:italic;
color:#FFE243;}
.ace-deluxe .ace_storage{color:#F92672;}
.ace-deluxe .ace_storage.ace_type{font-style:italic;
color:#8AE5EF;}
.ace-deluxe .ace_invalid{color:#F8F8F0;
background-color:#F92672;}
.ace-deluxe .ace_invalid.ace_deprecated{color:#F8F8F0;
background-color:#AE81FF;}
.ace-deluxe .ace_string{color:#FFFF66;
background-color:rgba(40, 40, 38, 0.95);}
.ace-deluxe .ace_comment{font-style:italic;
color:#75715E;}
.ace-deluxe .ace_variable{color:#00FFFF;}
.ace-deluxe .ace_variable.ace_parameter{font-style:italic;
color:#FD971F;}
.ace-deluxe .ace_entity.ace_other.ace_attribute-name{color:#A6E22E;}
.ace-deluxe .ace_entity.ace_name.ace_function{font-weight:bold;
color:#3E6FFF;}
.ace-deluxe .ace_entity.ace_name.ace_tag{color:#52F9F9;}
`;

ace.define("ace/theme/deluxe-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/deluxe", ["require", "exports", "module", "ace/theme/deluxe-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-deluxe";
	exports.cssText = require("./deluxe-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
