import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assests/Folobuy-Icon.jpg";
import {
	LogoIcon,
	Right,
	MenuItem,
	Container,
	Wrapper,
	Left,
	Language,
	SearchContainer,
	Input,
	Center,
} from "./Navbar.styles";

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<LogoIcon src={Logo} alt="Folobuy Logo" />
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<Link to="/cart">
						<MenuItem>
							<Badge badgeContent={2} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
