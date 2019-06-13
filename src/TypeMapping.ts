import { PropertyTypes } from '@gatewayapps/cradle'

export const BINARY = Symbol(PropertyTypes.Binary)
export const BOOLEAN = Symbol(PropertyTypes.Boolean)
export const DATETIME = Symbol(PropertyTypes.DateTime)
export const DECIMAL = Symbol(PropertyTypes.Decimal)
export const INTEGER = Symbol(PropertyTypes.Integer)
export const STRING = Symbol(PropertyTypes.String)
export const UNIQUE_IDENTIFIER = Symbol(PropertyTypes.UniqueIdentifier)

export const NULL_PATTERN = Symbol('NullPattern')
export const NOT_NULL_PATTERN = Symbol('NotNullPattern')
export const ARRAY_PATTERN = Symbol('ArrayPattern')

export type CradleTypeMapping = {
  [BINARY]: string
  [BOOLEAN]: string
  [DATETIME]: string
  [DECIMAL]: string
  [INTEGER]: string
  [STRING]: string
  [UNIQUE_IDENTIFIER]: string
  [NULL_PATTERN]: string
  [NOT_NULL_PATTERN]: string
  [ARRAY_PATTERN]: string
}
