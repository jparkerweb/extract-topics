// ------------
// -- import --
// ------------
import lda from 'ldawithmorelanguages';
import { parseSentences } from 'sentence-parse';


// ------------------------------
// -- extract topics from text --
// ------------------------------
export async function extractTopics(text, {
    numTopics = 2,
    numTerms = 5
} = {}) {
    // Parse the text into sentences
    const documents = await parseSentences(text, {
        removeStartLineSequences: ['>'],
        preserveHTMLBreaks: true,
        preserveListItems: true,
        listItemPrefix: '* ',
        excludeNonLetterSentences: true,
    });
    
    // Run LDA to extract topics
    const result = lda(documents, numTopics, numTerms);
    
    // return the result
    return result;
}
