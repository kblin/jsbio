import {Data} from './bio.data';

export class Alphabet {
    constructor(size=null, letters=null) {
        this.size = size;
        this.letters = letters;
    }
};
export const generic_alphabet = new Alphabet();

export class SingleLetterAlphabet extends Alphabet {
    constructor(letters=null) {
        super(1, letters);
    }
};

export class ProteinAlphabet extends SingleLetterAlphabet {};
export const generic_protein = new ProteinAlphabet();

export class NucleotideAlphabet extends SingleLetterAlphabet {};
export const generic_nucleotide = new NucleotideAlphabet();

export class DNAAlphabet extends NucleotideAlphabet {};
export const generic_dna = new DNAAlphabet();

export class RNAAlphabet extends NucleotideAlphabet {};
export const generic_rna = new DNAAlphabet();

export class IUPACProtein extends ProteinAlphabet {
    constructor() {
        super(Data.IUPACData.protein_letters);
    }
};
export const protein = new IUPACProtein();

export class ExtendedIUPACProtein extends ProteinAlphabet {
    constructor() {
        super(Data.IUPACData.extended_protein_letters);
    }
};
export const extended_protein = new ExtendedIUPACProtein();

export class IUPACUnambiguousDNA extends DNAAlphabet {
    constructor() {
        super(Data.IUPACData.unambiguous_dna_letters);
    }
};
export const unambiguous_dna = new IUPACUnambiguousDNA();

export class IUPACAmbiguousDNA extends DNAAlphabet {
    constructor() {
        super(Data.IUPACData.ambiguous_dna_letters);
    }
};
export const ambiguous_dna = new IUPACAmbiguousDNA();

export class IUPACUnambiguousRNA extends RNAAlphabet {
    constructor() {
        super(Data.IUPACData.unambiguous_rna_letters);
    }
};
export const unambiguous_rna = new IUPACUnambiguousRNA();

export class IUPACAmbiguousRNA extends RNAAlphabet {
    constructor() {
        super(Data.IUPACData.ambiguous_rna_letters);
    }
};
export const ambiguous_rna = new IUPACAmbiguousRNA();
