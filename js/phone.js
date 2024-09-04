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
        phoneCards.classList = `card bg-base-100 w-96 shadow-xl`;
        // added innerhtml on div
        phoneCards.innerHTML = `
        <figure class="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
        `;
    });

    
}


