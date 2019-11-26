import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      countries: [],
      selectedCountry: {},
      newCountry:
    },
    computed: {
      totalPopulation: function () {
        return this.countries.reduce((total, country) => total + country.population, 0 );

      }
    },
    mounted(){
      this.fetchCountries();
    },
    methods: {
      fetchCountries: function(){
      const request = fetch("https://restcountries.eu/rest/v2/all")

      .then(response => response.json())
      .then(data => this.countries = data)


      // .then(data => this.countries = data)

    }
    // countryInformation: function(){
    //   selectedCountry = this.countries;
    //
    //
    // }
    }
  })
})
