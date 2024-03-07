// let str = "Я живу в Москве";
// let pos = str.indexOf("Москве");
// console.log;

// str = "Пожалуйста, посетите веб-сайт Microsoft!";
// let n = str.replace("Microsoft", "Google");

// let now = new Date()
// alert(now)

function capitalizeFirstLetter(transformFullName) {
    return transformFullName.charAt(0).toUpperCase() + transformFullName.slice(1).toLowerCase();
}



function transformFullName() {
   
    let fullName = document.getElementById('fullName').value.trim();

    
    let parts = fullName.split(/\s+/).filter(Boolean);

   
    if (parts.length >= 3) {
       
        let firstName = capitalizeFirstLetter(parts[1]);
        let lastName = capitalizeFirstLetter(parts[0]);
        let patronymic = capitalizeFirstLetter(parts.slice(2).join(' '));

        
        document.getElementById('result').innerHTML = 'Имя: ' + firstName + '<br>' +
                                                        'Фамилия: ' + lastName + '<br>' +
                                                        'Отчество: ' + patronymic;
    } else {
        
        document.getElementById('result').innerHTML = 'Некорректный ввод';
    }
}

