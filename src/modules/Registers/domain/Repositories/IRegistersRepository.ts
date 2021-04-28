import { IRegister } from '../models/IRegister';

export interface IRegistersRepository {
  create(data: IRegister): Promise<IRegister>;
  save(register: IRegister): Promise<IRegister>;
  remove(register: IRegister): Promise<IRegister>;
}
