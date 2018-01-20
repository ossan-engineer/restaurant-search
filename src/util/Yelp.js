const apiKey = 'xazyVGvg26KacjkUMkGDpUpiIlq4wZNACS2yAxUMa8IOXQDhLzhLOReIfnHbbG7iZ_pOokRZKPyP4sz_LyEfZ5kiP0cQ2skWSETT7A8u8-x7CoCROr3H1RlzUP9iWnYx';
const corsAnywherePrependUrl = 'https://cors-anywhere.herokuapp.com/';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `${corsAnywherePrependUrl}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};

export default Yelp;
