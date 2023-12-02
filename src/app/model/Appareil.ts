
export class Appareil{
  id!:number;
  label!:string;
  description!:string;
  state!:boolean
  photo!:string;
  categorie?: { id: number , label:string, };

}

