import * as ace from "ace-builds";

const cssText = `
.ace-django-dark .ace_gutter {
  background: #0A1C12;
  color: rgb(129, 138, 133);
}

.ace-django-dark .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-django-dark {
  background-color: #0A1C12;
  color: #F8F8F8;
}

.ace-django-dark .ace_cursor {
  color: #336442;
}

.ace-django-dark .ace_marker-layer .ace_selection {
  background: #1B381A;
}

.ace-django-dark.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #0A1C12;
  border-radius: 2px;
}

.ace-django-dark .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-django-dark .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #497958;
}

.ace-django-dark .ace_marker-layer .ace_active-line {
  background: rgba(5, 12, 9, 0.29);
}

.ace-django-dark .ace_gutter-active-line {
  background-color: rgba(5, 12, 9, 0.29);
}

.ace-django-dark .ace_marker-layer .ace_selected-word {
  border: 1px solid #1B381A;
}

.ace-django-dark .ace_fold {
    background-color: #73B800;
    border-color: #F8F8F8;
}
.ace-django-dark .ace_keyword{color:#73B800;}
.ace-django-dark .ace_constant{color:#497958;}
.ace-django-dark .ace_support{color:#9DF39F;}
.ace-django-dark .ace_support.ace_function{color:#FFB454;}
.ace-django-dark .ace_support.ace_constant{color:#EB939A;}
.ace-django-dark .ace_storage{font-weight:bold;
color:#FFE862;}
.ace-django-dark .ace_invalid{color:#FFFFFF;
background-color:#FD6209;}
.ace-django-dark .ace_string{color:#91BB9E;}
.ace-django-dark .ace_string.ace_regexp{color:#FFB454;}
.ace-django-dark .ace_comment{font-style:italic;
color:#245032;}
.ace-django-dark .ace_variable{font-style:italic;
color:#FB9A4B;}
.ace-django-dark .ace_meta.ace_tag{color:#497958;}
`;

(ace as any).define("ace/theme/django-dark-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/django-dark", ["require", "exports", "module", "ace/theme/django-dark-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-django-dark";
	exports.cssText = require("./django-dark-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
