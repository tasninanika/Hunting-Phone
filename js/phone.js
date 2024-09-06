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
    })

    loadingSpinner();
}

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
    search(true);
}

