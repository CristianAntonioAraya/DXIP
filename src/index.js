const API_URL= 'https://ip-geolocation-and-threat-detection.p.rapidapi.com'
const form = document.querySelector('#form');
const switchBtn = document.querySelector('#switch')


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7a929903e0msh37d96b129836f45p1c0665jsn7bc5f48fb656',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#inputID')
    fetchDataApi(input.value)
    .then( res => console.log(res))
    
  })
  switchBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchBtn.classList.toggle('left')
    switchBtn.classList.toggle('toggle')
    
  })
  
  const fetchDataApi = async( IP ) => {
    const result = document.querySelector('#result')
    const res = await fetch( API_URL + `/${IP}`, options);
    const data = await res.json();
    if( data ) {
      result.innerHTML = JSON.stringify( data, null, 2 )
    }
}

const toggleMode = () => {

  

}



