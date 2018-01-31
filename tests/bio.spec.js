import chai from 'chai';
import * as Bio from '../src/bio';

chai.expect();

const expect = chai.expect;

describe('jsBio', () => {
    it('should have version 0.1.0', () => {
        expect(Bio.version).to.be.equal("0.1.0");
    });
    describe('Seq', () => {
        let dna_seq, rna_seq, protein_seq, invalid_dna_seq, invalid_rna_seq;

        before(() => {
            dna_seq = new Bio.Seq('ATGCCGTGA', Bio.Alphabet.unambiguous_dna);
            rna_seq = new Bio.Seq('AUGCCGUGA', Bio.Alphabet.unambiguous_rna);
            protein_seq = new Bio.Seq('MAGICHAT', Bio.Alphabet.protein);
            invalid_dna_seq = new Bio.Seq('ATGCCGTGX', Bio.Alphabet.unambiguous_dna);
            invalid_rna_seq = new Bio.Seq('AUGCCGUGX', Bio.Alphabet.unambiguous_rna);
        });
        describe('reverse', () => {
            it('should work for DNA', () => {
                expect(dna_seq.reverse().sequence).to.equal('AGTGCCGTA');
            });
            it('should work for RNA', () => {
                expect(rna_seq.reverse().sequence).to.equal('AGUGCCGUA');
            });
            it('should work for proteins', () => {
                expect(protein_seq.reverse().sequence).to.equal('TAHCIGAM');
            });
        });
        describe('complement', () => {
            it('should work for DNA', () => {
                expect(dna_seq.complement().sequence).to.equal('TACGGCACT');
            });
            it('should work for RNA', () => {
                expect(rna_seq.complement().sequence).to.equal('UACGGCACU');
            });
            it('should not work for proteins', () => {
                /* Wrap this in a closure to actually see the TypeError */
                expect(() => {protein_seq.complement()}).to.throw('No complement defined for sequence this alphabet');
            });
            it('should return "N" for invalid bases in DNA', () => {
                expect(invalid_dna_seq.complement().sequence).to.equal('TACGGCACN');
            });
            it('should return "N" for invalid bases in RNA', () => {
                expect(invalid_rna_seq.complement().sequence).to.equal('UACGGCACN');
            });
        });
        describe('reverse_complement', () => {
            it('should work for DNA', () => {
                expect(dna_seq.reverse_complement().sequence).to.equal('TCACGGCAT');
            });
            it('should work for RNA', () => {
                expect(rna_seq.reverse_complement().sequence).to.equal('UCACGGCAU');
            });
            it('should not work for proteins', () => {
                /* Wrap this in a closure to actually see the TypeError */
                expect(() => {protein_seq.reverse_complement()}).to.throw('No complement defined for sequence this alphabet');
            });
        });
    });
});
