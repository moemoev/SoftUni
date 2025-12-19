function phoneShop(input){
    let phones = input.shift().split(", ");
    let cmd = input.shift();

    while (cmd !== 'End'){
        cmd = cmd.split(" - ");

        let action = cmd.shift();
        let phone = cmd.shift();

        if (action === 'Add'){
            if (!phones.includes(phone)){
                phones.push(phone);  
            }
        }else if (action === 'Remove'){
            if (phones.includes(phone)){
                let position = phones.indexOf(phone);
                phones.splice(position, 1);  
            }
        }else if (action === 'Bonus phone'){
            phone = phone.split(":");

            let oldPhone = phone.shift();
            let newPhone = phone.shift();

            if (phones.includes(oldPhone)){
                let position = phones.indexOf(oldPhone);
                phones.splice(position + 1, 0, newPhone);  
            } 
        }else if (action === 'Last'){
            if (phones.includes(phone)){
                let position = phones.indexOf(phone);
                phones.splice(position, 1);
                phones.push(phone);  
            }   
        }
        cmd = input.shift();
    }


    console.log(phones.join(", "));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE","Add - Iphone10","Remove - IphoneSE","End"]);
phoneShop(["HuaweiP20, XiaomiNote","Remove - Samsung","Bonus phone - XiaomiNote:Iphone5","End"]);
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10","Last - SamsungA50","Add - MotorolaG5","End"]);