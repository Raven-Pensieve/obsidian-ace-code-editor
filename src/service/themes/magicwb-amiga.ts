import * as ace from "ace-builds";

const cssText = `
.ace-magicwb-amiga .ace_gutter {
  background: #969696;
  color: rgb(75, 75, 75);
}

.ace-magicwb-amiga .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-magicwb-amiga {
  background-color: #969696;
  color: #000000;
}

.ace-magicwb-amiga .ace_cursor {
  color: #FFFFFF;
}

.ace-magicwb-amiga .ace_marker-layer .ace_selection {
  background: #B1B1B1;
}

.ace-magicwb-amiga.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #969696;
  border-radius: 2px;
}

.ace-magicwb-amiga .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174);
}

.ace-magicwb-amiga .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #FF38FF;
}

.ace-magicwb-amiga .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.071);
}

.ace-magicwb-amiga .ace_gutter-active-line {
  background-color: rgba(0, 0, 0, 0.071);
}

.ace-magicwb-amiga .ace_marker-layer .ace_selected-word {
  border: 1px solid #B1B1B1;
}

.ace-magicwb-amiga .ace_fold {
    background-color: #FFA995;
    border-color: #000000;
}
.ace-magicwb-amiga .ace_keyword{font-weight:bold;}
.ace-magicwb-amiga .ace_constant.ace_language{font-weight:bold;
color:#FFA995;}
.ace-magicwb-amiga .ace_constant.ace_numeric{color:#FFFFFF;}
.ace-magicwb-amiga .ace_constant.ace_character{color:#FFA995;
background-color:rgba(0, 0, 255, 0.20);}
.ace-magicwb-amiga .ace_constant.ace_other{color:#FFA995;
background-color:rgba(0, 0, 255, 0.20);}
.ace-magicwb-amiga .ace_support.ace_function{color:#E5B3FF;}
.ace-magicwb-amiga .ace_support.ace_constant{color:#FFFFFF;}
.ace-magicwb-amiga .ace_support.ace_class{color:#FFA995;}
.ace-magicwb-amiga .ace_support.ace_type{color:#FFA995;}
.ace-magicwb-amiga .ace_storage{font-weight:bold;
color:#3A68A3;}
.ace-magicwb-amiga .ace_invalid{color:#FFFFFF;
background-color:#797979;}
.ace-magicwb-amiga .ace_string{color:#FFFFFF;
background-color:rgba(255, 0, 0, 0.20);}
.ace-magicwb-amiga .ace_comment{font-style:italic;
color:#8D2E75;}
.ace-magicwb-amiga .ace_variable{color:#FFA995;}
.ace-magicwb-amiga .ace_variable.ace_language{color:#FFA995;}
.ace-magicwb-amiga .ace_variable.ace_parameter{font-style:italic;}
.ace-magicwb-amiga .ace_entity.ace_other.ace_attribute-name{font-style:italic;
color:#3A68A3;}
.ace-magicwb-amiga .ace_entity.ace_name.ace_function{color:#FFA995;}
.ace-magicwb-amiga .ace_entity.ace_name{font-weight:bold;
color:#0000FF;}
.ace-magicwb-amiga .ace_markup.ace_list{color:#4D4E60;}
`;

ace.define("ace/theme/magicwb-amiga-css", ["require", "exports", "module"], function (require, exports, module) {
	module.exports = cssText;
});

ace.define("ace/theme/magicwb-amiga", ["require", "exports", "module", "ace/theme/magicwb-amiga-css", "ace/lib/dom"], function (require, exports, module) {
	exports.isDark = false;
	exports.cssClass = "ace-magicwb-amiga";
	exports.cssText = require("./magicwb-amiga-css");
	const dom = require("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass, false);
});
