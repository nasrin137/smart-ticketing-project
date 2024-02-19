// Adding background color

const seats = document.getElementsByClassName('seats');
for(const seat of seats){
    seat.addEventListener('click',function(){
        seat.style.backgroundColor = '#1dd100';
        const text = seat.innerText ;
        console.log(text);

      
          

        // Calculating seats left
        
        const seatNumber = document.getElementById('seat-number');
        const seatText = seatNumber.innerText;
        const convertedSeatNumber = parseInt(seatText);
        const newSeatNumber = convertedSeatNumber - 1;
        seatNumber.innerText = newSeatNumber;

        // Calculating Selected seats

        const seatsIncrease = document.getElementById('seats-increase');
        const seatsIncreaseText = seatsIncrease.innerText;
        const convertedSeatsIncreaseText = parseInt(seatsIncreaseText);
        const newSeats = convertedSeatsIncreaseText + 1;
        seatsIncrease.innerText = newSeats;

        // Showing by using Appendchild Method

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

        // Calculation of total cost

        const totalCost = document.getElementById('total-price').innerText;
        const convertedTotalCost = parseInt(totalCost);
        const ticketPrice = document.getElementById('ticket-price').innerText;
        const convertedTicketPrice = parseInt(ticketPrice);
        const sum = convertedTicketPrice + convertedTotalCost;
        document.getElementById('total-price').innerText = sum;

        // Calculation of Grand total cost

        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        document.getElementById('grand-total').innerText = sum;
  
    })

}
//  conditions of making input field disable

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click',function(){
const inputField = document.getElementById('input-field');
const inputFieldValue = inputField.value;


if(inputFieldValue==="NEW15" || inputFieldValue === "Couple 20"){
    inputField.parentNode.removeChild(inputField);
}else{
    inputField.style.display = "block";
}
}


)






   
        



// showing popup modal

const popupSection = document.getElementById('popup-section');
popupSection.addEventListener('click',function(){
    const modalSection = document.getElementById('modal-section');
   
    modalSection.classList.remove('hidden');
  
})

const continueSection = document.getElementById('continue');
continueSection.addEventListener('click',function(){
    const modalSection = document.getElementById('modal-section');
   
  
    modalSection.classList.add('hidden');
})

