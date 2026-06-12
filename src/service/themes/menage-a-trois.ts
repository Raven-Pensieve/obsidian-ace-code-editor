import * as ace from "ace-builds";

const cssText = `
.ace-menage-a-trois .ace_gutter {
  background: #0F1014;
  color: rgb(91, 87, 94);
}

.ace-menage-a-trois .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-menage-a-trois {
  background-color: #0F1014;
  color: #A79EA8;
}

.ace-menage-a-trois .ace_cursor {
  color: #A7A7A7;
}

.ace-menage-a-trois .ace_marker-layer .ace_selection {
  background: rgba(168, 192, 255, 0.25);
}

.ace-menage-a-trois.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0F1014;
  border-radius: 2px;
}

.ace-menage-a-trois .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-menage-a-trois .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.ace-menage-a-trois .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.031);
}

.ace-menage-a-trois .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.031);
}

.ace-menage-a-trois .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(168, 192, 255, 0.25);
}

.ace-menage-a-trois .ace_fold {
    background-color: #418CD5;
    border-color: #A79EA8;
}
.ace-menage-a-trois .ace_keyword{color:#418CD5;}
.ace-menage-a-trois .ace_constant{font-weight:bold;
color:#FFFFFF;}
.ace-menage-a-trois .ace_support{font-weight:bold;
color:#9B9CBF;}
.ace-menage-a-trois .ace_support.ace_function{color:#FFCC89;}
.ace-menage-a-trois .ace_support.ace_constant{color:#CF6A4C;}
.ace-menage-a-trois .ace_storage{color:#D9DAEE;}
.ace-menage-a-trois .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:rgba(217, 115, 220, 0.75);}
.ace-menage-a-trois .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#D2A8A1;}
.ace-menage-a-trois .ace_string{font-weight:bold;
color:#7DFFFF;}
.ace-menage-a-trois .ace_string.ace_regexp{color:#E9C062;}
.ace-menage-a-trois .ace_comment{font-style:italic;
color:#6F6970;}
.ace-menage-a-trois .ace_variable{font-weight:bold;
color:#AEB7EC;}
.ace-menage-a-trois .ace_meta.ace_tag{color:#7C7F81;}
.ace-menage-a-trois .ace_entity.ace_other.ace_attribute-name{color:#BDBDBD;}
.ace-menage-a-trois .ace_entity.ace_name{text-decoration:underline;
font-weight:bold;
color:#516AD5;}
.ace-menage-a-trois .ace_entity.ace_name.ace_tag{color:#838383;}
.ace-menage-a-trois .ace_markup.ace_heading{color:#CF6A4C;}
.ace-menage-a-trois .ace_markup.ace_list{color:#F9EE98;}
`;

ace.define("ace/theme/menage-a-trois-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/menage-a-trois", ["require", "exports", "module", "ace/theme/menage-a-trois-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-menage-a-trois";
	exports.cssText = require("./menage-a-trois-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
