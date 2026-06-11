import * as ace from "ace-builds";

const cssText = `
.ace-monokai-for-textmaters-custom .ace_gutter {
  background: #272822;
  color: rgb(144, 144, 138);
}

.ace-monokai-for-textmaters-custom .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-monokai-for-textmaters-custom {
  background-color: #272822;
  color: #F8F8F2;
}

.ace-monokai-for-textmaters-custom .ace_cursor {
  color: #DE2B7F;
}

.ace-monokai-for-textmaters-custom .ace_marker-layer .ace_selection {
  background: rgba(136, 2, 222, 0.50);
}

.ace-monokai-for-textmaters-custom.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #272822;
  border-radius: 2px;
}

.ace-monokai-for-textmaters-custom .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-monokai-for-textmaters-custom .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #3B3A32;
}

.ace-monokai-for-textmaters-custom .ace_marker-layer .ace_active-line {
  background: rgba(62, 6, 30, 0.29);
}

.ace-monokai-for-textmaters-custom .ace_gutter-active-line {
  background-color: rgba(62, 6, 30, 0.29);
}

.ace-monokai-for-textmaters-custom .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(136, 2, 222, 0.50);
}

.ace-monokai-for-textmaters-custom .ace_fold {
    background-color: #A6E22E;
    border-color: #F8F8F2;
}
.ace-monokai-for-textmaters-custom .ace_keyword{color:#F92672;
background-color:rgba(0, 0, 0, 0.30);}
.ace-monokai-for-textmaters-custom .ace_constant.ace_language{color:#AE81FF;}
.ace-monokai-for-textmaters-custom .ace_constant.ace_numeric{color:#AE81FF;}
.ace-monokai-for-textmaters-custom .ace_constant.ace_character{color:#AE81FF;}
.ace-monokai-for-textmaters-custom .ace_constant.ace_other{color:#AE81FF;}
.ace-monokai-for-textmaters-custom .ace_support.ace_function{color:#66D9EF;
background-color:rgba(249, 255, 217, 0.059);}
.ace-monokai-for-textmaters-custom .ace_support.ace_constant{color:#66D9EF;
background-color:rgba(0, 0, 0, 0.20);}
.ace-monokai-for-textmaters-custom .ace_support.ace_class{color:#3C808D;
background-color:#19353B;}
.ace-monokai-for-textmaters-custom .ace_support.ace_type{color:#3C808D;
background-color:#19353B;}
.ace-monokai-for-textmaters-custom .ace_storage{color:#F92672;}
.ace-monokai-for-textmaters-custom .ace_storage.ace_type{color:#66D9EF;
background-color:rgba(102, 217, 239, 0.50);}
.ace-monokai-for-textmaters-custom .ace_invalid{color:#F8F8F0;
background-color:#FF0000;}
.ace-monokai-for-textmaters-custom .ace_invalid.ace_deprecated{color:#F8F8F0;
background-color:#AE81FF;}
.ace-monokai-for-textmaters-custom .ace_string{color:#E6DB74;}
.ace-monokai-for-textmaters-custom .ace_comment{color:#FFFFFF;
background-color:#DE2B7F;}
.ace-monokai-for-textmaters-custom .ace_variable{color:#A6E22E;}
.ace-monokai-for-textmaters-custom .ace_variable.ace_parameter{color:#E1FF3C;
background-color:rgba(181, 253, 15, 0.23);}
.ace-monokai-for-textmaters-custom .ace_meta.ace_tag{background-color:rgba(204, 255, 0, 0.039);}
.ace-monokai-for-textmaters-custom .ace_entity.ace_other.ace_attribute-name{color:#A6E22E;}
.ace-monokai-for-textmaters-custom .ace_entity.ace_name.ace_function{color:#A6E22E;}
.ace-monokai-for-textmaters-custom .ace_entity.ace_name.ace_tag{color:#F92672;}
`;

(ace as any).define("ace/theme/monokai-for-textmaters-custom-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/monokai-for-textmaters-custom", ["require", "exports", "module", "ace/theme/monokai-for-textmaters-custom-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-monokai-for-textmaters-custom";
	exports.cssText = require("./monokai-for-textmaters-custom-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
