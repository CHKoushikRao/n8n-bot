import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateWorkflow from './Components/CreateWorkflow';

function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 className='text-3xl font-bold underline'>Hello</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<CreateWorkflow />} />
      </Routes>
    </BrowserRouter>
  );
}