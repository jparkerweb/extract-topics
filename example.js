import { extractTopics } from './extractTopics.js';
import { parseSentences } from 'sentence-parse';
import { readFileSync } from 'fs';

// Read and process the text file
const text = readFileSync('example.txt', 'utf-8');
const documents = await parseSentences(text, {
	removeStartLineSequences: ['>'],
	preserveHTMLBreaks: true,
	preserveListItems: true,
	listItemPrefix: '* ',
	excludeNonLetterSentences: true,
});

// Run LDA to extract 2 topics with 5 terms each
const result = extractTopics(documents, {
	numTopics: 2,
	numTerms: 5
});

// Print results
result.forEach((topic, i) => {
	console.log(`\nTopic ${i + 1}:`);
	console.log('----------------');
	topic.forEach(term => {
		console.log(`${term.term} (${(term.probability * 100).toFixed(2)}%)`);
	});
});
