'use strict'
const mtp = require('..')
const tap = require('tap')

tap.test('Example in the README', t => {
  t.strictSame(mtp("The   <descriptiveAdjective>  brown <singularNoun> <simplePastVerb> over the lazy <singularNoun> and shouted,\r\n\r\n\"That was easy!\""), [
    [
      { type: 'text', text: 'The' },
      { type: 'blank', category: 'adjective', variant: 'descriptive' },
      { type: 'text', text: 'brown' },
      { type: 'blank', category: 'noun', variant: 'singular' },
      { type: 'blank', category: 'verb', variant: 'simple past' },
      { type: 'text', text: 'over' },
      { type: 'text', text: 'the' },
      { type: 'text', text: 'lazy' },
      { type: 'blank', category: 'noun', variant: 'singular' },
      { type: 'text', text: 'and' },
      { type: 'text', text: 'shouted,' }
    ],
    [
      { type: 'text', text: '"That' },
      { type: 'text', text: 'was' },
      { type: 'text', text: 'easy!"' }
    ]
  ], 'The parser should work for the example given in the README')
  t.end()
})

tap.test('Throwing on invalid inputs', t => {
  t.throws(() => mtp(42), new TypeError('Template provided must be a string'))
  t.throws(() => mtp('<singularNoun'), new Error('Malformed template - EOF reached before closing \'>\' found'))
  t.throws(() => mtp('<unrecognizedBlank>'), new Error('Malformed template - unrecognized blank type'))
  t.end()
})

tap.test('More inputs and edge cases', t => {
  t.strictSame(mtp('Hello World\n'), [
    [
      { type: 'text', text: 'Hello' },
      { type: 'text', text: 'World' }
    ]
  ])
  t.end()
})
