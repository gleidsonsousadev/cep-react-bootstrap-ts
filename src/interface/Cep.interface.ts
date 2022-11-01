export interface ICep {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
	erro?: boolean
}

export interface IError {
	erro: boolean
}

export interface IApiData {
	data: ICep
}

