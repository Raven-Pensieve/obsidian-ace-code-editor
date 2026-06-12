import * as ace from "ace-builds";

const cssText = `
.ace-bespin .ace_gutter {
  background: #28211C;
  color: rgb(113, 104, 93);
}

.ace-bespin .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-bespin {
  background-color: #28211C;
  color: #BAAE9E;
}

.ace-bespin .ace_cursor {
  color: #A7A7A7;
}

.ace-bespin .ace_marker-layer .ace_selection {
  background: rgba(221, 240, 255, 0.20);
}

.ace-bespin.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #28211C;
  border-radius: 2px;
}

.ace-bespin .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-bespin .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.ace-bespin .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.031);
}

.ace-bespin .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.031);
}

.ace-bespin .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(221, 240, 255, 0.20);
}

.ace-bespin .ace_fold {
    background-color: #5EA6EA;
    border-color: #BAAE9E;
}
.ace-bespin .ace_keyword{color:#5EA6EA;}
.ace-bespin .ace_constant{color:#CF6A4C;}
.ace-bespin .ace_support{color:#9B859D;}
.ace-bespin .ace_support.ace_function{color:#DAD085;}
.ace-bespin .ace_support.ace_constant{color:#CF6A4C;}
.ace-bespin .ace_storage{color:#F9EE98;}
.ace-bespin .ace_invalid.ace_illegal{color:#F8F8F8;
background-color:rgba(86, 45, 86, 0.75);}
.ace-bespin .ace_invalid.ace_deprecated{text-decoration:underline;
font-style:italic;
color:#D2A8A1;}
.ace-bespin .ace_string{color:#54BE0D;}
.ace-bespin .ace_string.ace_regexp{color:#E9C062;}
.ace-bespin .ace_comment{font-style:italic;
color:#666666;}
.ace-bespin .ace_variable{color:#7587A6;}
.ace-bespin .ace_meta.ace_tag{color:#AC885B;}
.ace-bespin .ace_entity.ace_name.ace_tag{color:#5EA6EA;}
.ace-bespin .ace_markup.ace_heading{color:#CF6A4C;}
.ace-bespin .ace_markup.ace_list{color:#F9EE98;}
`;

ace.define("ace/theme/bespin-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/bespin", ["require", "exports", "module", "ace/theme/bespin-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = true;
	exports.cssClass = "ace-bespin";
	exports.cssText = require("./bespin-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
