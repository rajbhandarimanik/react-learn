import './App.css'
import Gallery from './components/FirstComponent/FirstComponent.tsx'
import { Profile } from './components/FirstComponent/FirstComponent.tsx'

function App() {

  return (
    <>
      <h1>Manik Rajbhandari</h1>
      <p className="read-the-docs">
        I am a product designer learning fullstack web development.
      </p>

      <Gallery />
      <Profile />
    </>
  )
}

export default App
