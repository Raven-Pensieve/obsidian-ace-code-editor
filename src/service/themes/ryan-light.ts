import * as ace from "ace-builds";

const cssText = `
.ace-ryan-light .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-ryan-light .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-ryan-light {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-ryan-light .ace_cursor {
  color: #000000;
}

.ace-ryan-light .ace_marker-layer .ace_selection {
  background: #C3DCFF;
}

.ace-ryan-light.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-ryan-light .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-ryan-light .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF;
}

.ace-ryan-light .ace_marker-layer .ace_active-line {
  background: #EFEFEF;
}

.ace-ryan-light .ace_gutter-active-line {
  background-color: #EFEFEF;
}

.ace-ryan-light .ace_marker-layer .ace_selected-word {
  border: 1px solid #C3DCFF;
}

.ace-ryan-light .ace_fold {
    background-color: #820095;
    border-color: #000000;
}
.ace-ryan-light .ace_keyword{color:#006A08;}
.ace-ryan-light .ace_constant{color:#A62B29;}
.ace-ryan-light .ace_constant.ace_language{color:#0000CD;}
.ace-ryan-light .ace_constant.ace_numeric{color:#0900D3;}
.ace-ryan-light .ace_constant.ace_character.ace_escape{color:#26B31A;}
.ace-ryan-light .ace_support.ace_function{color:#010E83;}
.ace-ryan-light .ace_support.ace_constant{color:#006A09;}
.ace-ryan-light .ace_support.ace_type{color:#006A09;}
.ace-ryan-light .ace_storage{color:#006A08;}
.ace-ryan-light .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-ryan-light .ace_string{color:#0E8D90;}
.ace-ryan-light .ace_comment{font-style:italic;
color:#808080;}
.ace-ryan-light .ace_variable{color:#820095;}
.ace-ryan-light .ace_variable.ace_language{color:#7E3700;}
.ace-ryan-light .ace_meta.ace_tag{color:#2D439B;}
.ace-ryan-light .ace_entity.ace_other.ace_attribute-name{color:#2D439B;}
.ace-ryan-light .ace_entity.ace_name.ace_function{color:#820095;}
.ace-ryan-light .ace_entity.ace_name{color:#0802D3;}
.ace-ryan-light .ace_entity.ace_name.ace_tag{color:#2D439B;}
`;

(ace as any).define("ace/theme/ryan-light-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/ryan-light", ["require", "exports", "module", "ace/theme/ryan-light-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-ryan-light";
	exports.cssText = require("./ryan-light-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
