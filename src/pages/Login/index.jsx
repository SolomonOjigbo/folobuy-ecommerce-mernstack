import { useState } from "react";
import {
	Button,
	Container,
	Form,
	Input,
	LinkText,
	Title,
	Wrapper,
} from "./Login.styles";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = (e) => {
		e.preventDefault();
	};
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input
						placeholder="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						placeholder="password"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button onClick={handleClick}>LOGIN</Button>
					<LinkText>DO NOT YOU REMEMBER THE PASSWORD?</LinkText>
					<LinkText>CREATE A NEW ACCOUNT</LinkText>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
