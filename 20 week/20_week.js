// let user = {
//   name: "Alice",
//   married: false,
//   age: 32,
// };

// console.log(user);
// let userJson = JSON.stringify(user);
// console.log(userJson);
// user = JSON.parse(userJson)
// console.log(user);

// let userJson = `{
//     name: 'Alice',
//     married: false,
//     age:32
// }`;
// console.log(userJson);

//Lesson 2

// fetch('https://api.github.com/users/itgirlschool')
//       .then(response => console.log(response.json()))
//       .catch(err => console.log(err))

// let responseText = '{"name": "John", "age": 30}';
// try {

//   let jsonData = JSON.parse(responseText);

//   console.log("Name: " + jsonData.name);
//   console.log("Age: " + jsonData.age);
// } catch (error) {

//   console.log("Response is not valid JSON. Treating it as plain text.");
//   console.log("Response: " + responseText);
// }


//test ! my git fetch

// const username = 'skabitski';
// const url = `https://api.github.com/users/skabitski`;

// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("User data:", data);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

// FINAL TASK
const apiKey = 'tM3n07KIJrMahXOzG7tnqKvFJnLfwkeDBjKtY6g4';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

async function fetchAstronomyPicture() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    const apodImage = document.getElementById('apod-image');
    apodImage.src = data.url;
    apodImage.alt = data.title;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

window.onload = fetchAstronomyPicture;