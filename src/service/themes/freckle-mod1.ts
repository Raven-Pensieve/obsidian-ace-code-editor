import * as ace from "ace-builds";

const cssText = `
.ace-freckle-mod1 .ace_gutter {
  background: #FFFFFF;
  color: rgb(128, 128, 128);
}

.ace-freckle-mod1 .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-freckle-mod1 {
  background-color: #FFFFFF;
  color: #000000;
}

.ace-freckle-mod1 .ace_cursor {
  color: #3592A8;
}

.ace-freckle-mod1 .ace_marker-layer .ace_selection {
  background: #ABD9E2;
}

.ace-freckle-mod1.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FFFFFF;
  border-radius: 2px;
}

.ace-freckle-mod1 .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-freckle-mod1 .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-freckle-mod1 .ace_marker-layer .ace_active-line {
  background: #333435;
}

.ace-freckle-mod1 .ace_gutter-active-line {
  background-color: #333435;
}

.ace-freckle-mod1 .ace_marker-layer .ace_selected-word {
  border: 1px solid #ABD9E2;
}

.ace-freckle-mod1 .ace_fold {
    background-color: bold;
    border-color: #000000;
}
.ace-freckle-mod1 .ace_keyword{color:#E84480;}
.ace-freckle-mod1 .ace_constant{color:#3592A8;
background-color:#A7D9E2;}
.ace-freckle-mod1 .ace_constant.ace_language{color:#34B9D6;}
.ace-freckle-mod1 .ace_constant.ace_numeric{color:#3A3B38;}
.ace-freckle-mod1 .ace_constant.ace_character.ace_escape{color:#666961;}
.ace-freckle-mod1 .ace_support.ace_function{color:#E84480;}
.ace-freckle-mod1 .ace_support.ace_constant{color:#7ABC08;}
.ace-freckle-mod1 .ace_support.ace_type{color:#3592A8;}
.ace-freckle-mod1 .ace_storage{color:#E84480;}
.ace-freckle-mod1 .ace_invalid{color:#FFFFFF;
background-color:#FC1768;}
.ace-freckle-mod1 .ace_string{color:#666961;
background-color:#D4F09A;}
.ace-freckle-mod1 .ace_comment{font-style:italic;
color:#797C74;}
.ace-freckle-mod1 .ace_variable{font-weight:bold;
color:#3592A8;}
.ace-freckle-mod1 .ace_variable.ace_language{color:#3592A8;}
.ace-freckle-mod1 .ace_meta.ace_tag{color:#34B9D6;}
.ace-freckle-mod1 .ace_entity.ace_other.ace_attribute-name{color:#34B9D6;}
.ace-freckle-mod1 .ace_entity.ace_name.ace_function{font-weight:bold;
color:#3592A8;}
.ace-freckle-mod1 .ace_entity.ace_name{color:#34B9D6;}
.ace-freckle-mod1 .ace_entity.ace_name.ace_tag{color:#34B9D6;}
`;

(ace as any).define("ace/theme/freckle-mod1-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/freckle-mod1", ["require", "exports", "module", "ace/theme/freckle-mod1-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = false;
	exports.cssClass = "ace-freckle-mod1";
	exports.cssText = require("./freckle-mod1-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
