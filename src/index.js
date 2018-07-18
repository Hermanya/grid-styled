import system from 'native-system-components'

export const Box = system({}, {
  // boxSizing: 'border-box' // react native does not support this
},
  'width',
  'space',
  'fontSize',
  'color',
  'flex',
  'order',
  'alignSelf',
)

Box.displayName = 'Box'

export const Flex = system({
  is: Box
}, { display: 'flex' },
  'flexWrap',
  'flexDirection',
  'alignItems',
  'justifyContent'
)

Flex.displayName = 'Flex'
