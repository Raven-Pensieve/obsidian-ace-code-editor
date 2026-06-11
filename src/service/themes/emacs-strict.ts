import * as ace from "ace-builds";

const cssText = `
.ace-emacs-strict .ace_gutter {
  background: rgba(0, 0, 0, 0.92);
  color: rgb(106, 106, 106);
}

.ace-emacs-strict .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-emacs-strict {
  background-color: rgba(0, 0, 0, 0.92);
  color: #D3D3D3;
}

.ace-emacs-strict .ace_cursor {
  color: #FFFFFF;
}

.ace-emacs-strict .ace_marker-layer .ace_selection {
  background: rgba(0, 29, 195, 0.92);
}

.ace-emacs-strict.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.92);
  border-radius: 2px;
}

.ace-emacs-strict .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-emacs-strict .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #FF0000;
}

.ace-emacs-strict .ace_marker-layer .ace_active-line {
  background: rgba(22, 1, 43, 0.92);
}

.ace-emacs-strict .ace_gutter-active-line {
  background-color: rgba(22, 1, 43, 0.92);
}

.ace-emacs-strict .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(0, 29, 195, 0.92);
}

.ace-emacs-strict .ace_fold {
    background-color: #81CEF9;
    border-color: #D3D3D3;
}
.ace-emacs-strict .ace_keyword{color:#00FFFF;}
.ace-emacs-strict .ace_support.ace_class{color:#94FE9A;}
.ace-emacs-strict .ace_storage{color:#94FE9A;}
.ace-emacs-strict .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-emacs-strict .ace_string{color:#FF9E7B;}
.ace-emacs-strict .ace_comment{color:#FF7D27;}
.ace-emacs-strict .ace_variable{color:#81CEF9;}
.ace-emacs-strict .ace_variable.ace_language{color:#00FFFF;}
.ace-emacs-strict .ace_entity.ace_other.ace_attribute-name{color:#EBDB8D;}
.ace-emacs-strict .ace_entity.ace_name.ace_function{color:#81CEF9;}
.ace-emacs-strict .ace_entity.ace_name.ace_tag{color:#9CCFF4;}
.ace-emacs-strict .ace_markup.ace_heading{color:#E27F3F;}
`;

(ace as any).define("ace/theme/emacs-strict-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/emacs-strict", ["require", "exports", "module", "ace/theme/emacs-strict-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-emacs-strict";
	exports.cssText = require("./emacs-strict-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
