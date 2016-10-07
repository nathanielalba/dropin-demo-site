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
            carPackage: 'LE',
            tagline: 'Brand <strong>NEW</strong>!!'
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
            carPackage: 'Limited',
            tagline: '<strong>Certified</strong> pre-owned!'
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
            carPackage: 'Rubicon w/ off-road',
            tagline: '<strong>Certified</strong> pre-owned!'
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
            carPackage: 'FE+ S',
            tagline: 'Brand <strong>NEW</strong>!!'
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
            carPackage: 'SEL',
            tagline: '<strong>Certified</strong> pre-owned!'
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
            carPackage: 'LS Automatic',
            tagline: '<strong>Certified</strong> pre-owned!'
          },
          {
            images: [
              'http://blog.caranddriver.com/wp-content/uploads/2014/11/2016-Toyota-Mirai-PLACEMENT-626x382.jpg',
              'http://www.cedemos.org/wp-content/uploads/2014/12/toyota-mirai-hidr%C3%B3geno.jpg',
              'http://file.kbb.com/kbb/vehicleimage/housenew/640x480/2016/2016-toyota-mirai-frontside_tomir1601.jpg',
              'http://cdn.arstechnica.net/wp-content/uploads/sites/3/2015/10/MIRAI_EXT_01_DPL_UK-980x653.jpg'
            ],
            vin: 'JM1BL1UP4D1820319',
            make: 'Toyota',
            model: 'Mirai',
            year: 2017,
            featured: true,
            preowned: false,
            price: 57500,
            miles: 5,
            transmission: 'N/A',
            engine: 'Electric',
            fuel: 'N/A',
            title: 'Clear',
            carPackage: '245 V nickel-metal hydride',
            tagline: '<strong>Fully</strong> electric car!!'
          },
          {
            images: [
              'https://i.ytimg.com/vi/vTX3QOAggJg/maxresdefault.jpg',
              'http://www.gaadi.com/blog/wp-content/uploads/2013/10/bmw-i8.jpg',
              'http://cdn.bmwblog.com/wp-content/uploads/2015/12/2015-BMW-i8-Test-Drive-1900x1200-2.jpg',
              'http://cdn.bmwblog.com/wp-content/uploads/2015/12/2015-BMW-i8-Test-Drive-1900x1200-1.jpg',
              'http://cdn.bmwblog.com/wp-content/uploads/2015/12/2015-BMW-i8-Test-Drive-1900x1200-30.jpg'
            ],
            vin: '2GCEC13T841306138',
            make: 'BMW',
            model: 'i8',
            year: 2017,
            featured: true,
            preowned: false,
            price: 140700,
            miles: 23,
            transmission: 'N/A',
            engine: 'Electric',
            fuel: 'N/A',
            title: 'Clear',
            carPackage: 'Luxury',
            tagline: '<strong>Fully</strong> electric car!!'
          },
          {
            images: [
              'https://s-media-cache-ak0.pinimg.com/originals/c0/a8/91/c0a891a3752f04ad05b07b286cec7b32.jpg',
              'https://www.carsbase.com/photo/Nissan-Nismo_GT_R__mp7_pic_107982.jpg',
              'http://img0.gtsstatic.com/wallpapers/0f64ed99ce7cb2c44cc093a235d9255a_large.jpeg',
              'http://www.nissanreference.com/colors/gtr/nissan_gtr_09_RAY_02.jpg?random=1402322820'
            ],
            vin: 'WBAPH5C56BF093907',
            make: 'Nissan',
            model: 'GT-R',
            year: 2015,
            featured: true,
            preowned: true,
            price: 128277,
            miles: 45867,
            transmission: 'Manual',
            engine: 'V6 Twin Turbo 3.8 Liter',
            fuel: 'Gasoline',
            title: 'Rebuilt',
            carPackage: 'NISMO',
            tagline: '<strong>Strong</strong> racing car, recently rebuilt'
          }
        ]
    };
};
