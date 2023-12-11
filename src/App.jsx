import './styles.css'
import { Box } from '@mui/material'
import Title from './components/Title'
import Border7 from './Border7'

/**
 * Appコンポーネント
 * 1. src/components/Title.jsx から Titleコンポーネントをインポートする
 * 2. src/Border7.jsx から Border7コンポーネントをインポートする
 * 3. JSX内のコメントで示している箇所に Titleコンポーネント, Border7コンポーネントをレンダーする
 *
 * @returns {JSX.Element} App
 */
export default function App() {
  return (
    <Box className="app">
      <Title />
      <Border7 />
    </Box>
  )
}
