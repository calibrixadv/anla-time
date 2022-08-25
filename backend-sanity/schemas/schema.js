import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import dateSchema from './dateSchema'
import mainCountdownSchema from './mainCountdownSchema'
import contactSchema from './contactSchema'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    dateSchema,mainCountdownSchema,contactSchema
  ]),
})
