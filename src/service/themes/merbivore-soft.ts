import * as ace from "ace-builds";

const cssText = `
.ace-merbivore-soft .ace_gutter {
  background: #1C1C1C;
  color: rgb(129, 127, 124);
}

.ace-merbivore-soft .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-merbivore-soft {
  background-color: #1C1C1C;
  color: #E6E1DC;
}

.ace-merbivore-soft .ace_cursor {
  color: #FFFFFF;
}

.ace-merbivore-soft .ace_marker-layer .ace_selection {
  background: rgba(57, 34, 67, 0.88);
}

.ace-merbivore-soft.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #1C1C1C;
  border-radius: 2px;
}

.ace-merbivore-soft .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-merbivore-soft .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040;
}

.ace-merbivore-soft .ace_marker-layer .ace_active-line {
  background: #333435;
}

.ace-merbivore-soft .ace_gutter-active-line {
  background-color: #333435;
}

.ace-merbivore-soft .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(57, 34, 67, 0.88);
}

.ace-merbivore-soft .ace_fold {
    background-color: #FC803A;
    border-color: #E6E1DC;
}
.ace-merbivore-soft .ace_keyword{color:#FC803A;}
.ace-merbivore-soft .ace_constant{color:#68C1D8;}
.ace-merbivore-soft .ace_constant.ace_language{color:#E1C582;}
.ace-merbivore-soft .ace_constant.ace_numeric{color:#7FC578;}
.ace-merbivore-soft .ace_constant.ace_character.ace_escape{color:#B3E5B4;}
.ace-merbivore-soft .ace_support.ace_constant{color:#8EC65F;}
.ace-merbivore-soft .ace_support.ace_type{color:#68C1D8;}
.ace-merbivore-soft .ace_storage{color:#FC803A;}
.ace-merbivore-soft .ace_invalid{color:#FFFFFF;
background-color:#FE3838;}
.ace-merbivore-soft .ace_string{color:#8EC65F;}
.ace-merbivore-soft .ace_comment{font-style:italic;
color:#AC4BB8;}
.ace-merbivore-soft .ace_meta.ace_tag{color:#FC803A;}
.ace-merbivore-soft .ace_entity.ace_other.ace_attribute-name{color:#EAF1A3;}
.ace-merbivore-soft .ace_entity.ace_name.ace_tag{color:#FC803A;}
`;

(ace as any).define("ace/theme/merbivore-soft-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/merbivore-soft", ["require", "exports", "module", "ace/theme/merbivore-soft-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-merbivore-soft";
	exports.cssText = require("./merbivore-soft-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
