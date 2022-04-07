var btn_roll = document.querySelector("#roll").addEventListener("click",roll_dices);
function roll_dices(){
    // For First dice
    let first_dice_number = Math.floor(Math.random()*6)+1;
    let first_dice_image = "dice"+first_dice_number+".png";
    document.querySelectorAll("img")[0].setAttribute("src",first_dice_image);
    // For Second dice
    let second_dice_number = Math.floor(Math.random()*6)+1;
    let second_dice_image = "dice"+second_dice_number+".png";
    document.querySelectorAll("img")[1].setAttribute("src",second_dice_image);
    // For Third Dice
    let third_dice_number = Math.floor(Math.random()*6)+1;
    let third_dice_image = "dice"+third_dice_number+".png";
    document.querySelectorAll("img")[2].setAttribute("src",third_dice_image);
    // Logic for the Winner
    if(first_dice_number>second_dice_number){
        if(first_dice_number>third_dice_number){
            document.querySelector("#winner").innerHTML = "Winner is Member A";
        }
    }
    else if(second_dice_number>first_dice_number){
        if(second_dice_number>third_dice_number){
            document.querySelector("#winner").innerHTML = "Winner is Member B";
        }
    }
    else if(first_dice_number == second_dice_number == third_dice_number){
        document.querySelector("#winner").innerHTML = "It's Draw";
    }
    else{
        document.querySelector("#winner").innerHTML = "Winner is Member C";
    }
}