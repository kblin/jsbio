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

Bio.ProteinAlphabet = Bio.SingleLetterAlphabet.extend({
    init: function() {
        this._super();
    }
});
