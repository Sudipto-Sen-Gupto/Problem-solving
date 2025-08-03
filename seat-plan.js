let seatNum;
let seatLimitation=30;
let count1=0;
let count2=0;
let premiumPrice;
let normalPrice;
let totalTicketPrice;
for(seatNum=1;seatNum<=seatLimitation;seatNum++)
{
    if(seatNum%3===0 || seatNum%5===0){
        let ch="premium seat";

        let result=seatNum.toString().concat("=",ch);
        console.log(seatNum,"=Premium seat");
        console.log(result);
        count1++;
       
        premiumPrice =800*count1;
    }
   
    else{
        console.log(seatNum.toString().concat("=","Normal Seat"));
        count2 ++;
        console.log("Normal Seat Cost=500 tk",count2);
        normalPrice=500*count2;
    }
 } console.log(count1);
 console.log(count2);

console.log("Total premium seat price=",premiumPrice);
console.log("Total normal seat price=",normalPrice);

totalTicketPrice=premiumPrice+normalPrice;
console.log(totalTicketPrice);