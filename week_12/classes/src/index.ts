import { measure, once } from "helpful-decorators";

class DateClass{
    private timeZone : string
    constructor(timeZone : string){
        this.timeZone = timeZone; 
    }

    //@measure
    getTime(){
        var d = new Date();
        console.log("hi from getTime")
        return d.getTime();
    }
    getMonth(){
        var d = new Date();
        return d.getMonth();
    }
    getTimezone(){
        return this.timeZone;
    }
 
    expensiveOperation(){
        let ctr = 0;
        for(let i = 0; i < 10000000000; i++){
            ctr++;
        }
        console.log(ctr);
    }
}

const dataObj = new DateClass("IND");
const res = dataObj.getTime();
dataObj.getTime()
dataObj.getTime()
dataObj.getTime()
console.log(dataObj.expensiveOperation());
console.log(res);