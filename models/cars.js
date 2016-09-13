'use strict';

module.exports = function CarsModel() {
    return {
        cars: [
          {
            images: ['https://upload.wikimedia.org/wikipedia/commons/5/55/07-08_Toyota_Camry_XLE.jpg'],
            vin: '5N1AN08W26C506723',
            make: 'Toyota',
            model: 'Camry',
            year: 2016,
            featured: true,
            preowned: false,
            price: 15000,
            miles: 15,
            transmission: 'Automatic',
            engine: '2.5L V4',
            fuel: 'Gasoline',
            title: 'Clear'
          },
          {
            images: ['https://upload.wikimedia.org/wikipedia/commons/b/be/Hyundai_Santa_Fe_front_20080326.jpg'],
            vin: 'WAUAC48H53K028590',
            make: 'Hyundai',
            model: 'Santa Fe',
            year: 2008,
            featured: true,
            preowned: true,
            price: 5000,
            miles: 68567,
            transmission: 'Automatic',
            engine: '2.7L V6',
            fuel: 'Gasoline',
            title: 'Rebuilt'
          },
          {
            images: ['http://pictures.topspeed.com/IMG/crop/201404/jeep-wrangler-maximu_1600x0w.jpg'],
            vin: 'JM1BK344661532731',
            make: 'Jeep',
            model: 'Wrangler',
            year: 2014,
            featured: false,
            preowned: true,
            price: 25000,
            miles: 43065,
            transmission: 'Manual',
            engine: '3.6L V6',
            fuel: 'Gasoline',
            title: 'Clear'
          },
          {
            images: ['http://autonxt.net/wp-content/uploads/2016/02/2016-Nissan-Sentra19.jpg'],
            vin: '3FAFP06Z26R113023',
            make: 'Nissan',
            model: 'Sentra',
            year: 2016,
            featured: true,
            preowned: false,
            price: 18000,
            miles: 9,
            transmission: 'Automatic',
            engine: '2.5L V4',
            fuel: 'Gasoline',
            title: 'Clear'
          },
          {
            images: ['https://upload.wikimedia.org/wikipedia/commons/4/4f/2011_Ford_Edge_--_09-28-2011.jpg'],
            vin: '1C3CDFBB7FD242356',
            make: 'Ford',
            model: 'Edge',
            year: 2011,
            featured: false,
            preowned: true,
            price: 12000,
            miles: 87059,
            transmission: 'Manual',
            engine: '3.5L V6',
            fuel: 'Gasoline',
            title: 'Clear'
          },
          {
            images: ['https://upload.wikimedia.org/wikipedia/commons/0/09/2011_Chevrolet_Cruze_LS_--_NHTSA_2.jpg'],
            vin: '1N4DL01D6XC209154',
            make: 'Chevy',
            model: 'Cruze LS',
            year: 2011,
            featured: true,
            preowned: true,
            price: 5000,
            miles: 104034,
            transmission: 'Automatic',
            engine: '1.8L V4',
            fuel: 'Gasoline',
            title: 'Clear'
          }
        ]
    };
};
