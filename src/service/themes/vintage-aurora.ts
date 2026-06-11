import * as ace from "ace-builds";

const cssText = `
.ace-vintage-aurora .ace_gutter {
  background: rgba(46, 0, 38, 0.87);
  color: rgb(147, 118, 126);
}

.ace-vintage-aurora .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-vintage-aurora {
  background-color: rgba(46, 0, 38, 0.87);
  color: #F7EBD6;
}

.ace-vintage-aurora .ace_cursor {
  color: rgba(255, 255, 255, 0.65);
}

.ace-vintage-aurora .ace_marker-layer .ace_selection {
  background: #532075;
}

.ace-vintage-aurora.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px rgba(46, 0, 38, 0.87);
  border-radius: 2px;
}

.ace-vintage-aurora .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-vintage-aurora .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.ace-vintage-aurora .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.059);
}

.ace-vintage-aurora .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.059);
}

.ace-vintage-aurora .ace_marker-layer .ace_selected-word {
  border: 1px solid #532075;
}

.ace-vintage-aurora .ace_fold {
    background-color: #DCB476;
    border-color: #F7EBD6;
}
.ace-vintage-aurora .ace_keyword{color:#DCB476;}
.ace-vintage-aurora .ace_constant{color:#D43384;}
.ace-vintage-aurora .ace_support{color:#7CB6FF;}
.ace-vintage-aurora .ace_storage{color:#DCB476;}
.ace-vintage-aurora .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:#9D1E15;}
.ace-vintage-aurora .ace_invalid.ace_deprecated{font-style:italic;
color:#AB2A1D;}
.ace-vintage-aurora .ace_string{color:#56B380;}
.ace-vintage-aurora .ace_comment{color:#AEAEAE;}
.ace-vintage-aurora .ace_variable{color:#BEABFF;}
.ace-vintage-aurora .ace_meta.ace_tag{color:#8090AA;}
`;

(ace as any).define("ace/theme/vintage-aurora-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/vintage-aurora", ["require", "exports", "module", "ace/theme/vintage-aurora-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-vintage-aurora";
	exports.cssText = require("./vintage-aurora-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
