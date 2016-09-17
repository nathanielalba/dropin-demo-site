'use strict';

module.exports = function CarsModel() {
    return {
        cars: [
          {
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/5/55/07-08_Toyota_Camry_XLE.jpg',
              'http://media.caranddriver.com/images/media/267359/2007-toyota-camry-hybrid-photo-5070-s-450x274.jpg',
              'http://blog.caranddriver.com/wp-content/uploads/2014/09/2015-Toyota-Camry-XSE-PLACEMENT-626x382.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/a/a2/Toyota_Camry_2.5Q,_XV50_rear_view.jpg'
            ],
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
            title: 'Clear',
            carPackage: 'LE'
          },
          {
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/b/be/Hyundai_Santa_Fe_front_20080326.jpg',
              'http://starmoz.com/images/hyundai-santa-fe-2008-9.jpg',
              'http://starmoz.com/images/hyundai-santa-fe-2008-11.jpg',
              'http://carphotos.cardomain.com/images/0016/57/69/16157596_large.jpg'
            ],
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
            title: 'Rebuilt',
            carPackage: 'Limited'
          },
          {
            images: [
              'http://pictures.topspeed.com/IMG/crop/201404/jeep-wrangler-maximu_1600x0w.jpg',
              'http://autobrend.com/wp-content/uploads/2014/11/2014-Jeep-Wrangler-Interior2.jpg',
              'https://www.carsbase.com/photo/Jeep-Wrangler_Polar_Edition_mp26_pic_108550.jpg',
              'http://images.gtcarlot.com/pictures/98115583.jpg'
            ],
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
            title: 'Clear',
            carPackage: 'Rubicon w/ off-road'
          },
          {
            images: [
              'http://autonxt.net/wp-content/uploads/2016/02/2016-Nissan-Sentra19.jpg',
              'http://motoringcrunch.com/wp-content/uploads/2016/02/2016-Nissan-Maxima.jpg',
              'http://www.nissanusa.com/content/dam/nissan/vehicles/2016/sentra/fb-share.jpg',
              'https://i.ytimg.com/vi/Epjj-jTPUDQ/maxresdefault.jpg'
            ],
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
            title: 'Clear',
            carPackage: 'FE+ S'
          },
          {
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/4/4f/2011_Ford_Edge_--_09-28-2011.jpg',
              'https://i.ytimg.com/vi/SkEHKZbGYm0/maxresdefault.jpg',
              'http://www.blogcdn.com/www.autoblog.com/media/2010/03/edgesportride---01opt.jpg',
              'http://st.motortrend.com/uploads/sites/5/2010/08/2011-ford-edge-SEL-rear-three-quarter-static.jpg'
            ],
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
            title: 'Clear',
            carPackage: 'SEL'
          },
          {
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/0/09/2011_Chevrolet_Cruze_LS_--_NHTSA_2.jpg',
              'http://media.caranddriver.com/images/08q4/267373/2009-ford-edge-photo-234468-s-429x262.jpg',
              'http://www.drivearabia.com/news/wp-content/uploads/2010/11/2011-ford-edge-dubai.jpg',
              'http://img.autobytel.com//2012/ford/edge/2-550-oemexteriorfront-66801.jpg'
            ],
            vin: '1N4DL01D6XC209154',
            make: 'Chevy',
            model: 'Cruze',
            year: 2011,
            featured: true,
            preowned: true,
            price: 5000,
            miles: 104034,
            transmission: 'Automatic',
            engine: '1.8L V4',
            fuel: 'Gasoline',
            title: 'Clear',
            carPackage: 'LS Automatic'
          }
        ]
    };
};
