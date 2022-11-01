import { categories } from "../../data";
import { Container } from "./Categories.styles";
import CategoryItem from "../CategoryItem";

const Categories = () => {
	return (
		<Container>
			{categories.map((item) => (
				<CategoryItem item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Categories;
