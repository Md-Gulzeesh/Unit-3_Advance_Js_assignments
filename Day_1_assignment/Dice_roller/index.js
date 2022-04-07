var btn_roll = document.querySelector("#roll").addEventListener("click",roll_dices);
function roll_dices(){
    // For First dice
    var first_dice_number = Number(Math.floor(Math.random()*6) + 1);
    console.log("First dice number",first_dice_number);
    var first_dice_image = "dice"+first_dice_number+".png";
    document.querySelectorAll("img")[0].src = first_dice_image;
    // For Second dice
    var second_dice_number = Number(Math.floor(Math.random()*6) + 1);
    console.log("Second dice number: ",second_dice_number)
    var second_dice_image = "dice"+second_dice_number+".png";
    document.querySelectorAll("img")[1].src = second_dice_image;
    // For Third Dice
    var third_dice_number = Number(Math.floor(Math.random()*6) + 1);
    console.log("Third dice number ",third_dice_number);
    var third_dice_image = "dice"+third_dice_number+".png";
    document.querySelectorAll("img")[2].src = third_dice_image;
    // Logic for the Winner
    if((first_dice_number>second_dice_number)&&(first_dice_number>third_dice_number)){
        document.querySelector("#winner").innerHTML = "Winner is Member A";
        document.querySelectorAll("h2")[0].style.color = "green";
        if(second_dice_number>third_dice_number){
            document.querySelectorAll("h2")[1].style.color = "yellow";
            document.querySelectorAll("h2")[2].style.color ="red"; 
        }
        else if(second_dice_number == third_dice_number){
            document.querySelectorAll("h2")[1].style.color = "yellow";
            document.querySelectorAll("h2")[2].style.color ="red"; 
        }
        else{
            document.querySelectorAll("h2")[2].style.color = "yellow";
            document.querySelectorAll("h2")[1].style.color = "red";
        }
    }
    else if((second_dice_number>first_dice_number)&&(second_dice_number>third_dice_number)){
        document.querySelector("#winner").innerHTML = "Winner is Member B";
        document.querySelectorAll("h2")[1].style.color = "green";
        if(first_dice_number>third_dice_number){
            document.querySelectorAll("h2")[0].style.color = "yellow";
            document.querySelectorAll("h2")[2].style.color ="red"; 
        }
        else if(first_dice_number == third_dice_number){
            document.querySelectorAll("h2")[0].style.color = "yellow";
            document.querySelectorAll("h2")[2].style.color ="red"; 
        }
        else{
            document.querySelectorAll("h2")[0].style.color = "red";
            document.querySelectorAll("h2")[2].style.color = "yellow";
        }
    }
    else if((third_dice_number>first_dice_number)&&(third_dice_number>second_dice_number)){
        document.querySelector("#winner").innerHTML = "Winner is Member C";
        document.querySelectorAll("h2")[2].style.color = "green";
        if(first_dice_number>second_dice_number){
            document.querySelectorAll("h2")[0].style.color = "yellow";
            document.querySelectorAll("h2")[1].style.color ="red"; 
        }
        else if(first_dice_number == second_dice_number){
            document.querySelectorAll("h2")[0].style.color = "yellow";
            document.querySelectorAll("h2")[1].style.color ="red"; 
        }
        else {
            document.querySelectorAll("h2")[0].style.color = "red";
            document.querySelectorAll("h2")[1].style.color = "yellow";
        }
    }

    else if((first_dice_number==second_dice_number)&& (second_dice_number == third_dice_number) && (first_dice_number==third_dice_number)){
        document.querySelector("#winner").innerHTML = "It's Draw";
        document.querySelectorAll("h2")[0].style.color = "blue";
        document.querySelectorAll("h2")[1].style.color = "blue";
        document.querySelectorAll("h2")[2].style.color = "blue";
    }
}