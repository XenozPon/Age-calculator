function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const yo1 = (2023-dob)
    const yo2 = (2024-dob)

    
    const userInfo = {
        firstName: firstName,
        lastName: lastName,
        yo1: yo1,
        yo2: yo2
    };

    displayInfo(userInfo);
}

function displayInfo(userInfo) {
    const infoContainer = document.getElementById('infoContainer');
    const infoBlock = document.getElementById('infoContainer');
    infoBlock.className = 'info-block';
    infoBlock.innerHTML = `<p>Вы: ${userInfo.lastName} ${userInfo.firstName}</p>
                           <p>Ваш возраст: ${userInfo.yo1}-${userInfo.yo2} лет</p> `;
                           
    infoContainer.appendChild(infoBlock);
}