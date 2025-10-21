import { injectable } from "inversify";
import { Persona } from "../entities/Persona";

export interface IRepositoryPersonas {
    getListadoCompletoPersonas(): Persona[];
}

@injectable()
export class PersonasRepository implements IRepositoryPersonas {
    getListadoCompletoPersonas(): Persona[] {
        return [
            new Persona(1, 'Fernando', 'Galiana Fernández'),
            new Persona(2, 'Carlos', 'Martínez López'),
            new Persona(3, 'Ana', 'Rodríguez Pérez'),
            new Persona(4, 'Miguel', 'Sánchez Ruiz'),
            new Persona(5, 'Laura', 'Torres Díaz'),
            new Persona(6, 'David', 'Moreno García'),
        ];
    }
}

@injectable()
export class PersonasRepositoryVacio implements IRepositoryPersonas {
    getListadoCompletoPersonas(): Persona[] {
        return [];
    }
}

@injectable()
export class PersonasRepository100 implements IRepositoryPersonas {
    getListadoCompletoPersonas(): Persona[] {
        const nombres = [
            'Carlos', 'Ana', 'Miguel', 'Laura', 'David', 'María', 'José',
            'Carmen', 'Antonio', 'Isabel', 'Manuel', 'Dolores', 'Francisco',
            'Pilar', 'Javier', 'Teresa', 'Daniel', 'Rosa', 'Sergio', 'Lucía'
        ];
        
        const apellidos = [
            'García', 'Martínez', 'López', 'Sánchez', 'González', 'Pérez',
            'Rodríguez', 'Fernández', 'Díaz', 'Torres', 'Ruiz', 'Moreno',
            'Álvarez', 'Romero', 'Jiménez', 'Navarro', 'Muñoz', 'Hernández'
        ];

        const personas: Persona[] = [];
        
        for (let i = 1; i <= 100; i++) {
            const nombre = nombres[Math.floor(Math.random() * nombres.length)];
            const apellido1 = apellidos[Math.floor(Math.random() * apellidos.length)];
            const apellido2 = apellidos[Math.floor(Math.random() * apellidos.length)];
            
            personas.push(new Persona(i, nombre, `${apellido1} ${apellido2}`));
        }
        
        return personas;
    }
}