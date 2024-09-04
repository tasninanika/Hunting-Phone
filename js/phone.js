// first fetch/load the data
const loadData = async () =>{
    const res = await
    fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await res.json();
    const phones = data.data;
    // console.log(data);
    displayPhones(phones);

}

// function to show cards
const displayPhones = (phones) =>{
    console.log(phones);

    // get the container
    const phonesContainer = document.getElementById('phones-container');
    console.log(phonesContainer);

    // for each phone create cards
    phones.forEach(allphones => {
        console.log(allphones);

        // create div for each phone
        const phoneCards = document.createElement('div');
        console.log(phoneCards);
        // added classes on div
        phoneCards.classList = `card border-2 w-80`;
        // added innerhtml on div
        phoneCards.innerHTML = `
        <div class = "p-5">
            <figure class="p-10 rounded-xl bg-[#0D6EFD0D]">
              <img
                src="${allphones.image}"
                alt="phone"
                class="rounded-xl" />
            </figure>
        </div>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-2xl font-bold mb-2">${allphones.phone_name}</h2>
              <p class="text-sm text-[#706F6F]">There are many variations of passages of available, but the majority have suffered</p>
              <h3 class="text-2xl font-bold pb-2">$999</h3>
              <div class="card-actions">
                <button class="btn bg-[#74700e] text-white">Show Details</button>
              </div>
            </div>
        `;
        // append div on container
        phonesContainer.appendChild(phoneCards);
    });

    loadingSpinner();
}

// loading spinner
const loadingSpinner = (toggle) =>{
    const spinner = document.getElementById('loading-spinner');
    if(toggle){
        spinner.classList.remove('hidden');
    }
    else{
        spinner.classList.add('hidden');
    }
}


