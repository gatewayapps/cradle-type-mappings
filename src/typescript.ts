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
  [BINARY]: 'ArrayBuffer',
  [DECIMAL]: 'Number',
  [DATETIME]: 'Date',
  [BOOLEAN]: 'Boolean',
  [INTEGER]: 'Number',
  [STRING]: 'string',
  [UNIQUE_IDENTIFIER]: 'string',
  [NULL_PATTERN]: '{{Type}} | null | undefined',
  [NOT_NULL_PATTERN]: '{{Type}}',
  [ARRAY_PATTERN]: '{{Type}}[]'
}

export default mapping
