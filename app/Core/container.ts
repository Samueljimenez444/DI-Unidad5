import { Container } from "inversify";
import "reflect-metadata";
import { 
    IRepositoryPersonas, 
    PersonasRepository,
    PersonasRepositoryVacio,
    PersonasRepository100
} from "../Model/data/PersonaRepositorio";
import { PeopleListVM } from "../ViewModel/ViewModelVM";
import { TYPES } from "../Core/type";

const container = new Container();

// Vinculamos las interfaces con sus implementaciones concretas

container.bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas100).to(PersonasRepository100);
container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);

export { container };