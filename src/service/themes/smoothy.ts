import * as ace from "ace-builds";

const cssText = `
.ace-smoothy .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-smoothy .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-smoothy {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-smoothy .ace_cursor {
  color: #000000;
}

.ace-smoothy .ace_marker-layer .ace_selection {
  background: rgba(255, 253, 0, 0.33);
}

.ace-smoothy.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-smoothy .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-smoothy .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(101, 100, 38, 0.40);
}

.ace-smoothy .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.031);
}

.ace-smoothy .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.031);
}

.ace-smoothy .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 253, 0, 0.33);
}

.ace-smoothy .ace_fold {
    background-color: #D8B229;
    border-color: #000000;
}
.ace-smoothy .ace_keyword{color:#D8B229;}
.ace-smoothy .ace_keyword.ace_operator{font-weight:bold;
color:#4EA44E;}
.ace-smoothy .ace_constant{color:#E66C29;}
.ace-smoothy .ace_support{color:#2F8996;}
.ace-smoothy .ace_support.ace_function{font-weight:bold;
color:#55A2EA;}
.ace-smoothy .ace_support.ace_constant{color:#959630;}
.ace-smoothy .ace_storage{color:#925A47;}
.ace-smoothy .ace_invalid.ace_illegal{text-decoration:underline;
color:#A2A2A2;
background-color:rgba(87, 86, 87, 0.039);}
.ace-smoothy .ace_invalid.ace_deprecated{text-decoration:underline;
color:#D24346;}
.ace-smoothy .ace_string{color:#704D3D;}
.ace-smoothy .ace_string.ace_regexp{color:#E3965E;}
.ace-smoothy .ace_comment{color:#CFCFCF;
background-color:rgba(17, 43, 10, 0.0);}
.ace-smoothy .ace_variable{font-weight:bold;
color:#77ACB0;}
.ace-smoothy .ace_meta.ace_tag{color:#495573;}
.ace-smoothy .ace_entity.ace_other.ace_attribute-name{color:#B06520;}
.ace-smoothy .ace_entity.ace_name.ace_tag{color:#BAA827;}
.ace-smoothy .ace_markup.ace_heading{color:#CF6A4C;}
.ace-smoothy .ace_markup.ace_list{color:#F9EB77;}
`;

ace.define("ace/theme/smoothy-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/smoothy", ["require", "exports", "module", "ace/theme/smoothy-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-smoothy";
	exports.cssText = require("./smoothy-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
