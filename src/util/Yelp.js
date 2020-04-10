const apiKey = "Ii5d89tQNZ1PRiLgK44JDxpuPmwlTN35gBsAojIpp-8DhK_GfN5klh5v_0neriRIuSjw1jtFFjkKvPa5" +
        "d1haglR4ZuEUrZNXs-yYEUi88suLfTd2ElLfpRWwMpWMXnYx";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json(); //make the response to a json file
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) { //if business exist in the json file
                return jsonResponse
                    .businesses
                    .map(business => {
                        console.log(business); //falls business existiert wird hier jede key iteriert
                        return {
                            id: business.id,
                            name: business.name,
                            imageSrc: business.image_url,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            url: business.url,
                            distance: business.distance
                        }
                    });
            }
        });
    }
};

export default Yelp;