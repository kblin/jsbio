export const Data = {
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
        ambiguous_rna_letters: "ACGURYWSMKHBVDN",
    }
};
