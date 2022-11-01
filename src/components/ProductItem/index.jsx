import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Circle, Container, Icon, Image, Info } from "./ProductItem.styles";

const ProductItem = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<Link to="/">
						<SearchOutlined />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default ProductItem;
