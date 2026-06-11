import * as ace from "ace-builds";

const cssText = `
.ace-minimal-theme .ace_gutter {
  background: #302D26;
  color: rgb(150, 150, 131);
}

.ace-minimal-theme .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-minimal-theme {
  background-color: #302D26;
  color: #FCFFE0;
}

.ace-minimal-theme .ace_cursor {
  color: #FF9900;
}

.ace-minimal-theme .ace_marker-layer .ace_selection {
  background: #180024;
}

.ace-minimal-theme.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #302D26;
  border-radius: 2px;
}

.ace-minimal-theme .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-minimal-theme .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 177, 111, 0.32);
}

.ace-minimal-theme .ace_marker-layer .ace_active-line {
  background: #232826;
}

.ace-minimal-theme .ace_gutter-active-line {
  background-color: #232826;
}

.ace-minimal-theme .ace_marker-layer .ace_selected-word {
  border: 1px solid #180024;
}

.ace-minimal-theme .ace_fold {
    background-color: #949C8B;
    border-color: #FCFFE0;
}
.ace-minimal-theme .ace_keyword{color:#949C8B;}
.ace-minimal-theme .ace_constant{color:rgba(210, 117, 24, 0.76);}
.ace-minimal-theme .ace_support{color:#9FC28A;}
.ace-minimal-theme .ace_support.ace_function{color:#85873A;}
.ace-minimal-theme .ace_support.ace_constant{color:#C27E66;}
.ace-minimal-theme .ace_storage{color:#FFEE80;}
.ace-minimal-theme .ace_invalid{color:#F8F8F8;
background-color:#800F00;}
.ace-minimal-theme .ace_string.ace_regexp{color:rgba(125, 255, 192, 0.65);}
.ace-minimal-theme .ace_comment{font-style:italic;
color:#706D5B;}
.ace-minimal-theme .ace_variable{color:#D1A796;}
.ace-minimal-theme .ace_variable.ace_language{color:#FF80E1;}
.ace-minimal-theme .ace_meta.ace_tag{color:#BABD9C;}
.ace-minimal-theme .ace_markup.ace_heading{font-weight:bold;}
.ace-minimal-theme .ace_markup.ace_list{background-color:#0F0040;}
`;

(ace as any).define("ace/theme/minimal-theme-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/minimal-theme", ["require", "exports", "module", "ace/theme/minimal-theme-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-minimal-theme";
	exports.cssText = require("./minimal-theme-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
