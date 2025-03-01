import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './styles.css'
import Dashboard from '@/Dashboard.tsx'
import Finalize from '@/Finalize.tsx'
import Layout from '@/Layout.tsx'
import Results from '@/Results.tsx'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path={'/results/:testId'} element={<Results />} />
            <Route path={'/finalize/:testId'} element={<Finalize />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
