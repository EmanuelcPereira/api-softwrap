import { Collection } from 'fireorm';
import { IRegister } from '@modules/Registers/domain/models/IRegister';

@Collection('registers')
class Register implements IRegister {
  id: string;
  name: string;
  cpfId: string;
  age: number;
  maritalStatus: string;
  city: string;
  state: string;
}

export default Register;
