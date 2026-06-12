import * as ace from "ace-builds";

const cssText = `
.ace-rails-envy .ace_gutter {
  background: #121210;
  color: rgb(133, 133, 129);
}

.ace-rails-envy .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-rails-envy {
  background-color: #121210;
  color: #F8F8F2;
}

.ace-rails-envy .ace_cursor {
  color: #F8F8F0;
}

.ace-rails-envy .ace_marker-layer .ace_selection {
  background: #49483E;
}

.ace-rails-envy.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #121210;
  border-radius: 2px;
}

.ace-rails-envy .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-rails-envy .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #3B3A32;
}

.ace-rails-envy .ace_marker-layer .ace_active-line {
  background: #3E3D32;
}

.ace-rails-envy .ace_gutter-active-line {
  background-color: #3E3D32;
}

.ace-rails-envy .ace_marker-layer .ace_selected-word {
  border: 1px solid #49483E;
}

.ace-rails-envy .ace_fold {
    background-color: #A6E22E;
    border-color: #F8F8F2;
}
.ace-rails-envy .ace_keyword{color:#40A187;}
.ace-rails-envy .ace_constant.ace_language{color:#AE81FF;}
.ace-rails-envy .ace_constant.ace_numeric{color:#AE81FF;}
.ace-rails-envy .ace_constant.ace_character{color:#70FFE0;}
.ace-rails-envy .ace_constant.ace_other{color:#70FFE0;}
.ace-rails-envy .ace_support.ace_function{color:#66D9EF;}
.ace-rails-envy .ace_support.ace_constant{color:#8FEFAE;}
.ace-rails-envy .ace_support.ace_class{font-style:italic;
color:#56CF72;}
.ace-rails-envy .ace_support.ace_type{font-style:italic;
color:#56CF72;}
.ace-rails-envy .ace_storage{color:#F92672;}
.ace-rails-envy .ace_storage.ace_type{font-style:italic;
color:#8AE5EF;}
.ace-rails-envy .ace_invalid{color:#F8F8F0;
background-color:#F92672;}
.ace-rails-envy .ace_invalid.ace_deprecated{color:#F8F8F0;
background-color:#AE81FF;}
.ace-rails-envy .ace_string{color:#FFFF66;}
.ace-rails-envy .ace_comment{color:#75715E;}
.ace-rails-envy .ace_variable{color:#00FFFF;}
.ace-rails-envy .ace_variable.ace_parameter{font-style:italic;
color:#FD971F;}
.ace-rails-envy .ace_entity.ace_other.ace_attribute-name{color:#A6E22E;}
.ace-rails-envy .ace_entity.ace_name.ace_function{color:#A6E22E;}
.ace-rails-envy .ace_entity.ace_name.ace_tag{color:#52F9F9;}
`;

ace.define("ace/theme/rails-envy-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/rails-envy", ["require", "exports", "module", "ace/theme/rails-envy-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-rails-envy";
	exports.cssText = require("./rails-envy-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
