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
