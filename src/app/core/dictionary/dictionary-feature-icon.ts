export class DictionayFeatureIcon{
    private map:Map<string,string>
    constructor(){
        this.map= new Map<string, string>();
        this.map.set('Bluetooth','bx bx-bluetooth');
        this.map.set('Bike Rack','bx bx-cycling');
        this.map.set('USB Input','bx bx-usb');
        this.map.set('Pet Friendly','bx bxl-baidu');
        this.map.set('GPS','bx bx-map');
        this.map.set('AC','bx bx-wind');
    }
    returnIcon(feature:string):string{
        if(this.map.get(feature)==undefined){
            return this.map.get('Bluetooh') as string
        }
        return this.map.get(feature) as string
    }
    get size(){
        return this.map.size
    }
}