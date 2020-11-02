# madlib-template-parser

A minimal parser for Mad Libs templates

## Progress

Work in progress

## Planned features

Support is planned for the following types of English words as blanks:

- Nouns
  - Singular (e.g. boy, country, bridge, city)
  - Plural (e.g. boys, countries, bridges, cities)
  - Proper (e.g. Steven, Africa, London, Monday)
  - Collective (e.g. family, government, audience, team, jury)
- Verbs
  - Root (e.g. go, do, show, eat)
  - Third person singular (e.g. watches, shrinks, does)
  - Present participle (e.g. coming, drawing, washing)
  - Simple past (e.g. sang, saw, fell, gave, went)
  - Past participle (e.g. sung, seen, fallen, given, gone)
- Adjectives
  - Descriptive: describes (pro)nouns (e.g. fast, hungry, flying)
  - Quantitative (e.g. twenty, three, whole)
  - Proper (e.g. American, Chinese, Marxist)
- Adverbs
  - Degree (e.g. almost, enough, just, hardly)
  - Frequency (e.g. always, never, seldom, normally)
  - Manner (e.g. beautifully, gorgeously, patiently)
  - Place (e.g. above, below, under, within)
  - Time (e.g. yesterday, tomorrow, monthly, daily, recently)

## Example

Example of using the framework (once complete):

```javascript
const mtp = require('madlib-template-parser')

mtp("The   <descriptiveAdjective>  brown <singularNoun> <simplePastVerb> over the lazy <singularNoun> and shouted,\r\n\r\n\"That was easy!\"")

// Output:
/*
  [
    [
      { type: 'text', text: 'The' },
      { type: 'blank', class: 'adjective', variant: 'descriptive' },
      { type: 'text', text: 'brown' },
      { type: 'blank', class: 'noun', variant: 'singular' },
      { type: 'blank', class: 'verb', variant: 'simple past' },
      { type: 'text', text: 'over' },
      { type: 'text', text: 'the' },
      { type: 'text', text: 'lazy' },
      { type: 'blank', class: 'noun', variant: 'singular' },
      { type: 'text', text: 'and' },
      { type: 'text', text: 'shouted,' }
    ],
    [
      { type: 'text', text: '"That' },
      { type: 'text', text: 'was' },
      { type: 'text', text: 'easy!"' }
    ]
  ]
/*
```

## License

GPLv3 or any later version at your discretion
