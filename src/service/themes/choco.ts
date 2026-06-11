import * as ace from "ace-builds";

const cssText = `
.ace-choco .ace_gutter {
  background: #180C0C;
  color: rgb(110, 101, 82);
}

.ace-choco .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-choco {
  background-color: #180C0C;
  color: #C3BE98;
}

.ace-choco .ace_cursor {
  color: #A7A7A7;
}

.ace-choco .ace_marker-layer .ace_selection {
  background: rgba(221, 240, 255, 0.38);
}

.ace-choco.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #180C0C;
  border-radius: 2px;
}

.ace-choco .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-choco .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.ace-choco .ace_marker-layer .ace_active-line {
  background: rgba(255, 156, 117, 0.13);
}

.ace-choco .ace_gutter-active-line {
  background-color: rgba(255, 156, 117, 0.13);
}

.ace-choco .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(221, 240, 255, 0.38);
}

.ace-choco .ace_fold {
    background-color: #B3935C;
    border-color: #C3BE98;
}
.ace-choco .ace_keyword{color:#B3935C;}
.ace-choco .ace_constant{color:#DA5659;}
.ace-choco .ace_support{color:#A8799C;}
.ace-choco .ace_support.ace_function{color:#C29863;}
.ace-choco .ace_support.ace_constant{color:#D77261;}
.ace-choco .ace_storage{color:#F1E694;}
.ace-choco .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:rgba(86, 45, 86, 0.75);}
.ace-choco .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#D2A8A1;}
.ace-choco .ace_string{color:#7CA563;}
.ace-choco .ace_string.ace_regexp{color:#E9C062;}
.ace-choco .ace_comment{color:#679D47;
background-color:rgba(23, 32, 19, 0.0);}
.ace-choco .ace_variable{color:#7989A6;}
.ace-choco .ace_meta.ace_tag{color:#9F785B;}
.ace-choco .ace_markup.ace_heading{color:#CF6A4C;}
.ace-choco .ace_markup.ace_list{color:#F9EE98;}
`;

(ace as any).define("ace/theme/choco-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/choco", ["require", "exports", "module", "ace/theme/choco-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-choco";
	exports.cssText = require("./choco-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
