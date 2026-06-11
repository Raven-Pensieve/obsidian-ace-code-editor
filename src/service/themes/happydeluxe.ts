import * as ace from "ace-builds";

const cssText = `
.ace-happydeluxe .ace_gutter {
  background: #0E131E;
  color: rgb(135, 137, 143);
}

.ace-happydeluxe .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-happydeluxe {
  background-color: #0E131E;
  color: #FFFFFF;
}

.ace-happydeluxe .ace_cursor {
  color: #FFFFFF;
}

.ace-happydeluxe .ace_marker-layer .ace_selection {
  background: #15285A;
}

.ace-happydeluxe.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0E131E;
  border-radius: 2px;
}

.ace-happydeluxe .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-happydeluxe .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #646871;
}

.ace-happydeluxe .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.47);
}

.ace-happydeluxe .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.47);
}

.ace-happydeluxe .ace_marker-layer .ace_selected-word {
  border: 1px solid #15285A;
}

.ace-happydeluxe .ace_fold {
    background-color: #FE9006;
    border-color: #FFFFFF;
}
.ace-happydeluxe .ace_keyword{color:#FE9006;}
.ace-happydeluxe .ace_constant.ace_language{color:#14DED1;}
.ace-happydeluxe .ace_support.ace_function{color:#14DED1;}
.ace-happydeluxe .ace_support.ace_constant{color:#14DED1;}
.ace-happydeluxe .ace_support.ace_class{color:#14DED1;}
.ace-happydeluxe .ace_support.ace_type{color:#14DED1;}
.ace-happydeluxe .ace_storage{color:#FE9006;}
.ace-happydeluxe .ace_invalid{color:#FC2D07;}
.ace-happydeluxe .ace_string{color:#FD66F9;}
.ace-happydeluxe .ace_comment{color:#35497C;}
.ace-happydeluxe .ace_variable.ace_language{color:#FFFFFF;}
.ace-happydeluxe .ace_entity.ace_name.ace_tag{color:#14DED1;}
`;

(ace as any).define("ace/theme/happydeluxe-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/happydeluxe", ["require", "exports", "module", "ace/theme/happydeluxe-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-happydeluxe";
	exports.cssText = require("./happydeluxe-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
