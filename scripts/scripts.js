const seats = document.getElementsByClassName('seats');
for(const seat of seats){
    seat.addEventListener('click',function(){
        seat.style.backgroundColor = '#1dd100';
        const text = seat.innerText ;
        console.log(text)
     
        
        const seatNumber = document.getElementById('seat-number');
        const seatText = seatNumber.innerText;
        const convertedSeatNumber = parseInt(seatText);
        const newSeatNumber = convertedSeatNumber - 1;
        seatNumber.innerText = newSeatNumber;

        const seatsIncrease = document.getElementById('seats-increase');
        const seatsIncreaseText = seatsIncrease.innerText;
        const convertedSeatsIncreaseText = parseInt(seatsIncreaseText);
        const newSeats = convertedSeatsIncreaseText + 1;
        seatsIncrease.innerText = newSeats;

        const tableSection = document.getElementById('table-section');
        const tableRow = document.createElement('tr');
        const tableData = document.createElement('td');
        tableData.innerText = text;
        const tableData2 = document.createElement('td');
        tableData2.innerText = 'Economy';
        const tableData3 = document.createElement('td');
        tableData3.innerText = 550;

        tableRow.appendChild(tableData);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData3);

        tableSection.appendChild(tableRow);

        const totalCost = document.getElementById('total-price').innerText;
        const convertedTotalCost = parseInt(totalCost);
        const ticketPrice = document.getElementById('ticket-price').innerText;
        const convertedTicketPrice = parseInt(ticketPrice);
        const sum = convertedTicketPrice + convertedTotalCost;
        document.getElementById('total-price').innerText = sum;

        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        document.getElementById('grand-total').innerText = sum;

        

    

       

        
    })

}

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click',function(){
const inputField = document.getElementById('input-field').value;
const couponCode = inputField.split(" ").join("").toUpperCase();
if(couponCode==="NEW15")
    inputField.classlist.add('hidden');
})
        





// const popupSection = document.getElementById('popup-section');
// popupSection.addEventListener('click',function(){
//     const modalSection = document.getElementById('modal-section');
   
//     modalSection.classList.remove('hidden');
  
// })

// const continueSection = document.getElementById('continue');
// continueSection.addEventListener('click',function(){
//     const modalSection = document.getElementById('modal-section');
   
  
//     modalSection.classList.add('hidden');
// })

