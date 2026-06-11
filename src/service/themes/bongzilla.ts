import * as ace from "ace-builds";

const cssText = `
.ace-bongzilla .ace_gutter {
  background: #1F1F1F;
  color: rgb(140, 140, 140);
}

.ace-bongzilla .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-bongzilla {
  background-color: #1F1F1F;
  color: #F8F8F8;
}

.ace-bongzilla .ace_cursor {
  color: rgba(255, 255, 255, 0.65);
}

.ace-bongzilla .ace_marker-layer .ace_selection {
  background: #253B76;
}

.ace-bongzilla.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #1F1F1F;
  border-radius: 2px;
}

.ace-bongzilla .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-bongzilla .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.ace-bongzilla .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.059);
}

.ace-bongzilla .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.059);
}

.ace-bongzilla .ace_marker-layer .ace_selected-word {
  border: 1px solid #253B76;
}

.ace-bongzilla .ace_fold {
    background-color: #FFCC66;
    border-color: #F8F8F8;
}
.ace-bongzilla .ace_keyword{color:#FFCC66;}
.ace-bongzilla .ace_constant{color:#FF593E;}
.ace-bongzilla .ace_support{color:#8DA6CE;}
.ace-bongzilla .ace_storage{color:#FFCC66;}
.ace-bongzilla .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:#9D1E15;}
.ace-bongzilla .ace_invalid.ace_deprecated{font-style:italic;
color:#AB2A1D;}
.ace-bongzilla .ace_string{color:#78CE91;}
.ace-bongzilla .ace_comment{color:#AEAEAE;}
.ace-bongzilla .ace_variable{color:#BEF895;}
.ace-bongzilla .ace_meta.ace_tag{color:#7F90AA;}
`;

(ace as any).define("ace/theme/bongzilla-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/bongzilla", ["require", "exports", "module", "ace/theme/bongzilla-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-bongzilla";
	exports.cssText = require("./bongzilla-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
