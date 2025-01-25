# 👽 Extract Topics
Use LDA (Latent Dirichlet Allocation) to extract topics from text

Simple NPM package for using Latent Dirichlet Allocation (LDA) for topic modeling on text inputs.

## Install

Install dependencies:

```bash
npm install extractTopics
```

## Usage

```bash
import { extractTopics } from 'extractTopics';

const result = await extractTopics(text, { numTopics, numTerms });

console.log(result);
```

## API

### topicExtraction(text, options)

Extracts topics from input text using LDA.

#### Parameters

- `text` (string): The input text to analyze
- `options` (object):
  - `numTopics` (number, optional): Number of topics to extract. Default: 2
  - `numTerms` (number, optional): Number of terms per topic. Default: 5

#### Returns

Returns a Promise that resolves to the LDA analysis result.

### Example script

```bash
npm run example
```

The example will:
1. Load sample text documents
2. Apply LDA to extract the main topics
3. Output the discovered topics and their key terms

## About LDA

LDA is an unsupervised learning method that discovers topics in text documents. It views documents as random mixtures over latent topics, where each topic is characterized by a distribution over words.

---

#### Project reference
- https://www.npmjs.com/package/ldawithmorelanguages
