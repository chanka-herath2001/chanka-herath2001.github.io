                //SL Adult
                let plus = document.getElementById('plus');
                let minus = document.getElementById('minus');
                let input = document.getElementById('sladult');
                //SL Child
                let plus1 = document.getElementById('plus1');
                let minus1 = document.getElementById('minus1');
                let input1 = document.getElementById('slchild');
                //Foreign Adult
                let plus2 = document.getElementById('plus2');
                let minus2 = document.getElementById('minus2');
                let input2 = document.getElementById('fadult');
                //Foreign Child
                let plus3 = document.getElementById('plus3');
                let minus3 = document.getElementById('minus3');
                let input3 = document.getElementById('fchild');
                //Infant
                let plus4 = document.getElementById('plus4');
                let minus4 = document.getElementById('minus4');
                let input4 = document.getElementById('infant');
                //input values
                let inputValue  = input.value;
                let inputValue1 = input1.value;
                let inputValue2 = input2.value;
                let inputValue3 = input3.value;
                let inputValue4 = input4.value;
                //Function for increasing and decreasing ticket count for SL adult tickets
                plus.addEventListener('click' , function(){
                    event.preventDefault(event);
                    inputValue ++;
                    input.value = inputValue;
                })
                minus.addEventListener('click' , function(){
                    event.preventDefault(event);
                    if(inputValue>0){
                    inputValue --;
                    input.value = inputValue;
                    }
                })
                //Function for increasing and decreasing ticket count for SL child tickets
                plus1.addEventListener('click' , function(){
                    event.preventDefault(event);
                    inputValue1 ++;
                    input1.value = inputValue1;
                })
                minus1.addEventListener('click' , function(){
                    event.preventDefault(event);
                    if(inputValue1>0){
                    inputValue1 --;
                    input1.value = inputValue1;
                    }
                })
                //Function for increasing and decreasing ticket count for Foreign adult tickets
                plus2.addEventListener('click' , function(){
                    event.preventDefault(event);
                    inputValue2 ++;
                    input2.value = inputValue2;
                })
                minus2.addEventListener('click' , function(){
                    event.preventDefault(event);
                    if(inputValue2>0){
                    inputValue2 --;
                    input2.value = inputValue2;
                    }
                })
                //Function for increasing and decreasing ticket count for Foreign child tickets
                plus3.addEventListener('click' , function(){
                    event.preventDefault(event);
                    inputValue3 ++;
                    input3.value = inputValue3;
                })
                minus3.addEventListener('click' , function(){
                    event.preventDefault(event);
                    if(inputValue3>0){
                    inputValue3 --;
                    input3.value = inputValue3;
                    }
                })
                //Function for increasing and decreasing ticket count for Infants tickets
                plus4.addEventListener('click' , function(){
                    event.preventDefault(event);
                    inputValue4 ++;
                    input4.value = inputValue4;
                })
                minus4.addEventListener('click' , function(){
                    event.preventDefault(event);
                    if(inputValue4>0){
                    inputValue4 --;
                    input4.value = inputValue4;
                    }
                })
                const theForm = document.getElementById("form");
                const btnCalculate = document.getElementById("calculate");
                const btnOrder = document.getElementById("placeorder");
                const txtOutput = document.getElementById("output");
                const sladult1 = document.getElementById("sladultamount");
                const slchild1 = document.getElementById("slchildamount");
                const fadult1 = document.getElementById("fadultamount");
                const fchild1 = document.getElementById("fchildamount");
                const infant1 = document.getElementById("infantamount");
                let txtvisit = document.getElementById("visit");
                let txtOrder = document.getElementById("order");
                let txtOrderNum = document.getElementById("ordernum");
                let txtOrder1 = document.getElementById("order1");
                let txtOrderNum1 = document.getElementById("ordernum1");
                let txtOrder2 = document.getElementById("order2");
                let txtOrderNum2 = document.getElementById("ordernum2");
                const btnAddToFav = document.getElementById("addFave");
                const btnOrderFav = document.getElementById("orderFave");
                const txtFavOrder = document.getElementById("favOrder");
                const txtSubtotal = document.getElementById("subtotal");
                const btnPlaceOrder = document.getElementById("placeorder");
                const btnLoyalty = document.getElementById("loyalty");

                btnCalculate.addEventListener("click",calculate );
                let count=0;
                function calculate(){
                    if(theForm.checkValidity()){
                    event.preventDefault(event);
                    let sladult = parseInt(input.value);
                    let slchild = parseInt(input1.value);
                    let fadult = parseInt(input2.value);
                    let fchild = parseInt(input3.value);
                    let infant = parseInt(input4.value);
                    let visit = txtvisit.value;
                    //Calculate total cost of tickets
                    
                    if(visit == "half"){
                        total = (sladult*1550)+(slchild*1050)+(fadult*5950)+(fchild*3150)+(infant*0)
                    }
                    else if(visit == "full"){
                        total = (sladult*1800)+(slchild*1300)+(fadult*6300)+(fchild*3500)+(infant*0);
                    }
                    else{
                        total = (sladult*1200)+(slchild*700)+(fadult*5500)+(fchild*2700)+(infant*0)
                    }
                
                    //Output breakdown of tickets
                    txtOutput.innerText =total;
                    sladult1.innerText  = `${sladult}`;
                    slchild1.innerText  = `${slchild}`;
                    fadult1.innerText   = `${fadult}`;
                    fchild1.innerText   = `${fchild}`;
                    infant1.innerText   = `${infant}`;
                    txtOutput.innerText = `LKR ${total.toFixed(2)} `;
                   
                
                        var inputData = [ {slAdult:sladult ,slChild:slchild , fAdult:fadult , fChild:fchild, infantTicket: infant, totalValue:total }];
                    
                    var html = "<table>"

                        setTimeout(()=>{
                        
                    for(let i=0; i<inputData.length ; i++){
                        html +=  '<tr>';
                        html +=  '<th>SL Adult</th>';
                        html +=  '<th>SL Child</th>';
                        html +=  '<th>Foreign Adult</th>';
                        html +=  '<th>Foreign Child</th>';
                        html +=  '<th>Infant</th>';
                        html +=  '<th>Total</th>';
                        html +=  '</tr>'; 
                      html +=  '<tr>';
                      html +=  '<td>' + inputData[i].slAdult + '</td>';
                      html +=  '<td>' + inputData[i].slChild + '</td>'; 
                      html +=  '<td>' + inputData[i].fAdult + '</td>'; 
                      html +=  '<td>' + inputData[i].fChild + '</td>'; 
                      html +=  '<td>' + inputData[i].infantTicket + '</td>'; 
                      html +=  '<td> LKR' + inputData[i].totalValue + '</td>'; 
                      html +=  '</tr>';

                      
                    }
                   
                    function addOrder(){
                        var slAdult = document.getElementById('sladult').value;
                        var slChid = document.getElementById('slchild').value;
                        var fAdult = document.getElementById('fadult').value;
                        var fChild = document.getElementById('fchild').value;
                        var infantTicket = document.getElementById('infant').value;
                          
                        if(visit == "half"){
                            total = (slAdult*1550)+(slChid*1050)+(fAdult*5950)+(fChild*3150)+(infantTicket*0)
                        }
                        else if(visit == "full"){
                            total = (slAdult*1800)+(slChid*1300)+(fAdult*6300)+(fChild*3500)+(infantTicket*0);
                        }
                        else{
                            total = (slAdult*1200)+(slChid*700)+(fAdult*5500)+(fChild*2700)+(infantTicket*0)
                        }

                        inputData.push({slAdult1:slAdult ,slChild1:slChild , fAdult1:fAdult , fChild1:fChild, infantTicket1: infantTicket, totalValue1:total });
                        calculate();
                    }
                    document.getElementById("testTable").innerHTML = html;
                    })

                


                    count++;


                    let numberOfTickets = sladult+slchild+fadult+fchild+infant; 

                    btnLoyalty.addEventListener("click",checkLoyalty);
                    function checkLoyalty(){
                        event.preventDefault(event);
                        if(numberOfTickets>3){ 
                            let loyalty = numberOfTickets*15;
                            alert(`You have earned ${loyalty} points`);
                            localStorage.setItem('Loyalty', loyalty);
                        }
                        else{
                            alert(`You havent earned any loyalty points`);
                        }
                        
                    }

                    

                }

                    for(let i=1; i<=count; i++){    
                        txtOrder.innerText = `Order ${i}`;
                        for(let j=1; j<=count; j++){
                            txtOrderNum.innerText = `LKR ${total.toFixed(2)}`;
                        }
                    
                        
                      
                    btnAddToFav.addEventListener("click",favorite);
                        function favorite(){
                        event.preventDefault(event);  
                        localStorage.setItem(`Order`,`LKR ${total.toFixed(2)}`)
                        }
                    btnOrderFav.addEventListener("click",orderFav)
                         function orderFav(){
                            event.preventDefault(event);
                            let Order=localStorage.getItem("Order")
                            txtFavOrder.innerText = `${Order}`
                         }    
                         
                         btnPlaceOrder.addEventListener("click",placeOrder);
                         function placeOrder(){
                             alert(`Thank you for purchasing`);
                         
                         }        
                     
                     
            }
                }

                
                

                