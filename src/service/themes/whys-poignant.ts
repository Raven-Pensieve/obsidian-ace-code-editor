import * as ace from "ace-builds";

const cssText = `
.ace-whys-poignant .ace_gutter {
  background: #FFFEF9;
  color: rgb(150, 178, 202);
}

.ace-whys-poignant .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-whys-poignant {
  background-color: #FFFEF9;
  color: #2D669A;
}

.ace-whys-poignant .ace_cursor {
  color: #340019;
}

.ace-whys-poignant .ace_marker-layer .ace_selection {
  background: rgba(59, 136, 205, 0.30);
}

.ace-whys-poignant.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFEF9;
  border-radius: 2px;
}

.ace-whys-poignant .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-whys-poignant .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #FF98CA;
}

.ace-whys-poignant .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 190, 0.50);
}

.ace-whys-poignant .ace_gutter-active-line {
  background-color: rgba(255, 255, 190, 0.50);
}

.ace-whys-poignant .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(59, 136, 205, 0.30);
}

.ace-whys-poignant .ace_fold {
    background-color: bold;
    border-color: #2D669A;
}
.ace-whys-poignant .ace_keyword{font-weight:bold;
color:#761B48;}
.ace-whys-poignant .ace_constant.ace_language{font-weight:bold;
color:#4F1900;}
.ace-whys-poignant .ace_constant.ace_numeric{color:#2A9A66;}
.ace-whys-poignant .ace_constant.ace_character{font-weight:bold;}
.ace-whys-poignant .ace_constant.ace_character.ace_entity{color:#2A9A66;}
.ace-whys-poignant .ace_constant.ace_other{color:#000000;}
.ace-whys-poignant .ace_support.ace_class{font-weight:bold;
color:#4F1900;}
.ace-whys-poignant .ace_string{color:#2A9A66;
background-color:#E8F5F5;}
.ace-whys-poignant .ace_string.ace_regexp{color:#443355;
background-color:#E8F1F5;}
.ace-whys-poignant .ace_comment{color:#555555;}
.ace-whys-poignant .ace_variable.ace_language{color:#2D669A;}
.ace-whys-poignant .ace_meta.ace_tag{color:#9D3266;}
.ace-whys-poignant .ace_entity.ace_other.ace_attribute-name{font-weight:bold;
color:#4F1900;}
.ace-whys-poignant .ace_entity.ace_name.ace_tag{font-weight:bold;
color:#761B48;}
`;

ace.define("ace/theme/whys-poignant-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/whys-poignant", ["require", "exports", "module", "ace/theme/whys-poignant-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-whys-poignant";
	exports.cssText = require("./whys-poignant-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
