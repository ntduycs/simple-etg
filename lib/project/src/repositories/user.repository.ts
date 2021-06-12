import { IUser } from "@de/entities/user.entity";

export interface IUserRepository {
  findOne: (username: string) => Promise<IUser | null>;
  findAll: () => Promise<IUser[]>;
  save: (user: IUser) => Promise<void>;
  update: (user: IUser) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

class UserRepository implements IUserRepository {
  delete(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<IUser[]> {
    return Promise.resolve([]);
  }

  findOne(username: string): Promise<IUser | null> {
    return Promise.resolve(null);
  }

  save(user: IUser): Promise<void> {
    return Promise.resolve(undefined);
  }

  update(user: IUser): Promise<void> {
    return Promise.resolve(undefined);
  }

}

export default UserRepository;