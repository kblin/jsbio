module("Bio.Data Tests");

test("Bio.Data exists", function(assert){
    assert.ok(Bio.Data instanceof Object);
});

test("Bio.Data.IUPACData exists", function(assert){
    assert.ok(Bio.Data.IUPACData instanceof Object);
});

test("protein_letters", function(assert){
    var pl = Bio.Data.IUPACData.protein_letters;
    assert.equal(pl.length, 20, "has 20 AAs");
    assert.ok(pl.indexOf('A') > -1, "has Ala");
    assert.ok(pl.indexOf('B') == -1, "doesn't have Asx");
    assert.ok(pl.indexOf('C') > -1, "has Cys");
    assert.ok(pl.indexOf('D') > -1, "has Asp");
    assert.ok(pl.indexOf('E') > -1, "has Glu");
    assert.ok(pl.indexOf('F') > -1, "has Phe");
    assert.ok(pl.indexOf('G') > -1, "has Gly");
    assert.ok(pl.indexOf('H') > -1, "has His");
    assert.ok(pl.indexOf('I') > -1, "has Ile");
    assert.ok(pl.indexOf('J') == -1, "doesn't have Xle");
    assert.ok(pl.indexOf('K') > -1, "has Lys");
    assert.ok(pl.indexOf('L') > -1, "has Leu");
    assert.ok(pl.indexOf('M') > -1, "has Met");
    assert.ok(pl.indexOf('N') > -1, "has Asn");
    assert.ok(pl.indexOf('O') == -1, "doesn't have Pyl");
    assert.ok(pl.indexOf('P') > -1, "has Pro");
    assert.ok(pl.indexOf('Q') > -1, "has Glu");
    assert.ok(pl.indexOf('R') > -1, "has Arg");
    assert.ok(pl.indexOf('S') > -1, "has Ser");
    assert.ok(pl.indexOf('T') > -1, "has Thr");
    assert.ok(pl.indexOf('U') == -1, "doesn't have Sec");
    assert.ok(pl.indexOf('V') > -1, "has Val");
    assert.ok(pl.indexOf('W') > -1, "has Trp");
    assert.ok(pl.indexOf('X') == -1, "doesn't have Xxx");
    assert.ok(pl.indexOf('Y') > -1, "has Tyr");
    assert.ok(pl.indexOf('Z') == -1, "doesn't have Glx");

});

test("extended_protein_letters", function(assert){
    var pl = Bio.Data.IUPACData.extended_protein_letters;
    assert.equal(pl.length, 26, "has 26 AAs");
    assert.ok(pl.indexOf('A') > -1, "has Ala");
    assert.ok(pl.indexOf('B') > -1, "has Asx");
    assert.ok(pl.indexOf('C') > -1, "has Cys");
    assert.ok(pl.indexOf('D') > -1, "has Asp");
    assert.ok(pl.indexOf('E') > -1, "has Glu");
    assert.ok(pl.indexOf('F') > -1, "has Phe");
    assert.ok(pl.indexOf('G') > -1, "has Gly");
    assert.ok(pl.indexOf('H') > -1, "has His");
    assert.ok(pl.indexOf('I') > -1, "has Ile");
    assert.ok(pl.indexOf('J') > -1, "has Xle");
    assert.ok(pl.indexOf('K') > -1, "has Lys");
    assert.ok(pl.indexOf('L') > -1, "has Leu");
    assert.ok(pl.indexOf('M') > -1, "has Met");
    assert.ok(pl.indexOf('N') > -1, "has Asn");
    assert.ok(pl.indexOf('O') > -1, "has Pyl");
    assert.ok(pl.indexOf('P') > -1, "has Pro");
    assert.ok(pl.indexOf('Q') > -1, "has Glu");
    assert.ok(pl.indexOf('R') > -1, "has Arg");
    assert.ok(pl.indexOf('S') > -1, "has Ser");
    assert.ok(pl.indexOf('T') > -1, "has Thr");
    assert.ok(pl.indexOf('U') > -1, "has Sec");
    assert.ok(pl.indexOf('V') > -1, "has Val");
    assert.ok(pl.indexOf('W') > -1, "has Trp");
    assert.ok(pl.indexOf('X') > -1, "has Xxx");
    assert.ok(pl.indexOf('Y') > -1, "has Tyr");
    assert.ok(pl.indexOf('Z') > -1, "has Glx");
});

test("unambiguous_dna_letters", function(assert){
    var dl = Bio.Data.IUPACData.unambiguous_dna_letters;
    assert.equal(dl.length, 4, "has 4 bases");
    assert.ok(dl.indexOf('A') > -1, "has A");
    assert.ok(dl.indexOf('B') == -1, "doesn't have B");
    assert.ok(dl.indexOf('C') > -1, "has C");
    assert.ok(dl.indexOf('D') == -1, "doesn't have D");
    assert.ok(dl.indexOf('G') > -1, "has G");
    assert.ok(dl.indexOf('H') == -1, "doesn't have H");
    assert.ok(dl.indexOf('K') == -1, "doesn't have K");
    assert.ok(dl.indexOf('M') == -1, "doesn't have M");
    assert.ok(dl.indexOf('N') == -1, "doesn't have N");
    assert.ok(dl.indexOf('R') == -1, "doesn't have R");
    assert.ok(dl.indexOf('S') == -1, "doesn't have S");
    assert.ok(dl.indexOf('T') > -1, "has T");
    assert.ok(dl.indexOf('U') == -1, "doesn't have U");
    assert.ok(dl.indexOf('V') == -1, "doesn't have V");
    assert.ok(dl.indexOf('W') == -1, "doesn't have W");
    assert.ok(dl.indexOf('Y') == -1, "doesn't have Y");
});

test("ambiguous_dna_letters", function(assert){
    var dl = Bio.Data.IUPACData.ambiguous_dna_letters;
    assert.equal(dl.length, 15, "has 15 'bases'");
    assert.ok(dl.indexOf('A') > -1, "has A");
    assert.ok(dl.indexOf('B') > -1, "has B");
    assert.ok(dl.indexOf('C') > -1, "has C");
    assert.ok(dl.indexOf('D') > -1, "has D");
    assert.ok(dl.indexOf('G') > -1, "has G");
    assert.ok(dl.indexOf('H') > -1, "has H");
    assert.ok(dl.indexOf('K') > -1, "has K");
    assert.ok(dl.indexOf('M') > -1, "has M");
    assert.ok(dl.indexOf('N') > -1, "has N");
    assert.ok(dl.indexOf('R') > -1, "has R");
    assert.ok(dl.indexOf('S') > -1, "has S");
    assert.ok(dl.indexOf('T') > -1, "has T");
    assert.ok(dl.indexOf('U') == -1, "doesn't have U");
    assert.ok(dl.indexOf('V') > -1, "has V");
    assert.ok(dl.indexOf('W') > -1, "has W");
    assert.ok(dl.indexOf('Y') > -1, "has Y");
});

test("unambiguous_rna_letters", function(assert){
    var dl = Bio.Data.IUPACData.unambiguous_rna_letters;
    assert.equal(dl.length, 4, "has 4 bases");
    assert.ok(dl.indexOf('A') > -1, "has A");
    assert.ok(dl.indexOf('B') == -1, "doesn't have B");
    assert.ok(dl.indexOf('C') > -1, "has C");
    assert.ok(dl.indexOf('D') == -1, "doesn't have D");
    assert.ok(dl.indexOf('G') > -1, "has G");
    assert.ok(dl.indexOf('H') == -1, "doesn't have H");
    assert.ok(dl.indexOf('K') == -1, "doesn't have K");
    assert.ok(dl.indexOf('M') == -1, "doesn't have M");
    assert.ok(dl.indexOf('N') == -1, "doesn't have N");
    assert.ok(dl.indexOf('R') == -1, "doesn't have R");
    assert.ok(dl.indexOf('S') == -1, "doesn't have S");
    assert.ok(dl.indexOf('T') == -1, "doesn't have T");
    assert.ok(dl.indexOf('U') > -1, "has U");
    assert.ok(dl.indexOf('V') == -1, "doesn't have V");
    assert.ok(dl.indexOf('W') == -1, "doesn't have W");
    assert.ok(dl.indexOf('Y') == -1, "doesn't have Y");
});

test("ambiguous_rna_letters", function(assert){
    var dl = Bio.Data.IUPACData.ambiguous_rna_letters;
    assert.equal(dl.length, 15, "has 15 'bases'");
    assert.ok(dl.indexOf('A') > -1, "has A");
    assert.ok(dl.indexOf('B') > -1, "has B");
    assert.ok(dl.indexOf('C') > -1, "has C");
    assert.ok(dl.indexOf('D') > -1, "has D");
    assert.ok(dl.indexOf('G') > -1, "has G");
    assert.ok(dl.indexOf('H') > -1, "has H");
    assert.ok(dl.indexOf('K') > -1, "has K");
    assert.ok(dl.indexOf('M') > -1, "has M");
    assert.ok(dl.indexOf('N') > -1, "has N");
    assert.ok(dl.indexOf('R') > -1, "has R");
    assert.ok(dl.indexOf('S') > -1, "has S");
    assert.ok(dl.indexOf('T') == -1, "doesn't have T");
    assert.ok(dl.indexOf('U') > -1, "has U");
    assert.ok(dl.indexOf('V') > -1, "has V");
    assert.ok(dl.indexOf('W') > -1, "has W");
    assert.ok(dl.indexOf('Y') > -1, "has Y");
});
