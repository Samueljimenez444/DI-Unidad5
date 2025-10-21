import { Persona } from "@/app/Model/entities/Persona";
import { inject } from "inversify";
import { TYPES } from "../Core/type";
import { IRepositoryPersonas } from "../Model/data/PersonaRepositorio";




export class PeopleListVM {


    private _personasList: Persona[] = [];
    private _personaSeleccionada: Persona;
   


    constructor(
        @inject(TYPES.IRepositoryPersonas100)
        private RepositoryPersonas: IRepositoryPersonas
    ) {


       
        this._personaSeleccionada = new Persona(0, '', '');


        this._personasList = this.RepositoryPersonas.getListadoCompletoPersonas();
     
    }


    public get personasList(): Persona[] {
        return this._personasList;
    }


    public get personaSeleccionada(): Persona {
        return this._personaSeleccionada;
    }


    public set personaSeleccionada(value: Persona) {
        this._personaSeleccionada = value;
       
    }


  }
