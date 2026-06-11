import * as ace from "ace-builds";

const cssText = `
.ace-birds-of-paradise .ace_gutter {
  background: #372725;
  color: rgb(143, 132, 117);
}

.ace-birds-of-paradise .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-birds-of-paradise {
  background-color: #372725;
  color: #E6E1C4;
}

.ace-birds-of-paradise .ace_cursor {
  color: #E6E1C4;
}

.ace-birds-of-paradise .ace_marker-layer .ace_selection {
  background: #16120E;
}

.ace-birds-of-paradise.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #372725;
  border-radius: 2px;
}

.ace-birds-of-paradise .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-birds-of-paradise .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #42302D;
}

.ace-birds-of-paradise .ace_marker-layer .ace_active-line {
  background: #1F1611;
}

.ace-birds-of-paradise .ace_gutter-active-line {
  background-color: #1F1611;
}

.ace-birds-of-paradise .ace_marker-layer .ace_selected-word {
  border: 1px solid #16120E;
}

.ace-birds-of-paradise .ace_fold {
    background-color: #EFAC32;
    border-color: #E6E1C4;
}
.ace-birds-of-paradise .ace_keyword{color:#EF5D32;}
.ace-birds-of-paradise .ace_constant{color:#6C99BB;}
.ace-birds-of-paradise .ace_constant.ace_language{color:#6C99BB;}
.ace-birds-of-paradise .ace_constant.ace_numeric{color:#6C99BB;}
.ace-birds-of-paradise .ace_constant.ace_character.ace_escape{color:#7DAF9C;}
.ace-birds-of-paradise .ace_support.ace_function{color:#EFAC32;}
.ace-birds-of-paradise .ace_support.ace_constant{color:#6C99BB;}
.ace-birds-of-paradise .ace_support.ace_type{color:#EFAC32;}
.ace-birds-of-paradise .ace_storage{color:#EF5D32;}
.ace-birds-of-paradise .ace_invalid{color:#FFFFFF;
background-color:#990000;}
.ace-birds-of-paradise .ace_string{color:#D9D762;}
.ace-birds-of-paradise .ace_comment{font-style:italic;
color:#6B4E32;}
.ace-birds-of-paradise .ace_variable{color:#EFAC32;}
.ace-birds-of-paradise .ace_variable.ace_language{color:#7DAF9C;}
.ace-birds-of-paradise .ace_meta.ace_tag{color:#EFCB43;}
.ace-birds-of-paradise .ace_entity.ace_other.ace_attribute-name{color:#EFCB43;}
.ace-birds-of-paradise .ace_entity.ace_name.ace_function{color:#EFAC32;}
.ace-birds-of-paradise .ace_entity.ace_name{font-weight:bold;
color:#EFAC32;}
.ace-birds-of-paradise .ace_entity.ace_name.ace_tag{color:#EFCB43;}
`;

(ace as any).define("ace/theme/birds-of-paradise-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/birds-of-paradise", ["require", "exports", "module", "ace/theme/birds-of-paradise-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-birds-of-paradise";
	exports.cssText = require("./birds-of-paradise-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
