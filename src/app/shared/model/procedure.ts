import { ProcedureService } from "../../entities/procedure/procedure.service";
import { Injectable } from "@angular/core";

@Injectable()
export class Procedure {
    public procedureId: number;
    public procedureName: string;
    public procedureCode: string;
    public procedureDesc: string;
    public rate: number;    
    public ruv: string;
    public ruvAmount: number;
    public statusId: number;
    public createdBy: string;
    public createdDate: Date;
    public updatedBy: string;
    public updatedDate: string;

    constructor(private myService: ProcedureService) {

    }

    public create(procedure: Procedure){
        if(!procedure) throw new Error("Procedure data to create is invalid.");
        if(!procedure.createdBy) throw new Error("Created by is required.")
        if(procedure.statusId != 1) procedure.statusId = 1;     //always 1 when creating a new record
        if(procedure.ruv) {
            if(procedure.ruv.length > 5) throw new Error("Length of RUV is too long.\n\r\n\rLength is limited to max of 5 characters only.")
        }

        return this.myService.create(procedure);
    }

    public read(prmDataSlice: string){
        switch(prmDataSlice.toUpperCase()) { 
            case "ALL": {     
              return this.myService.read();                              
            } 
            case "ACTIVE": {   
              return this.myService.readActive();                              
            } 
            case "INACTIVE": { 
                return this.myService.readInactive();                        
            } 
            case "PERMANENT": {
              return this.myService.readPermanent();              
            }
            case "TEMPORARY": {
              return this.myService.readTemporary();              
            }
            default: { 
                //statements; 
                break; 
            } 
        }               
    }       
       
    public update(procedure: Procedure){
        if(!procedure) throw new Error("Procedure data to update is invalid.");
        if(!procedure.procedureId) throw new Error("Procedure Id to update is invalid.");
        if(!procedure.updatedBy) throw new Error("Updated by is required.");

        return this.myService.update(procedure);
    }

    public delete(prmId: number){
        if(!prmId) throw new Error("Id to delete is invalid.");

        return this.myService.delete(prmId);
    }
}
