import axios from 'axios';
import { IApiData } from '../interface/Cep.interface';

export function getCep(cep: string): Promise<IApiData> {
    const url = `https://viacep.com.br/ws/${ cep }/json/`
    return axios.get(url);
}
