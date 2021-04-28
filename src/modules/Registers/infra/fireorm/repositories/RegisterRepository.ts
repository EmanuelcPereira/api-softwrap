import { getRepository, getCustomRepository } from 'fireorm';
import Register from '../model/Register';
import { IRegister } from '@modules/Registers/domain/models/IRegister';

export default class Registerrepository {
  private ormRepository: getCustomRepository<Register>;

  constructor() {
    this.ormRepository = getRepository(Register);
  }

  public async create({
    id,
    name,
    age,
    cpfId,
    maritalStatus,
    city,
    state,
  }: IRegister): Promise<Register> {
    const register = this.ormRepository.create({
      id,
      name,
      age,
      cpfId,
      maritalStatus,
      city,
      state,
    });

    await this.ormRepository.save(register);

    return register;
  }

  public async save(register: Register): Promise<void> {
    await this.ormRepository.save(register);
  }

  public async remove(register: Register): Promise<void> {
    await this.ormRepository.remove(register);
  }
}
