import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Clock } from './pages/clock'
import { Stopwatch } from "./pages/stopwatch";
import './index.css';

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
            <Route element={<Clock />} index />
            <Route element={<Stopwatch />} path="/stopwatch" />
          {/* 
          <Route element={<Room />} path="/room/:roomId" />
          <Route element={<RecordRoomAudio />} path="/room/:roomId/audio" /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}