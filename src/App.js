import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="/products/:category">
							<Route index element={<ProductList />} />
						</Route>
						<Route path="/product/:id">
							<Route index element={<SingleProduct />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
