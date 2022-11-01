import { popularProducts } from "../../data";
import ProductItem from "../ProductItem";
import { Container } from "./Products.styles";

const Products = () => {
	return (
		<Container>
			{popularProducts.map((item) => (
				<ProductItem item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Products;
