'use strict'

module.exports = template => {
  if (typeof template !== 'string')
    throw new TypeError('Template provided must be a string')
  let result = []
  let currentParagraph = []
  let i = 0
  let cond = () => i < template.length // save some repetitive typing
  const WHITESPACE = ' \t\r\v\f'.split``
  const BLANK_TYPES = {
    // Nouns
    'singularNoun': { category: 'noun', variant: 'singular' },
    'pluralNoun': { category: 'noun', variant: 'plural' },
    'properNoun': { category: 'noun', variant: 'proper' },
    'collectiveNoun': { category: 'noun', variant: 'collective' },
    // Verbs
    'rootVerb': { category: 'verb', variant: 'root' },
    'thirdPersonSingularVerb': { category: 'verb', variant: 'third person singular' },
    'presentParticipleVerb': { category: 'verb', variant: 'present participle' },
    'simplePastVerb': { category: 'verb', variant: 'simple past' },
    'pastParticipleVerb': { category: 'verb', variant: 'past participle' },
    // Adjectives
    'descriptiveAdjective': { category: 'adjective', variant: 'descriptive' },
    'quantitativeAdjective': { category: 'adjective', variant: 'quantitative' },
    'properAdjective': { category: 'adjective', variant: 'proper' },
    // Adverbs
    'degreeAdverb': { category: 'adverb', variant: 'degree' },
    'frequencyAdverb': { category: 'adverb', variant: 'frequency' },
    'mannerAdverb': { category: 'adverb', variant: 'manner' },
    'placeAdverb': { category: 'adverb', variant: 'place' },
    'timeAdverb': { category: 'adverb', variant: 'time' }
  }
  console.log(WHITESPACE.includes(' '))
  while (cond()) {
    if (template[i] === '<') {
      let j = ++i
      while (cond() && template[i] !== '>')
	++i
      if (!cond())
	throw new Error('Malformed template - EOF reached before closing \'>\' found')
      let token = template.slice(j, i)
      if (!(token in BLANK_TYPES))
	throw new Error('Malformed template - unrecognized blank type')
      currentParagraph.push(Object.assign({ type: 'blank' }, BLANK_TYPES[token]))
      ++i
    } else if (WHITESPACE.includes(template[i])) {
      while (cond() && WHITESPACE.includes(template[i]))
	++i
    } else if (template[i] === '\n') {
      if (currentParagraph.length > 0)
	result.push(currentParagraph)
      currentParagraph = []
      ++i
    } else {
      let j = i
      while (cond() && template[i] !== '<' && !WHITESPACE.includes(template[i]) && template[i] !== '\n')
	++i
      currentParagraph.push({ type: 'text', text: template.slice(j, i) })
    }
  }
  if (currentParagraph.length > 0)
    result.push(currentParagraph)
  return result
}
