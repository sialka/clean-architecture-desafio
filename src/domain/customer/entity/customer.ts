import Entity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notification/notification.error";
import CustomerValidatorFactory from "../factory/customer.factory.validator";
import Address from "./../value-object/address";

export default class Customer extends Entity{
    
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;
    private _rewardPoints: number = 0;;

    constructor(id: string, name: string) {
        super();
        this._id = id;
        this._name = name;    
        this.validate();

        if(this.notification.hasErrors()){                       
            throw new NotificationError(this.notification.getErrors());            
        }
    }

    // Metodo para uso do Test
    get name(): string {
        return this._name
    }

    validate(){
        CustomerValidatorFactory.create().validate(this); 
    }

    changeName(name: string){
        this._name = name;
        this.validate();
    }

    changeAddress(address: Address){
        this._address = address;        
    }

    isActive(): boolean{
        return this._active;
    }

    activate(){
        if (this._address === undefined){
            throw new Error("Address is mandatory to activate a customer");
        }
        this._active = true;
    }

    deactivate(){
        this._active = false;
    }

    set Address(address: Address){
        this._address = address
    }

    get Address(): Address{
        return this._address
    }
    
    addRewardPoints(points: number){
        this._rewardPoints += points;
    }

    get rewardPoints(): number{
        return this._rewardPoints;
    }

}
