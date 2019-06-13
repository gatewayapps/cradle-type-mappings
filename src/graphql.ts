import {
  CradleTypeMapping,
  BINARY,
  DECIMAL,
  UNIQUE_IDENTIFIER,
  BOOLEAN,
  INTEGER,
  STRING,
  DATETIME,
  NULL_PATTERN,
  NOT_NULL_PATTERN,
  ARRAY_PATTERN
} from './TypeMapping'

const mapping: CradleTypeMapping = {
  [BINARY]: 'String',
  [DECIMAL]: 'Float',
  [DATETIME]: 'Date',
  [BOOLEAN]: 'Boolean',
  [INTEGER]: 'Int',
  [STRING]: 'String',
  [UNIQUE_IDENTIFIER]: 'String',
  [NULL_PATTERN]: '{{Type}}',
  [NOT_NULL_PATTERN]: '{{Type}}!',
  [ARRAY_PATTERN]: '[{{Type}}!]!'
}

export default mapping
