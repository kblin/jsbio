var jsBio =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Data = exports.Data = {
    IUPACData: {
        protein_letters: "ACDEFGHIKLMNPQRSTVWY",
        /*
         * From http://www.chem.qmul.ac.uk/iupac/AminoAcid/AA212.html,
         * extended to follow the definition from BioPython Bio.Data.IUPACData
         */
        extended_protein_letters: "ACDEFGHIKLMNPQRSTVWYBXZJUO",

        unambiguous_dna_letters: "ACGT",
        ambiguous_dna_letters: "ACGTRYWSMKHBVDN",

        unambiguous_rna_letters: "ACGU",
        ambiguous_rna_letters: "ACGURYWSMKHBVDN"
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ambiguous_rna = exports.IUPACAmbiguousRNA = exports.unambiguous_rna = exports.IUPACUnambiguousRNA = exports.ambiguous_dna = exports.IUPACAmbiguousDNA = exports.unambiguous_dna = exports.IUPACUnambiguousDNA = exports.extended_protein = exports.ExtendedIUPACProtein = exports.protein = exports.IUPACProtein = exports.generic_rna = exports.RNAAlphabet = exports.generic_dna = exports.DNAAlphabet = exports.generic_nucleotide = exports.NucleotideAlphabet = exports.generic_protein = exports.ProteinAlphabet = exports.SingleLetterAlphabet = exports.generic_alphabet = exports.Alphabet = undefined;

var _bio = __webpack_require__(0);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Alphabet = exports.Alphabet = function Alphabet() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var letters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Alphabet);

    this.size = size;
    this.letters = letters;
};

;
var generic_alphabet = exports.generic_alphabet = new Alphabet();

var SingleLetterAlphabet = exports.SingleLetterAlphabet = function (_Alphabet) {
    _inherits(SingleLetterAlphabet, _Alphabet);

    function SingleLetterAlphabet() {
        var letters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, SingleLetterAlphabet);

        return _possibleConstructorReturn(this, (SingleLetterAlphabet.__proto__ || Object.getPrototypeOf(SingleLetterAlphabet)).call(this, 1, letters));
    }

    return SingleLetterAlphabet;
}(Alphabet);

;

var ProteinAlphabet = exports.ProteinAlphabet = function (_SingleLetterAlphabet) {
    _inherits(ProteinAlphabet, _SingleLetterAlphabet);

    function ProteinAlphabet() {
        _classCallCheck(this, ProteinAlphabet);

        return _possibleConstructorReturn(this, (ProteinAlphabet.__proto__ || Object.getPrototypeOf(ProteinAlphabet)).apply(this, arguments));
    }

    return ProteinAlphabet;
}(SingleLetterAlphabet);

;
var generic_protein = exports.generic_protein = new ProteinAlphabet();

var NucleotideAlphabet = exports.NucleotideAlphabet = function (_SingleLetterAlphabet2) {
    _inherits(NucleotideAlphabet, _SingleLetterAlphabet2);

    function NucleotideAlphabet() {
        _classCallCheck(this, NucleotideAlphabet);

        return _possibleConstructorReturn(this, (NucleotideAlphabet.__proto__ || Object.getPrototypeOf(NucleotideAlphabet)).apply(this, arguments));
    }

    return NucleotideAlphabet;
}(SingleLetterAlphabet);

;
var generic_nucleotide = exports.generic_nucleotide = new NucleotideAlphabet();

var DNAAlphabet = exports.DNAAlphabet = function (_NucleotideAlphabet) {
    _inherits(DNAAlphabet, _NucleotideAlphabet);

    function DNAAlphabet() {
        _classCallCheck(this, DNAAlphabet);

        return _possibleConstructorReturn(this, (DNAAlphabet.__proto__ || Object.getPrototypeOf(DNAAlphabet)).apply(this, arguments));
    }

    return DNAAlphabet;
}(NucleotideAlphabet);

;
var generic_dna = exports.generic_dna = new DNAAlphabet();

var RNAAlphabet = exports.RNAAlphabet = function (_NucleotideAlphabet2) {
    _inherits(RNAAlphabet, _NucleotideAlphabet2);

    function RNAAlphabet() {
        _classCallCheck(this, RNAAlphabet);

        return _possibleConstructorReturn(this, (RNAAlphabet.__proto__ || Object.getPrototypeOf(RNAAlphabet)).apply(this, arguments));
    }

    return RNAAlphabet;
}(NucleotideAlphabet);

;
var generic_rna = exports.generic_rna = new DNAAlphabet();

var IUPACProtein = exports.IUPACProtein = function (_ProteinAlphabet) {
    _inherits(IUPACProtein, _ProteinAlphabet);

    function IUPACProtein() {
        _classCallCheck(this, IUPACProtein);

        return _possibleConstructorReturn(this, (IUPACProtein.__proto__ || Object.getPrototypeOf(IUPACProtein)).call(this, _bio.Data.IUPACData.protein_letters));
    }

    return IUPACProtein;
}(ProteinAlphabet);

;
var protein = exports.protein = new IUPACProtein();

var ExtendedIUPACProtein = exports.ExtendedIUPACProtein = function (_ProteinAlphabet2) {
    _inherits(ExtendedIUPACProtein, _ProteinAlphabet2);

    function ExtendedIUPACProtein() {
        _classCallCheck(this, ExtendedIUPACProtein);

        return _possibleConstructorReturn(this, (ExtendedIUPACProtein.__proto__ || Object.getPrototypeOf(ExtendedIUPACProtein)).call(this, _bio.Data.IUPACData.extended_protein_letters));
    }

    return ExtendedIUPACProtein;
}(ProteinAlphabet);

;
var extended_protein = exports.extended_protein = new ExtendedIUPACProtein();

var IUPACUnambiguousDNA = exports.IUPACUnambiguousDNA = function (_DNAAlphabet) {
    _inherits(IUPACUnambiguousDNA, _DNAAlphabet);

    function IUPACUnambiguousDNA() {
        _classCallCheck(this, IUPACUnambiguousDNA);

        return _possibleConstructorReturn(this, (IUPACUnambiguousDNA.__proto__ || Object.getPrototypeOf(IUPACUnambiguousDNA)).call(this, _bio.Data.IUPACData.unambiguous_dna_letters));
    }

    return IUPACUnambiguousDNA;
}(DNAAlphabet);

;
var unambiguous_dna = exports.unambiguous_dna = new IUPACUnambiguousDNA();

var IUPACAmbiguousDNA = exports.IUPACAmbiguousDNA = function (_DNAAlphabet2) {
    _inherits(IUPACAmbiguousDNA, _DNAAlphabet2);

    function IUPACAmbiguousDNA() {
        _classCallCheck(this, IUPACAmbiguousDNA);

        return _possibleConstructorReturn(this, (IUPACAmbiguousDNA.__proto__ || Object.getPrototypeOf(IUPACAmbiguousDNA)).call(this, _bio.Data.IUPACData.ambiguous_dna_letters));
    }

    return IUPACAmbiguousDNA;
}(DNAAlphabet);

;
var ambiguous_dna = exports.ambiguous_dna = new IUPACAmbiguousDNA();

var IUPACUnambiguousRNA = exports.IUPACUnambiguousRNA = function (_RNAAlphabet) {
    _inherits(IUPACUnambiguousRNA, _RNAAlphabet);

    function IUPACUnambiguousRNA() {
        _classCallCheck(this, IUPACUnambiguousRNA);

        return _possibleConstructorReturn(this, (IUPACUnambiguousRNA.__proto__ || Object.getPrototypeOf(IUPACUnambiguousRNA)).call(this, _bio.Data.IUPACData.unambiguous_rna_letters));
    }

    return IUPACUnambiguousRNA;
}(RNAAlphabet);

;
var unambiguous_rna = exports.unambiguous_rna = new IUPACUnambiguousRNA();

var IUPACAmbiguousRNA = exports.IUPACAmbiguousRNA = function (_RNAAlphabet2) {
    _inherits(IUPACAmbiguousRNA, _RNAAlphabet2);

    function IUPACAmbiguousRNA() {
        _classCallCheck(this, IUPACAmbiguousRNA);

        return _possibleConstructorReturn(this, (IUPACAmbiguousRNA.__proto__ || Object.getPrototypeOf(IUPACAmbiguousRNA)).call(this, _bio.Data.IUPACData.ambiguous_rna_letters));
    }

    return IUPACAmbiguousRNA;
}(RNAAlphabet);

;
var ambiguous_rna = exports.ambiguous_rna = new IUPACAmbiguousRNA();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alphabet = exports.Seq = exports.Data = exports.version = undefined;

var _bio = __webpack_require__(0);

Object.defineProperty(exports, "Data", {
  enumerable: true,
  get: function get() {
    return _bio.Data;
  }
});

var _bio2 = __webpack_require__(3);

Object.defineProperty(exports, "Seq", {
  enumerable: true,
  get: function get() {
    return _bio2.Seq;
  }
});

var _bio3 = __webpack_require__(1);

var _alphabet = _interopRequireWildcard(_bio3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**@license Copyright 2013-2018 Kai Blin. Licensed under the Apache-2.0 license, see LICENSE file */

var version = exports.version = '0.1.0';
var Alphabet = exports.Alphabet = _alphabet;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Seq = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Sub-namespace for sequence-related functions */


var _bio = __webpack_require__(1);

var Alphabet = _interopRequireWildcard(_bio);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dna_complements = {
    "A": "T",
    "C": "G",
    "G": "C",
    "T": "A",
    "M": "K",
    "R": "Y",
    "W": "W",
    "S": "S",
    "Y": "R",
    "K": "M",
    "V": "B",
    "H": "D",
    "D": "H",
    "B": "V",
    "N": "N",
    "a": "t",
    "c": "g",
    "g": "c",
    "t": "a",
    "m": "k",
    "r": "y",
    "w": "w",
    "s": "s",
    "y": "r",
    "k": "m",
    "v": "b",
    "h": "d",
    "d": "h",
    "b": "v",
    "n": "n"
};

var rna_complements = {
    "A": "U",
    "C": "G",
    "G": "C",
    "U": "A",
    "M": "K",
    "R": "Y",
    "W": "W",
    "S": "S",
    "Y": "R",
    "K": "M",
    "V": "B",
    "H": "D",
    "D": "H",
    "B": "V",
    "N": "N",
    "a": "u",
    "c": "g",
    "g": "c",
    "u": "a",
    "m": "k",
    "r": "y",
    "w": "w",
    "s": "s",
    "y": "r",
    "k": "m",
    "v": "b",
    "h": "d",
    "d": "h",
    "b": "v",
    "n": "n"
};

function dna_complement_base(base) {
    var complement = dna_complements[base];
    if (!complement) return 'N';
    return complement;
};

function rna_complement_base(base) {
    var complement = rna_complements[base];
    if (!complement) return 'N';
    return complement;
};

var Seq = exports.Seq = function () {
    function Seq(sequence, alphabet) {
        _classCallCheck(this, Seq);

        this.sequence = sequence;
        this.alphabet = alphabet;
    }

    _createClass(Seq, [{
        key: "complement",
        value: function complement() {
            var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var resolv_func = void 0;
            if (this.alphabet instanceof Alphabet.DNAAlphabet) {
                resolv_func = dna_complement_base;
            } else if (this.alphabet instanceof Alphabet.RNAAlphabet) {
                resolv_func = rna_complement_base;
            } else {
                throw { text: "No complement defined for sequence alphabet" };
            }
            var bases = this.sequence.split('');
            if (reverse) {
                bases = bases.reverse();
            }
            var complements = bases.map(resolv_func);
            return new Seq(complements.join(''), this.alphabet);
        }
    }, {
        key: "reverse",
        value: function reverse() {
            return new Seq(this.sequence.split('').reverse().join(''), this.alphabet);
        }
    }, {
        key: "reverse_complement",
        value: function reverse_complement() {
            return this.complement(true);
        }
    }]);

    return Seq;
}();

;

/***/ })
/******/ ]);