import * as ace from "ace-builds";

const cssText = `
.ace-putty .ace_gutter {
  background: #242322;
  color: rgb(133, 130, 127);
}

.ace-putty .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-putty {
  background-color: #242322;
  color: #E5E1DC;
}

.ace-putty .ace_cursor {
  color: #FFFFFF;
}

.ace-putty .ace_marker-layer .ace_selection {
  background: rgba(90, 100, 126, 0.88);
}

.ace-putty.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #242322;
  border-radius: 2px;
}

.ace-putty .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-putty .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-putty .ace_marker-layer .ace_active-line {
  background: #333435;
}

.ace-putty .ace_gutter-active-line {
  background-color: #333435;
}

.ace-putty .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(90, 100, 126, 0.88);
}

.ace-putty .ace_fold {
    background-color: #D5584B;
    border-color: #E5E1DC;
}
.ace-putty .ace_keyword{color:#E9EEC2;}
.ace-putty .ace_constant{color:#7AB8D7;}
.ace-putty .ace_constant.ace_language{color:#6E9CBE;}
.ace-putty .ace_constant.ace_numeric{color:#FDA35E;}
.ace-putty .ace_constant.ace_character.ace_escape{color:#FDA35E;}
.ace-putty .ace_support.ace_function{color:#D4584B;}
.ace-putty .ace_support.ace_constant{color:#FDA35E;}
.ace-putty .ace_support.ace_type{color:#6E9CBE;}
.ace-putty .ace_storage{color:#E9EEC2;}
.ace-putty .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-putty .ace_string{color:#7AB8D7;}
.ace-putty .ace_comment{font-style:italic;
color:#747676;}
.ace-putty .ace_variable{color:#D5584B;}
.ace-putty .ace_variable.ace_language{color:#7AB8D7;}
.ace-putty .ace_meta.ace_tag{color:#E87658;}
.ace-putty .ace_entity.ace_other.ace_attribute-name{color:#E87658;}
.ace-putty .ace_entity.ace_name.ace_function{color:#D5584B;}
.ace-putty .ace_entity.ace_name{color:#FFFFFF;}
.ace-putty .ace_entity.ace_name.ace_tag{color:#E87658;}
`;

(ace as any).define("ace/theme/putty-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/putty", ["require", "exports", "module", "ace/theme/putty-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-putty";
	exports.cssText = require("./putty-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
