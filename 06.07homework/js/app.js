button_calc.onclick = function(){
    var amount_input = parseInt(document.getElementById("amount").value);
    var monthly_select = parseInt(document.getElementById("monthly").value);
    var percent_input = parseInt(document.getElementById("percent").value);

    var interest = amount_input*percent_input/100
    var totalamount = interest+amount_input;
    var monthly = totalamount/monthly_select

    document.getElementById("Total_amount").innerHTML=totalamount
    document.getElementById("Monthly_amount").innerHTML=monthly.toFixed(2)
    document.getElementById("Percent_total").innerHTML=interest
}


document.querySelector('#click').onclick = function(){
        click.onclick = function(){
            if(document.querySelector('.box_all input').value.length == 0){
                alert("Boş ola bilməz")
            }
        
            else{
                document.querySelector('#values').innerHTML += `
                    <div class="">
                        <span id="">
                            ${document.querySelector('.box_all input').value}
                        </span>
                        <button class="delete">
                            <span>Delete</span>
                        </button>
                    </div>
                `;
               
                var remove = document.querySelectorAll(".delete");
                for(var i=0; i<remove.length; i++){
                    remove[i].onclick = function(){
                        this.parentNode.remove();
                    }
                    
                }
            }
            document.getElementById("input").value=""
        }
}


    // var amountinput = parseInt(document.getElementById("amount").value);
    // var monthly_select = parseInt(document.getElementById("monthly").value);
    // var percent_input = parseInt(document.getElementById("percent").value);

    // var interest = amountinput*percentinput/100
    // var totalamount = interest+amount_input;
    // var monthly = totalamount/monthly_select

    // document.getElementById("totalamount").innerHTML=total
    // document.getElementById("monthpaymet").innerHTML=test2
    // document.getElementById("interestt").innerHTML=interest