import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// sobrescrevendo um módulo da biblioteca do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
