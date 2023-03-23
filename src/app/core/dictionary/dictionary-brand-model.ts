export class DictionayBrandModel{
    private map:Map<string,string[]>
    constructor(){
        this.map= new Map<string, string[]>();
        this.map.set('Toyota',['Camry','Corolla','Crown','Fortuner','Hillux','Mirai']);
        this.map.set('Audi',['A3','A4','A5','Q5','Q8','RSQ8']);
        this.map.set('Nissan',['Altima','Armada','Kicks','Rogue','Sentra','Versa']);
        this.map.set('Hyundai',['Accent','Elantra','Santa Fe','Sonata','Tucson','Venue']);
    }
    returnModels(brand:string):string[]{
        if(this.map.get(brand)==undefined){
            return this.map.get('Toyota') as string[]
        }
        return this.map.get(brand) as string[]
    }
}