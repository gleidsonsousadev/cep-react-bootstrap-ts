import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

interface IProps {
	handleClick(cep: string | undefined): void;
}

export function Cep({ handleClick }: IProps) {
	const [cep, setCep] = useState<string>();

	return (
		<Row className='justify-content-md-center'>
			<Col>
				<Form>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Busca por CEP</Form.Label>
						<Form.Control
							placeholder='Digite um CEP válido'
							onChange={(e) => setCep(e.target.value)}
						/>
					</Form.Group>

					<Button variant='primary' onClick={() => handleClick(cep)}>
						Buscar Endereço
					</Button>
				</Form>
			</Col>
		</Row>
	);
}
