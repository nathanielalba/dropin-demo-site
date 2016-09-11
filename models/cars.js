'use strict';

module.exports = function CarsModel() {
    return {
        cars: [
          {
            images: ['https://upload.wikimedia.org/wikipedia/commons/5/55/07-08_Toyota_Camry_XLE.jpg'],
            vin: '1',
            make: 'Toyota',
            model: 'Camry',
            year: 2016,
            featured: true,
            preowned: false,
            price: 15000
          },
          {
            images: ['https://upload.wikimedia.org/wikipedia/commons/b/be/Hyundai_Santa_Fe_front_20080326.jpg'],
            vin: '2',
            make: 'Hyundai',
            model: 'Santa Fe',
            year: 2008,
            featured: true,
            preowned: true,
            price: 5000
          },
          {
            images: ['http://pictures.topspeed.com/IMG/crop/201404/jeep-wrangler-maximu_1600x0w.jpg'],
            vin: '3',
            make: 'Jeep',
            model: 'Wrangler',
            year: 2014,
            featured: false,
            preowned: true,
            price: 25000
          },
          {
            images: ['http://static.usnews.rankingsandreviews.com/images/Auto/custom/13080/2016_Nissan_Sentra_3.jpg'],
            vin: '4',
            make: 'Nissan',
            model: 'Sentra',
            year: 2016,
            featured: true,
            preowned: false,
            price: 18000
          },
          {
            images: ['https://upload.wikimedia.org/wikipedia/commons/4/4f/2011_Ford_Edge_--_09-28-2011.jpg'],
            vin: '5',
            make: 'Ford',
            model: 'Edge',
            year: 2011,
            featured: false,
            preowned: true,
            price: 12000
          },
          {
            images: ['https://upload.wikimedia.org/wikipedia/commons/0/09/2011_Chevrolet_Cruze_LS_--_NHTSA_2.jpg'],
            vin: '6',
            make: 'Chevy',
            model: 'Cruze LS',
            year: 2011,
            featured: true,
            preowned: true,
            price: 5000
          }
        ]
    };
};
