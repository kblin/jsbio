module("Bio.Alphabet Tests");
test("instantiation", function(){
    var a = null;
    ok(a == null);
    a = new Bio.Alphabet();
    ok(a instanceof Bio.Alphabet);
});

test("letters", function(){
    var a = new Bio.Alphabet();
    ok(a.letters == null);
});

test("size", function(){
    var a = new Bio.Alphabet();
    ok(a.size == null);
});

test("Bio.generic_alphabet instance", function(){
    ok(Bio.generic_alphabet instanceof Bio.Alphabet);
});

module("Bio.SingleLetterAlphabet Tests");
test("instantiation", function(){
    var a = null;
    ok(a == null);
    a = new Bio.SingleLetterAlphabet();
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});

test("letters", function(){
    var a = new Bio.SingleLetterAlphabet();
    ok(a.letters == null);
});

test("size", function(assert){
    var a = new Bio.SingleLetterAlphabet();
    assert.equal(a.size, 1);
});

test("instantiation", function(){
    var a = null;
    ok(a == null);
    a = new Bio.ProteinAlphabet();
    ok(a instanceof Bio.ProteinAlphabet);
    ok(a instanceof Bio.SingleLetterAlphabet);
    ok(a instanceof Bio.Alphabet);
});
