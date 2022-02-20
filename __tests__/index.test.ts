import { hello } from '../src/index'

describe( 'Hello', () => {
  it( 'Should say hello to given name', () => {
      const msg = hello( 'root', 'en' )

      expect( msg )
        .toBe( 'Hello root' )
  } )
} )
