import * as ace from "ace-builds";

const cssText = `
.ace-midnight .ace_gutter {
  background: rgba(10, 0, 31, 0.89);
  color: rgb(129, 124, 140);
}

.ace-midnight .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-midnight {
  background-color: rgba(10, 0, 31, 0.89);
  color: #F8F8F8;
}

.ace-midnight .ace_cursor {
  color: rgba(255, 255, 255, 0.65);
}

.ace-midnight .ace_marker-layer .ace_selection {
  background: rgba(37, 0, 255, 0.52);
}

.ace-midnight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(10, 0, 31, 0.89);
  border-radius: 2px;
}

.ace-midnight .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-midnight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.ace-midnight .ace_marker-layer .ace_active-line {
  background: rgba(60, 30, 255, 0.30);
}

.ace-midnight .ace_gutter-active-line {
  background-color: rgba(60, 30, 255, 0.30);
}

.ace-midnight .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(37, 0, 255, 0.52);
}

.ace-midnight .ace_fold {
    background-color: #599EFF;
    border-color: #F8F8F8;
}
.ace-midnight .ace_keyword{color:#599EFF;}
.ace-midnight .ace_constant{color:#FFD500;}
.ace-midnight .ace_support{color:#7678E2;}
.ace-midnight .ace_storage{color:#75AFFF;}
.ace-midnight .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:#9D1E15;}
.ace-midnight .ace_invalid.ace_deprecated{font-style:italic;
color:#AB2A1D;}
.ace-midnight .ace_string{color:#00F13A;}
.ace-midnight .ace_comment{color:#6900A1;}
.ace-midnight .ace_variable{color:#99B2FF;}
.ace-midnight .ace_meta.ace_tag{color:#8860FF;}
`;

(ace as any).define("ace/theme/midnight-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/midnight", ["require", "exports", "module", "ace/theme/midnight-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-midnight";
	exports.cssText = require("./midnight-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
