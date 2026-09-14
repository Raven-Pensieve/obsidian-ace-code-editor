/* global ace, exports, module */

ace.define(
	"ace/mode/hlsl_highlight_rules",
	[
		"require",
		"exports",
		"module",
		"ace/lib/oop",
		"ace/mode/text_highlight_rules",
	],
	function (require, exports) {
		"use strict";

		var oop = require("../lib/oop");
		var TextHighlightRules =
			require("./text_highlight_rules").TextHighlightRules;

		var HlslHighlightRules = function () {
			var keywordControls =
				"break|case|continue|default|discard|do|else|for|if|return|switch|while";
			var declarationKeywords =
				"asm|cbuffer|centroid|class|column_major|compile|compile_fragment|const|export|extern|globallycoherent|groupshared|in|inline|inout|interface|linear|namespace|nointerpolation|noperspective|out|packoffset|pass|precise|register|row_major|sample|shared|snorm|stateblock|static|struct|tbuffer|technique|technique10|technique11|typedef|uniform|unorm|volatile";
			var objectTypes =
				"AppendStructuredBuffer|Buffer|ByteAddressBuffer|ConstantBuffer|ConsumeStructuredBuffer|FeedbackTexture2D|FeedbackTexture2DArray|InputPatch|LineStream|OutputPatch|PointStream|RaytracingAccelerationStructure|RasterizerOrderedBuffer|RasterizerOrderedByteAddressBuffer|RasterizerOrderedStructuredBuffer|RasterizerOrderedTexture1D|RasterizerOrderedTexture1DArray|RasterizerOrderedTexture2D|RasterizerOrderedTexture2DArray|RasterizerOrderedTexture3D|RWBuffer|RWByteAddressBuffer|RWStructuredBuffer|RWTexture1D|RWTexture1DArray|RWTexture2D|RWTexture2DArray|RWTexture3D|SamplerComparisonState|SamplerState|StructuredBuffer|Texture1D|Texture1DArray|Texture2D|Texture2DArray|Texture2DMS|Texture2DMSArray|Texture3D|TextureBuffer|TextureCube|TextureCubeArray|TriangleStream|matrix|sampler|sampler1D|sampler2D|sampler3D|samplerCUBE|sampler_state|vector";
			var floatBases = [
				"double",
				"float",
				"float16_t",
				"float32_t",
				"float64_t",
				"half",
				"min10float",
				"min16float",
			];
			var signedIntegerBases = [
				"dword",
				"int",
				"int16_t",
				"int32_t",
				"int64_t",
				"min12int",
				"min16int",
			];
			var unsignedIntegerBases = [
				"min16uint",
				"uint",
				"uint16_t",
				"uint32_t",
				"uint64_t",
			];
			var expandNumericTypes = function (bases) {
				var types = bases.slice();
				bases.forEach(function (base) {
					for (var columns = 1; columns <= 4; columns++) {
						types.push(base + columns);
						for (var rows = 1; rows <= 4; rows++) {
							types.push(base + columns + "x" + rows);
						}
					}
				});
				return types.join("|");
			};
			var boolTypes = ["bool"];
			for (var boolColumns = 1; boolColumns <= 4; boolColumns++) {
				boolTypes.push("bool" + boolColumns);
				for (var boolRows = 1; boolRows <= 4; boolRows++) {
					boolTypes.push("bool" + boolColumns + "x" + boolRows);
				}
			}
			var intrinsics =
				"abort|abs|acos|all|AllMemoryBarrier|AllMemoryBarrierWithGroupSync|any|asdouble|asfloat|asin|asint|asuint|atan|atan2|CalculateLevelOfDetail|CalculateLevelOfDetailUnclamped|ceil|CheckAccessFullyMapped|clamp|clip|cos|cosh|countbits|cross|D3DCOLORtoUBYTE4|ddx|ddx_coarse|ddx_fine|ddy|ddy_coarse|ddy_fine|degrees|determinant|DeviceMemoryBarrier|DeviceMemoryBarrierWithGroupSync|distance|dot|dst|errorf|EvaluateAttributeAtCentroid|EvaluateAttributeAtSample|EvaluateAttributeSnapped|exp|exp2|f16tof32|f32tof16|faceforward|firstbithigh|firstbitlow|floor|fma|fmod|frac|frexp|fwidth|Gather|GatherAlpha|GatherBlue|GatherCmp|GatherGreen|GatherRed|GetDimensions|GetRenderTargetSampleCount|GetRenderTargetSamplePosition|GroupMemoryBarrier|GroupMemoryBarrierWithGroupSync|InterlockedAdd|InterlockedAnd|InterlockedCompareExchange|InterlockedCompareStore|InterlockedExchange|InterlockedMax|InterlockedMin|InterlockedOr|InterlockedXor|isfinite|isinf|isnan|ldexp|length|lerp|lit|Load|log|log10|log2|max|min|modf|msad4|mul|noise|normalize|pow|printf|Process2DQuadTessFactorsAvg|Process2DQuadTessFactorsMax|Process2DQuadTessFactorsMin|ProcessIsolineTessFactors|ProcessQuadTessFactorsAvg|ProcessQuadTessFactorsMax|ProcessQuadTessFactorsMin|ProcessTriTessFactorsAvg|ProcessTriTessFactorsMax|ProcessTriTessFactorsMin|radians|rcp|reflect|refract|reversebits|round|rsqrt|Sample|SampleBias|SampleCmp|SampleCmpLevelZero|SampleGrad|SampleLevel|saturate|sign|sin|sincos|sinh|smoothstep|sqrt|step|Store|tan|tanh|tex1D|tex1Dbias|tex1Dgrad|tex1Dlod|tex1Dproj|tex2D|tex2Dbias|tex2Dgrad|tex2Dlod|tex2Dproj|tex3D|tex3Dbias|tex3Dgrad|tex3Dlod|tex3Dproj|texCUBE|texCUBEbias|texCUBEgrad|texCUBElod|texCUBEproj|transpose|trunc";
			var constants =
				"false|true|FALSE|TRUE|NULL|INFINITY|NAN|FLT_MAX";
			var keywordMapper = this.createKeywordMapper(
				{
					"keyword.control": keywordControls,
					"keyword.declaration": declarationKeywords,
					"storage.type.hlsl.float":
						expandNumericTypes(floatBases),
					"storage.type.hlsl.signed":
						expandNumericTypes(signedIntegerBases),
					"storage.type.hlsl.unsigned":
						expandNumericTypes(unsignedIntegerBases),
					"storage.type.hlsl.bool": boolTypes.join("|"),
					"storage.type.hlsl.resource": objectTypes,
					"storage.type.hlsl.void": "void",
					"support.function": intrinsics,
					"constant.language": constants,
				},
				"variable.other",
			);
			var identifier = "[A-Za-z_$][A-Za-z0-9_$]*";
			var escape = "\\\\(?:[\\\\\"'0abfnrtv]|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|.)";
			var assignmentOperator = "(?:<<|>>|[+\\-*/%&|^])?=(?!=)";
			var functionMapper = function (value) {
				var token = keywordMapper(value);
				return token === "variable.other"
					? "entity.name.function"
					: token;
			};
			var assignmentMapper = function (value) {
				var token = keywordMapper(value);
				return token === "variable.other"
					? "variable.other.assignment"
					: token;
			};

			this.$rules = {
				start: [
					{
						token: "comment",
						regex: "\\/\\/.*$",
					},
					{
						token: "comment",
						regex: "\\/\\*",
						next: "comment",
					},
					{
						token: "string",
						regex: '"(?:' + escape + '|[^"\\\\])*"',
					},
					{
						token: "string",
						regex: "'(?:" + escape + "|[^'\\\\])'",
					},
					{
						token: "keyword",
						regex: "#\\s*[A-Za-z_][A-Za-z0-9_]*",
						next: "preprocessor",
					},
					{
						token: "constant.numeric",
						regex: "\\b0[xX][0-9A-Fa-f]+(?:[uU](?:ll|LL|[lL])?|(?:ll|LL|[lL])[uU]?)?\\b",
					},
					{
						token: "constant.numeric",
						regex: "(?:\\b\\d+\\.\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?[fFhHlL]?\\b",
					},
					{
						token: "constant.numeric",
						regex: "\\b\\d+[eE][+-]?\\d+[fFhH]?\\b",
					},
					{
						token: "constant.numeric",
						regex: "\\b\\d+(?:[uU](?:ll|LL|[lL])?|(?:ll|LL|[lL])[uU]?)?\\b",
					},
					{
						token: "support.type.semantic",
						regex: "\\b(?:SV_[A-Za-z][A-Za-z0-9_]*|BINORMAL\\d*|BLENDINDICES\\d*|BLENDWEIGHT\\d*|COLOR\\d*|DEPTH\\d*|FOG\\d*|NORMAL\\d*|POSITION\\d*|PSIZE\\d*|SAMPLE\\d*|TANGENT\\d*|TARGET\\d*|TEXCOORD\\d*)\\b",
						caseInsensitive: true,
					},
					{
						token: "variable.other.property.assignment",
						regex:
							"\\." +
							identifier +
							"(?=\\s*" +
							assignmentOperator +
							")",
					},
					{
						token: [
							"punctuation.operator",
							"variable.other.property",
						],
						regex: "(\\.)(" + identifier + ")",
					},
					{
						token: assignmentMapper,
						regex:
							identifier +
							"(?=\\s*" +
							assignmentOperator +
							")",
					},
					{
						token: functionMapper,
						regex: identifier + "(?=\\s*\\()",
					},
					{
						token: keywordMapper,
						regex: identifier,
					},
					{
						token: "keyword.operator",
						regex: ">>=|<<=|\\+\\+|--|&&|\\|\\||==|!=|<=|>=|[+\\-*\\/%&|^~!<>=]",
					},
					{
						token: "punctuation.operator",
						regex: "[?:,;.]",
					},
					{
						token: "paren.lparen",
						regex: "[[({]",
					},
					{
						token: "paren.rparen",
						regex: "[\\])}]",
					},
					{
						token: "text",
						regex: "\\s+",
					},
				],
				comment: [
					{
						token: "comment",
						regex: "\\*\\/",
						next: "start",
					},
					{
						defaultToken: "comment",
					},
				],
				preprocessor: [
					{
						token: "constant.other",
						regex: "\\s*<[^>]+>",
					},
					{
						token: "string",
						regex: '"(?:' + escape + '|[^"\\\\])*"',
					},
					{
						token: "constant.other.multiline",
						regex: "\\\\$",
						next: "preprocessor",
					},
					{
						token: "meta.preprocessor",
						regex: "$",
						next: "start",
					},
					{
						token: "meta.preprocessor",
						regex: "[^\\\\]+|\\\\(?!$)",
					},
				],
			};

			this.normalizeRules();
		};

		oop.inherits(HlslHighlightRules, TextHighlightRules);
		exports.HlslHighlightRules = HlslHighlightRules;
	},
);

ace.define(
	"ace/mode/hlsl",
	[
		"require",
		"exports",
		"module",
		"ace/lib/oop",
		"ace/mode/c_cpp",
		"ace/mode/hlsl_highlight_rules",
	],
	function (require, exports) {
		"use strict";

		var oop = require("../lib/oop");
		var CppMode = require("./c_cpp").Mode;
		var HlslHighlightRules =
			require("./hlsl_highlight_rules").HlslHighlightRules;

		var Mode = function () {
			CppMode.call(this);
			this.HighlightRules = HlslHighlightRules;
		};
		oop.inherits(Mode, CppMode);

		(function () {
			this.$id = "ace/mode/hlsl";
			this.snippetFileId = "ace/snippets/c_cpp";
		}).call(Mode.prototype);

		exports.Mode = Mode;
	},
);

(function () {
	ace.require(["ace/mode/hlsl"], function (loadedModule) {
		if (typeof module === "object" && typeof exports === "object" && module) {
			module.exports = loadedModule;
		}
	});
})();
