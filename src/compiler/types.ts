export type IdentifierToken = { type: 'Identifier', value: string }
export type OpenParenToken = { type: 'OpenParenToken' }
export type CloseParenToken = { type: 'CloseParenToken' }
export type NumericLiteralToken = { type: 'NumericLiteral', value: string }
export type PlusToken = { type: 'PlusToken' }
export type MinusToken = { type: 'MinusToken' }
export type Text = { type: 'Text', value: string  }
export type Comilla = { type: 'ComillaToken'}

export type Token =
  | IdentifierToken
  | OpenParenToken
  | CloseParenToken
  | NumericLiteralToken
  | PlusToken
  | MinusToken
  | Text
  | Comilla

export type AdditiveOperator = PlusToken | MinusToken

export type NumericLiteralNode = { type: 'NumericLiteral', value: string }
export type StringNode = { type: 'Text', value: string }
export type CallExpressionNode = { type: 'CallExpression', identifier: IdentifierToken, argument: Node }
export type CallExpressionNode1 = { type: 'CallExpression1', Text: Text, argument: Node }
export type BinaryExpressionNode = { type: 'BinaryExpression', left: Node, right: Node, operator: AdditiveOperator }

export type Node =
  | StringNode
  | NumericLiteralNode
  | CallExpressionNode
  | BinaryExpressionNode
  | CallExpressionNode1

export type Program = {
  body: Node[]
}