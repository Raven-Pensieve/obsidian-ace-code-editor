import * as ace from "ace-builds";

const cssText = `
.ace-blackboard-new .ace_gutter {
  background: rgba(11, 13, 23, 0.90);
  color: rgb(130, 131, 136);
}

.ace-blackboard-new .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-blackboard-new {
  background-color: rgba(11, 13, 23, 0.90);
  color: #F8F8F8;
}

.ace-blackboard-new .ace_cursor {
  color: rgba(255, 255, 255, 0.65);
}

.ace-blackboard-new .ace_marker-layer .ace_selection {
  background: #253B76;
}

.ace-blackboard-new.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(11, 13, 23, 0.90);
  border-radius: 2px;
}

.ace-blackboard-new .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-blackboard-new .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.ace-blackboard-new .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.059);
}

.ace-blackboard-new .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.059);
}

.ace-blackboard-new .ace_marker-layer .ace_selected-word {
  border: 1px solid #253B76;
}

.ace-blackboard-new .ace_fold {
    background-color: #FBDE2D;
    border-color: #F8F8F8;
}
.ace-blackboard-new .ace_keyword{color:#FBDE2D;}
.ace-blackboard-new .ace_constant{color:#D8FA3C;}
.ace-blackboard-new .ace_support{color:#7CB6FF;}
.ace-blackboard-new .ace_storage{color:#FBDE2D;}
.ace-blackboard-new .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:#9D1E15;}
.ace-blackboard-new .ace_invalid.ace_deprecated{font-style:italic;
color:#AB2A1D;}
.ace-blackboard-new .ace_string{color:#61CE3C;}
.ace-blackboard-new .ace_comment{color:#AEAEAE;}
.ace-blackboard-new .ace_variable{color:#BEABFF;}
.ace-blackboard-new .ace_meta.ace_tag{color:#8090AA;}
`;

(ace as any).define("ace/theme/blackboard-new-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/blackboard-new", ["require", "exports", "module", "ace/theme/blackboard-new-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-blackboard-new";
	exports.cssText = require("./blackboard-new-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
