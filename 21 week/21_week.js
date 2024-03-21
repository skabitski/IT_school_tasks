//Test task   / fetch (POST)
// const data = {
//     breed: "Beagle",
//     size: "large",
//     color: "orange",
//     age: 6
//   };
  
//   fetch('http://localhost/pets/add', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Ошибка HTTP: ' + response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Данные успешно отправлены:', data);
//   })
//   .catch(error => {
//     console.error('Ошибка при отправке данных:', error);
//   });


//  TASK
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const searchTerm = document.getElementById('searchInput').value;
    
    
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=g1HXbReXZJlKDxpEpABZh1rtJ1fEIlQk&q=${searchTerm}&limit=5`;
    
   
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
       
        document.getElementById('gifContainer').innerHTML = '';
        
    
        data.data.forEach(gif => {
          const img = document.createElement('img');
          img.src = gif.images.fixed_height.url;
          document.getElementById('gifContainer').appendChild(img);
        });
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
  });