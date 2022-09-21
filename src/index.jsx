import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <SurveyProvider>
        <GlobalStyle />

        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/survey/:questionNumber" element={<Survey />}></Route>
          <Route path="/freelances" element={<Freelances />}></Route>
          <Route path="/results" element={<Results />}></Route>
          <Route
            path="/freelances/:freelanceId"
            element={<Freelances />}
          ></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>

        <Footer />
      </SurveyProvider>
    </ThemeProvider>
  </BrowserRouter>
)
