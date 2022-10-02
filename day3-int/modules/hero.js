import { Person } from "./person.js";

export class Hero extends Person{
    // public
    firstname ;
    lastname ;
    // private
    #mission = "my personal mission";
    //static
    static power = 5;
    constructor(hfname, hlname, cwmessage){
        super(cwmessage);
        this.firstname = hfname;
        this.lastname = hlname;
    }
    // public
    sayFullName(){
        return this.firstname+" "+this.lastname;
    }
    // private
    #sayVersion(){
        return 101;
    }
    externalVersion(){
        return this.#sayVersion() * 2;
    }
    get mission(){
        return this.#mission;
    }
    set mission(nmission){
        this.#mission = nmission;
    }
};
