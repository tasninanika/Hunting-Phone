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
        phoneCards.classList = `card bg-base-100 w-80 shadow-xl`;
        // added innerhtml on div
        phoneCards.innerHTML = `
        <figure class="px-10 pt-10">
              <img
                src="${allphones.image}"
                alt="phone"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${allphones.phone_name}</h2>
              <p>There are many variations of passages of available, but the majority have suffered</p>
              <p>$999</p>
              <div class="card-actions">
                <button class="btn btn-primary">Show Details</button>
              </div>
            </div>
        `;
        // append div on container
        phonesContainer.appendChild(phoneCards);
    });

    
}


