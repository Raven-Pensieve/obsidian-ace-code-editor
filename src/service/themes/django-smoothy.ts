import * as ace from "ace-builds";

const cssText = `
.ace-django-smoothy .ace_gutter {
  background: #245032;
  color: rgb(142, 164, 149);
}

.ace-django-smoothy .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-django-smoothy {
  background-color: #245032;
  color: #F8F8F8;
}

.ace-django-smoothy .ace_cursor {
  color: #336442;
}

.ace-django-smoothy .ace_marker-layer .ace_selection {
  background: #336442;
}

.ace-django-smoothy.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #245032;
  border-radius: 2px;
}

.ace-django-smoothy .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-django-smoothy .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #0B2F20;
}

.ace-django-smoothy .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.29);
}

.ace-django-smoothy .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.29);
}

.ace-django-smoothy .ace_marker-layer .ace_selected-word {
  border: 1px solid #336442;
}

.ace-django-smoothy .ace_fold {
    background-color: #96DD3B;
    border-color: #F8F8F8;
}
.ace-django-smoothy .ace_keyword{color:#96DD3B;}
.ace-django-smoothy .ace_constant{font-style:italic;
font-weight:bold;
color:#9CF340;}
.ace-django-smoothy .ace_support{color:#9DF39F;}
.ace-django-smoothy .ace_support.ace_function{color:#FFE862;}
.ace-django-smoothy .ace_support.ace_constant{color:#EB939A;}
.ace-django-smoothy .ace_storage{font-weight:bold;
color:#FFE862;}
.ace-django-smoothy .ace_invalid{background-color:#94DA3A;}
.ace-django-smoothy .ace_string{font-style:italic;
color:#E1FFB8;}
.ace-django-smoothy .ace_string.ace_regexp{color:#FFB454;}
.ace-django-smoothy .ace_comment{color:#FD6209;}
.ace-django-smoothy .ace_variable{font-style:italic;
font-weight:bold;
color:#FB9A4B;}
.ace-django-smoothy .ace_meta.ace_tag{color:#E8E8E7;}
`;

(ace as any).define("ace/theme/django-smoothy-css", ["require", "exports", "module"], function (require: any, exports: any, module: any) {
	module.exports = cssText;
});

(ace as any).define("ace/theme/django-smoothy", ["require", "exports", "module", "ace/theme/django-smoothy-css", "ace/lib/dom"], function (require: any, exports: any, module: any) {
	exports.isDark = true;
	exports.cssClass = "ace-django-smoothy";
	exports.cssText = require("./django-smoothy-css");
	var dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
