import { Card, ListGroup } from 'react-bootstrap/';
import { ICep } from '../interface/Cep.interface';

interface IProps {
	data: ICep | undefined;
}

export function ShowPlace({ data }: IProps) {
	return (
		<>
			<Card style={{ width: '18rem', marginTop: '15px' }}>
				<ListGroup variant='flush'>
					<ListGroup.Item>{data?.logradouro}</ListGroup.Item>
					<ListGroup.Item>
						{data?.bairro}, {data?.localidade}, {data?.uf}
					</ListGroup.Item>
					<ListGroup.Item>{data?.cep}</ListGroup.Item>
				</ListGroup>
			</Card>
		</>
	);
}
