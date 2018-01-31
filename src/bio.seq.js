/* Sub-namespace for sequence-related functions */
import * as Alphabet from "./bio.alphabet";

const dna_complements = {
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

const rna_complements = {
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
    let complement = dna_complements[base];
    if (!complement) return 'N';
    return complement;
};

function rna_complement_base(base) {
    let complement = rna_complements[base];
    if (!complement) return 'N';
    return complement;
};

export class Seq {
    constructor(sequence, alphabet) {
        this.sequence = sequence;
        this.alphabet = alphabet;
    }

    complement(reverse=false) {
        let resolv_func;
        if (this.alphabet instanceof Alphabet.DNAAlphabet) {
            resolv_func = dna_complement_base;
        } else if (this.alphabet instanceof Alphabet.RNAAlphabet) {
            resolv_func = rna_complement_base;
        } else {
            throw new TypeError("No complement defined for sequence this alphabet");
        }
        let bases = this.sequence.split('');
        if (reverse) {
            bases = bases.reverse();
        }
        let complements = bases.map(resolv_func);
        return new Seq(complements.join(''), this.alphabet);
    }

    reverse() {
        return new Seq(this.sequence.split('').reverse().join(''), this.alphabet);
    }

    reverse_complement() {
        return this.complement(true);
    }

};
