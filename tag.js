let detail={
    material:"cotton",
    category:"sales",
    status:"new arrival",
    Availability:"limited edition"
}

if(Object.values(detail).join(" ").toLowerCase().includes('cotton')){
    console.log("Material: cotton");
}
else if(Object.values(detail).join(" ").toLowerCase().includes('sales items')){
    console.log("Catergory: sales ");
}
else if(Object.values(detail).join(" ").toLowerCase().includes("new arrival")){
 console.log("Statue:New Arrival");
}
else if(Object.values(detail).join(" ").toLowerCase().includes("Limited edition")){
    console.log("Availability:Limited");
}
else{
    console.log("General");
}
