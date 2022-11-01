import { useEffect, useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ReactLoading from 'react-loading';

import { getCep } from './services/cep.service';
import { ICep } from './interface/Cep.interface';
import { Cep } from './components/Cep';
import { ShowPlace } from './components/ShowPlace';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { clear } from 'console';

function App() {
	const [cepData, setCepData] = useState<ICep | null>(null);
	const [error, setError] = useState<string>();
	const [loading, setLoading] = useState<boolean>(false);

	function handleCep(cep: string): void {
		setLoading(true);
		getCep(cep)
			.then((resp) => {
				if (resp?.data?.erro) {
					setError('CEP Inválido!');
				} else {
					setCepData(resp.data);
				}
			})
			.catch((err) => {
				setError(err.message);
			})
			.finally(() => setLoading(false));
	}

	useEffect(() => {
		error && setTimeout(() => clearError(), 5000) && setCepData(null);
	}, [error]);

	useEffect(() => {
		(loading || cepData) && clearError();
	}, [loading, cepData]);

	const variant = 'danger';

	function clearError() {
		setError('');
	}

	return (
		<>
			<Container className='container p-4'>
				<Row>
					<Col>
						<h1>Buscar Endereço</h1>
						<Cep handleClick={handleCep} />
						{error && (
							<Alert
								key={variant}
								variant={variant}
								onClose={() => clearError()}
								dismissible
								className='alert'
							>
								{error}
							</Alert>
						)}
					</Col>
				</Row>

				<Row>
					<Col>
						{loading ? (
							<ReactLoading type='bars' color='#ccc' height={70} width={70} />
						) : (
							cepData && <ShowPlace data={cepData} />
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
