import * as ace from "ace-builds";

const cssText = `
.ace-cool-glow .ace_gutter {
  background: rgba(6, 7, 29, 0.98);
  color: rgb(115, 116, 127);
}

.ace-cool-glow .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-cool-glow {
  background-color: rgba(6, 7, 29, 0.98);
  color: #E0E0E0;
}

.ace-cool-glow .ace_cursor {
  color: rgba(255, 255, 255, 0.65);
}

.ace-cool-glow .ace_marker-layer .ace_selection {
  background: #122BBB;
}

.ace-cool-glow.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(6, 7, 29, 0.98);
  border-radius: 2px;
}

.ace-cool-glow .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-cool-glow .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.26);
}

.ace-cool-glow .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.059);
}

.ace-cool-glow .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.059);
}

.ace-cool-glow .ace_marker-layer .ace_selected-word {
  border: 1px solid #122BBB;
}

.ace-cool-glow .ace_fold {
    background-color: #2BF1DC;
    border-color: #E0E0E0;
}
.ace-cool-glow .ace_keyword{color:#2BF1DC;}
.ace-cool-glow .ace_constant{color:#62E9BD;}
.ace-cool-glow .ace_support{color:#60A4F1;}
.ace-cool-glow .ace_storage{color:#F8FBB1;}
.ace-cool-glow .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:#AD2117;}
.ace-cool-glow .ace_invalid.ace_deprecated{font-style:italic;
color:#AB2A1D;}
.ace-cool-glow .ace_string{color:#8DFF8E;}
.ace-cool-glow .ace_comment{color:#AEAEAE;}
.ace-cool-glow .ace_variable{color:#B683CA;}
.ace-cool-glow .ace_meta.ace_tag{color:#7BACCA;}
`;

ace.define("ace/theme/cool-glow-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/cool-glow", ["require", "exports", "module", "ace/theme/cool-glow-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-cool-glow";
	exports.cssText = require("./cool-glow-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
