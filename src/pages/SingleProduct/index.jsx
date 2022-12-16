import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import Footer from "../../components/Footer";
import Infobar from "../../components/Infobar";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import {
	AddContainer,
	Amount,
	AmountContainer,
	Button,
	Container,
	Desc,
	Filter,
	FilterColor,
	FilterContainer,
	FilterSize,
	FilterSizeOption,
	FilterTitle,
	Image,
	ImgContainer,
	InfoContainer,
	Price,
	Title,
	Wrapper,
} from "./SinpleProduct.styles";

const SingleProduct = () => {
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");

	const handleQuantity = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	return (
		<Container>
			<Navbar />
			<Infobar />
			<Wrapper>
				<ImgContainer>
					<Image src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Desc>{product.desc}</Desc>
					<Price>$ {product.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							{product.color?.map((c) => (
								<FilterColor color={c} key={c} onClick={() => setColor(c)} />
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize onChange={(e) => setSize(e.target.value)}>
								{product.size?.map((s) => (
									<FilterSizeOption key={s}>{s}</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove onClick={() => handleQuantity("dec")} />
							<Amount>{quantity}</Amount>
							<Add onClick={() => handleQuantity("inc")} />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default SingleProduct;
