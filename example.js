import lda from 'ldawithmorelanguages';
import sentencize from '@stdlib/nlp-sentencize';
import { readFileSync } from 'fs';

// Read and process the text file
const text = readFileSync('example.txt', 'utf-8');
const documents = sentencize(text);

// Run LDA to extract 2 topics with 5 terms each
const result = lda(documents, 3, 7);

// Print results
result.forEach((topic, i) => {
  console.log(`\nTopic ${i + 1}:`);
  console.log('----------------');
  topic.forEach(term => {
    console.log(`${term.term} (${(term.probability * 100).toFixed(2)}%)`);
  });
}); 