import * as ace from "ace-builds";

const cssText = `
.ace-blackboard-black .ace_gutter {
  background: #1F1F1F;
  color: rgb(140, 140, 140);
}

.ace-blackboard-black .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-blackboard-black {
  background-color: #1F1F1F;
  color: #F8F8F8;
}

.ace-blackboard-black .ace_cursor {
  color: rgba(255, 255, 255, 0.65);
}

.ace-blackboard-black .ace_marker-layer .ace_selection {
  background: #253B76;
}

.ace-blackboard-black.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #1F1F1F;
  border-radius: 2px;
}

.ace-blackboard-black .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-blackboard-black .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.ace-blackboard-black .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.059);
}

.ace-blackboard-black .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.059);
}

.ace-blackboard-black .ace_marker-layer .ace_selected-word {
  border: 1px solid #253B76;
}

.ace-blackboard-black .ace_fold {
    background-color: #FBDE2D;
    border-color: #F8F8F8;
}
.ace-blackboard-black .ace_keyword{color:#FBDE2D;}
.ace-blackboard-black .ace_constant{color:#D8FA3C;}
.ace-blackboard-black .ace_support{color:#8DA6CE;}
.ace-blackboard-black .ace_storage{color:#FBDE2D;}
.ace-blackboard-black .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:#9D1E15;}
.ace-blackboard-black .ace_invalid.ace_deprecated{font-style:italic;
color:#AB2A1D;}
.ace-blackboard-black .ace_string{color:#61CE3C;}
.ace-blackboard-black .ace_comment{color:#AEAEAE;}
.ace-blackboard-black .ace_meta.ace_tag{color:#7F90AA;}
`;

(ace as any).define("ace/theme/blackboard-black-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/blackboard-black", ["require", "exports", "module", "ace/theme/blackboard-black-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-blackboard-black";
	exports.cssText = require("./blackboard-black-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
