import * as ace from "ace-builds";

const cssText = `
.ace-lowlight .ace_gutter {
  background: #1E1E1E;
  color: rgb(116, 116, 116);
}

.ace-lowlight .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-lowlight {
  background-color: #1E1E1E;
  color: #CACACA;
}

.ace-lowlight .ace_cursor {
  color: #595959;
}

.ace-lowlight .ace_marker-layer .ace_selection {
  background: rgba(104, 114, 155, 0.16);
}

.ace-lowlight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #1E1E1E;
  border-radius: 2px;
}

.ace-lowlight .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-lowlight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(101, 100, 38, 0.40);
}

.ace-lowlight .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.078);
}

.ace-lowlight .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.078);
}

.ace-lowlight .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(104, 114, 155, 0.16);
}

.ace-lowlight .ace_fold {
    background-color: #8F8D17;
    border-color: #CACACA;
}
.ace-lowlight .ace_keyword{color:#8F8D17;}
.ace-lowlight .ace_keyword.ace_operator{font-weight:bold;
color:#7AFF79;}
.ace-lowlight .ace_constant{color:#E66C29;}
.ace-lowlight .ace_support{color:#2F8996;}
.ace-lowlight .ace_support.ace_function{color:#EDD34D;}
.ace-lowlight .ace_support.ace_constant{color:#959630;}
.ace-lowlight .ace_storage{color:#7A925F;}
.ace-lowlight .ace_invalid.ace_illegal{text-decoration:underline;
color:#A2A2A2;
background-color:#351D18;}
.ace-lowlight .ace_invalid.ace_deprecated{text-decoration:underline;
color:#D24346;}
.ace-lowlight .ace_string{color:#A57C5C;}
.ace-lowlight .ace_string.ace_regexp{color:#E3965E;}
.ace-lowlight .ace_comment{font-style:italic;
color:#3C5636;
background-color:rgba(17, 43, 10, 0.10);}
.ace-lowlight .ace_variable{font-weight:bold;
color:#77ACB0;}
.ace-lowlight .ace_meta.ace_tag{color:#495573;}
.ace-lowlight .ace_entity.ace_other.ace_attribute-name{color:#B06520;}
.ace-lowlight .ace_entity.ace_name.ace_tag{color:#BAA827;}
.ace-lowlight .ace_markup.ace_heading{color:#CF6A4C;}
.ace-lowlight .ace_markup.ace_list{color:#F9EB77;}
`;

(ace as any).define("ace/theme/lowlight-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/lowlight", ["require", "exports", "module", "ace/theme/lowlight-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-lowlight";
	exports.cssText = require("./lowlight-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
