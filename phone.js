
const loadPhone = async (searchtext) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`)

    const data = await res.json()

    const phones = data.data

    displayPhones(phones)
}

const displayPhones = phones =>{

  const phoneContainer = document.getElementById('phone-container')

  phoneContainer.textContent = '';

  const showAllContainer = document.getElementById('show-all-container')

  console.log(phones.length)

  if(phones.length>12) {
    showAllContainer.classList.remove('hidden')
  }else{
    showAllContainer.classList.add('hidden')
  }

  phones = phones.slice(0,12)

  phones.forEach(phone =>{


   
    // console.log(phone)

    const phoneCard = document.createElement('div')
    phoneCard.classList = `card bg-gray-100 p-2 shadow-xl`

    phoneCard.innerHTML = `
          <figure>
              <img
                src="${phone.image}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>

    `

    phoneContainer.appendChild(phoneCard)
    
  })
  toggleSpinner(false)
}

const handlesearch = () =>{

  toggleSpinner(true)
  const searchfield = document.getElementById('searchfield')
  const searchtext = searchfield.value
  console.log(searchtext)

  loadPhone(searchtext)
}

const toggleSpinner  = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner')

  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
  

}










// loadPhone()