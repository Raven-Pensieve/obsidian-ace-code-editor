import * as ace from "ace-builds";

const cssText = `
.ace-glitterbomb .ace_gutter {
  background: #0B0A0A;
  color: rgb(109, 109, 109);
}

.ace-glitterbomb .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-glitterbomb {
  background-color: #0B0A0A;
  color: #CFCFCF;
}

.ace-glitterbomb .ace_cursor {
  color: #E2E9FF;
}

.ace-glitterbomb .ace_marker-layer .ace_selection {
  background: rgba(255, 255, 255, 0.35);
}

.ace-glitterbomb.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0B0A0A;
  border-radius: 2px;
}

.ace-glitterbomb .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-glitterbomb .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #484848;
}

.ace-glitterbomb .ace_marker-layer .ace_active-line {
  background: #F8F8F8;
}

.ace-glitterbomb .ace_gutter-active-line {
  background-color: #F8F8F8;
}

.ace-glitterbomb .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.ace-glitterbomb .ace_fold {
    background-color: bold;
    border-color: #CFCFCF;
}
.ace-glitterbomb .ace_keyword{font-weight:bold;
color:#DBB800;}
.ace-glitterbomb .ace_keyword.ace_operator{color:#988155;}
.ace-glitterbomb .ace_constant{color:#C0A368;}
.ace-glitterbomb .ace_constant.ace_numeric{color:#D3C788;}
.ace-glitterbomb .ace_support{color:#7D6C55;}
.ace-glitterbomb .ace_support.ace_function{color:#935E29;}
.ace-glitterbomb .ace_support.ace_constant{color:#EBAC47;}
.ace-glitterbomb .ace_storage{color:#F6F080;}
.ace-glitterbomb .ace_invalid{color:#F8F8F8;
background-color:rgba(216, 41, 13, 0.75);}
.ace-glitterbomb .ace_string{color:#4D6537;}
.ace-glitterbomb .ace_string.ace_regexp{color:#364627;}
.ace-glitterbomb .ace_comment{font-style:italic;
color:#44444E;}
.ace-glitterbomb .ace_variable{color:#AE5251;}
.ace-glitterbomb .ace_meta.ace_tag{color:#AAD7EF;}
`;

(ace as any).define("ace/theme/glitterbomb-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/glitterbomb", ["require", "exports", "module", "ace/theme/glitterbomb-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-glitterbomb";
	exports.cssText = require("./glitterbomb-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
