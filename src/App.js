import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout'
import Products from './components/Products'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<div>
            orders
          </div>} />
          <Route path="/customers" element={<div>
            customers
          </div>} />
          <Route path="/support" element={<div>
            support
          </div>} />
          <Route path="/settings" element={<div>
            settings
          </div>} />
          <Route path="/messages" element={<div>
            messages
          </div>} />
          <Route path="/logout" element={<div>
            logout
          </div>} />
          </Route>
          <Route path="*" element={<h1>Route does not
            exist</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
