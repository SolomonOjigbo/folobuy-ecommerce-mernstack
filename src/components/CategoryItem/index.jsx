import { Link } from "react-router-dom";
import { Button, Container, Image, Info, Title } from "./CategoryItem.styles";

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Link to="/">
				<Image src={item.img} />
				<Info>
					<Title>{item.title}</Title>
					<Button>SHOP NOW</Button>
				</Info>
			</Link>
		</Container>
	);
};

export default CategoryItem;
