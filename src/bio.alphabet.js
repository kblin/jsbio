Bio.Alphabet = Class.extend({
    init: function() {
        this.size = null;
        this.letters = null;
    }
});

Bio.generic_alphabet = new Bio.Alphabet();

Bio.SingleLetterAlphabet = Bio.Alphabet.extend({
    init: function() {
        this._super();
        this.size = 1;
    }
});

Bio.ProteinAlphabet = Bio.SingleLetterAlphabet.extend({});
Bio.generic_protein = new Bio.ProteinAlphabet();

Bio.NucleotideAlphabet = Bio.SingleLetterAlphabet.extend({});
Bio.generic_nucleotide = new Bio.NucleotideAlphabet();

Bio.DNAAlphabet = Bio.NucleotideAlphabet.extend({});
Bio.generic_dna = new Bio.DNAAlphabet();

Bio.RNAAlphabet = Bio.NucleotideAlphabet.extend({});
Bio.generic_rna = new Bio.DNAAlphabet();

Bio.IUPACProtein = Bio.ProteinAlphabet.extend({
    init: function() {
        this._super();
        this.letters = Bio.Data.IUPACData.protein_letters;
    }
});
Bio.protein = new Bio.IUPACProtein();

Bio.ExtendedIUPACProtein = Bio.ProteinAlphabet.extend({
    init: function() {
        this._super();
        this.letters = Bio.Data.IUPACData.extended_protein_letters;
    }
});
Bio.extended_protein = new Bio.ExtendedIUPACProtein();

Bio.IUPACUnambiguousDNA = Bio.DNAAlphabet.extend({
    init: function() {
        this._super();
        this.letters = Bio.Data.IUPACData.unambiguous_dna_letters;
    }
});
Bio.unambiguous_dna = new Bio.IUPACUnambiguousDNA();

Bio.IUPACAmbiguousDNA = Bio.DNAAlphabet.extend({
    init: function() {
        this._super();
        this.letters = Bio.Data.IUPACData.ambiguous_dna_letters;
    }
});
Bio.ambiguous_dna = new Bio.IUPACAmbiguousDNA();

Bio.IUPACUnambiguousRNA = Bio.RNAAlphabet.extend({
    init: function() {
        this._super();
        this.letters = Bio.Data.IUPACData.unambiguous_rna_letters;
    }
});
Bio.unambiguous_rna = new Bio.IUPACUnambiguousRNA();

Bio.IUPACAmbiguousRNA = Bio.RNAAlphabet.extend({
    init: function() {
        this._super();
        this.letters = Bio.Data.IUPACData.ambiguous_rna_letters;
    }
});
Bio.ambiguous_rna = new Bio.IUPACAmbiguousRNA();
