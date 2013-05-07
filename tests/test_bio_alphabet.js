module("Bio.Alphabet Tests");
test("Alphabet instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.Alphabet();
    ok(a instanceof Bio.Alphabet);
});

test("Alphabet letters", function(){
    var a = new Bio.Alphabet();
    ok(a.letters === null);
});

test("Alphabet size", function(){
    var a = new Bio.Alphabet();
    ok(a.size === null);
});

test("Bio.generic_alphabet instance", function(){
    ok(Bio.generic_alphabet instanceof Bio.Alphabet);
});

test("SingleLetterAlphabet instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.SingleLetterAlphabet();
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("SingleLetterAlphabet letters", function(){
    var a = new Bio.SingleLetterAlphabet();
    ok(a.letters === null);
});

test("SingleLetterAlphabet size", function(assert){
    var a = new Bio.SingleLetterAlphabet();
    assert.equal(a.size, 1);
});

test("ProteinAlphabet instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.ProteinAlphabet();
    ok(a instanceof Bio.ProteinAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("Bio.generic_protein is instance of ProteinAlphabet", function(){
    ok(Bio.generic_protein instanceof Bio.ProteinAlphabet);
});

test("NucleotideAlphabet instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.NucleotideAlphabet();
    ok(a instanceof Bio.NucleotideAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("Bio.generic_nucleotide is instance of NucleotideAlphabet", function(){
    ok(Bio.generic_nucleotide instanceof Bio.NucleotideAlphabet);
});

test("DNAAlphabet instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.DNAAlphabet();
    ok(a instanceof Bio.DNAAlphabet);
    ok(a instanceof Bio.NucleotideAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("Bio.generic_dna is instance of DNAAlphabet", function(){
    ok(Bio.generic_dna instanceof Bio.DNAAlphabet);
});

test("RNAAlphabet instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.RNAAlphabet();
    ok(a instanceof Bio.RNAAlphabet);
    ok(a instanceof Bio.NucleotideAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("Bio.generic_rna is instance of RNAAlphabet", function(){
    ok(Bio.generic_rna instanceof Bio.DNAAlphabet);
});

test("IUPACProtein instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.IUPACProtein();
    ok(a instanceof Bio.IUPACProtein);
    ok(a instanceof Bio.ProteinAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("Bio.protein is instance of IUPACProtein", function(){
    ok(Bio.protein instanceof Bio.IUPACProtein);
});

test("ExtendedIUPACProtein instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.ExtendedIUPACProtein();
    ok(a instanceof Bio.ExtendedIUPACProtein);
    ok(a instanceof Bio.ProteinAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("Bio.protein is instance of ExtendedIUPACProtein", function(){
    ok(Bio.extended_protein instanceof Bio.ExtendedIUPACProtein);
});

test("IUPACUnambiguousDNA instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.IUPACUnambiguousDNA();
    ok(a instanceof Bio.IUPACUnambiguousDNA);
    ok(a instanceof Bio.DNAAlphabet);
    ok(a instanceof Bio.NucleotideAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("Bio.IUPACUnambiguousDNA uses correct alphabet", function(assert) {
    var a = new Bio.IUPACUnambiguousDNA();
    assert.equal(a.letters, Bio.Data.IUPACData.unambiguous_dna_letters);
});

test("Bio.unambiguous_dna is instance of IUPACUnambiguousDNA", function(){
    ok(Bio.unambiguous_dna instanceof Bio.IUPACUnambiguousDNA);
});

test("IUPACAmbiguousDNA instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.IUPACAmbiguousDNA();
    ok(a instanceof Bio.IUPACAmbiguousDNA);
    ok(a instanceof Bio.DNAAlphabet);
    ok(a instanceof Bio.NucleotideAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("Bio.IUPACAmbiguousDNA uses correct alphabet", function(assert) {
    var a = new Bio.IUPACAmbiguousDNA();
    assert.equal(a.letters, Bio.Data.IUPACData.ambiguous_dna_letters);
});

test("Bio.ambiguous_dna is instance of IUPACAmbiguousDNA", function(){
    ok(Bio.ambiguous_dna instanceof Bio.IUPACAmbiguousDNA);
});

test("IUPACUnambiguousRNA instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.IUPACUnambiguousRNA();
    ok(a instanceof Bio.IUPACUnambiguousRNA);
    ok(a instanceof Bio.RNAAlphabet);
    ok(a instanceof Bio.NucleotideAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("Bio.IUPACUnambiguousRNA uses correct alphabet", function(assert) {
    var a = new Bio.IUPACUnambiguousRNA();
    assert.equal(a.letters, Bio.Data.IUPACData.unambiguous_rna_letters);
});

test("Bio.unambiguous_rna is instance of IUPACUnambiguousRNA", function(){
    ok(Bio.unambiguous_rna instanceof Bio.IUPACUnambiguousRNA);
});

test("IUPACAmbiguousRNA instantiation", function(){
    var a = null;
    ok(a === null);
    a = new Bio.IUPACAmbiguousRNA();
    ok(a instanceof Bio.IUPACAmbiguousRNA);
    ok(a instanceof Bio.RNAAlphabet);
    ok(a instanceof Bio.NucleotideAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("Bio.IUPACAmbiguousRNA uses correct alphabet", function(assert) {
    var a = new Bio.IUPACAmbiguousRNA();
    assert.equal(a.letters, Bio.Data.IUPACData.ambiguous_rna_letters);
});

test("Bio.ambiguous_rna is instance of IUPACAmbiguousRNA", function(){
    ok(Bio.ambiguous_rna instanceof Bio.IUPACAmbiguousRNA);
});
