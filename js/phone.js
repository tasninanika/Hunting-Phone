// first fetch/load the data
const loadData = async (searchText, isShowAll) =>{
    const res = await
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(data);
    displayPhones(phones, isShowAll);
}

// function to show cards
const displayPhones = (phones, isShowAll) =>{
    console.log(phones);

    // get the container
    const phonesContainer = document.getElementById('phones-container');
    console.log(phonesContainer);

    // clear phone container before adding new cards
    phonesContainer.textContent = '';

    // show all button
    const showAll = document.getElementById('show-all');
    if(phones.length > 12 && !isShowAll){
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden');
    }

    // display 12 phones
    if(!isShowAll){
        phones = phones.slice(0,12); 
    }

    


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
                <button onclick="showDetails('${allphones.slug}')" class="btn bg-[#74700e] text-white">Show Details</button>
              </div>
            </div>
        `;
        // append div on container
        phonesContainer.appendChild(phoneCards);
    });


    // Hide the static phones container when searching
    const staticPhonesContainer = document.getElementById('static-phones-container');
    staticPhonesContainer.classList.add('hidden');

    loadingSpinner();
}

// static phones
const loadPhones = async (isShowAll) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
        const data2 = await res.json();
        const staticPhones = data2.data;
        displayStaticPhones(staticPhones, isShowAll);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// display static phones
const displayStaticPhones = (staticPhones, isShowAll) => {

    // get the container
    const staticPhonesContainer = document.getElementById('static-phones-container');

    // clear phone container before adding new cards
    staticPhonesContainer.textContent = '';

    // show all button
    const showAll = document.getElementById('show-all');
    if (staticPhones.length > 9 && !isShowAll) {
        showAll.classList.remove('hidden');
    } else {
        showAll.classList.add('hidden');
    }

    // display 12 phones
    if (!isShowAll) {
        staticPhones = staticPhones.slice(0, 9);
    }

    // for each phone create cards
    staticPhones.forEach(phone => {
        console.log(phone);

        // create div for each phone
        const staticPhoneCards = document.createElement('div');

        // added classes on div
        staticPhoneCards.className = `card border-2 w-80`;

        // added innerHTML on div
        staticPhoneCards.innerHTML = `
        <div class="p-5">
            <figure class="p-10 rounded-xl bg-[#0D6EFD0D]">
              <img src="${phone.image}" alt="phone" class="rounded-xl" />
            </figure>
        </div>
        <div class="card-body items-center text-center">
              <h2 class="card-title text-2xl font-bold mb-2">${phone.phone_name}</h2>
              <p class="text-sm text-[#706F6F]">There are many variations of passages available, but the majority have suffered</p>
              <h3 class="text-2xl font-bold pb-2">$999</h3>
              <div class="card-actions">
                <button onclick="showDetails('${phone.slug}')" class="btn bg-[#74700e] text-white">Show Details</button>
              </div>
        </div>
        `;

        // append div on container
        staticPhonesContainer.appendChild(staticPhoneCards);
    });
}

// Example: Load phones with the show all option set to false
loadPhones(false);


// show details
const showDetails = async (id) =>{
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    showPhonedetails(phone);

}

// display modal data
const showPhonedetails = (phone) =>{
    
    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
    <div class = "p-1">
            <figure class="flex justify-center py-10 rounded-xl bg-[#0D6EFD0D]">
              <img
                src="${phone.image}"
                alt="phone"
                />
            </figure>
        </div>
    <div class="ml-1 mt-4">
        <h3 id="show-detail-phone-name" class="text-2xl font-bold">${phone?.name}</h3>
        <p class="text-sm text-[#706F6F] mt-2">        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <p class="mt-3 text-sm"><span class="font-semibold">Storage :</span><span class="text-[#706F6F] "> ${phone?.mainFeatures?.storage}</span></p>
        <p class="mt-3 text-sm"><span class="font-semibold">Display Size :</span> <span class="text-[#706F6F]"> ${phone?.mainFeatures?.displaySize}</span></p>
        <p class="mt-3 text-sm"><span class="font-semibold">Chipset :</span><span class="text-[#706F6F]"> ${phone?.mainFeatures?.chipSet}</span></p>
        <p class="mt-3 text-sm"><span class="font-semibold">Memory :</span><span class="text-[#706F6F]"> ${phone?.mainFeatures?.memory}</span></p>
        <p class="mt-3 text-sm"><span class="font-semibold">Slug :</span><span class="text-[#706F6F]"> ${phone?.slug}</span></p>
        <p class="mt-3 text-sm"><span class="font-semibold">Release data :</span><span class="text-[#706F6F]"> ${phone?.releaseDate}</span></p>
        <p class="mt-3 text-sm"><span class="font-semibold">Brand :</span><span class="text-[#706F6F]"> ${phone?.brand}</span></p>
        <p class="mt-3 text-sm"><span class="font-semibold">GPS :</span><span class="text-[#706F6F]"> ${phone?.others?.GPS || 'No GPS Acailable'}</span></p>
    </div>
    `

    show_details_modal.showModal();
}



// get input field
const search = (isShowAll) =>{
    loadingSpinner(true);
    const searchField = document.getElementById('search-field');
    // console.log(searchField);
    const searchText = searchField.value;
    // console.log(searchText);
    loadData(searchText, isShowAll);
    // searchField.value = '';
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

// handle show all
const handleShowall = () =>{
    const staticPhonesContainer = document.getElementById('static-phones-container');
    
    if (!staticPhonesContainer.classList.contains('hidden')) {
        // Show all static phones
        loadPhones(true);
    } else {
        // Show all searched phones
        search(true);
    }
}
    


