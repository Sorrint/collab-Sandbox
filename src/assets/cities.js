import { random } from '../modules/context-menu/utils';

export function randomCity() {
  const worldCapitals = [
    'Kabul',
    'Tirana',
    'Algiers',
    'Andorra la Vella',
    'Luanda',
    "Saint John's",
    'Buenos Aires',
    'Yerevan',
    'Canberra',
    'Vienna',
    'Baku',
    'Nassau',
    'Manama',
    'Dhaka',
    'Bridgetown',
    'Minsk',
    'Brussels',
    'Belmopan',
    'Porto-Novo',
    'Thimphu',
    'La Paz',
    'Sarajevo',
    'Gaborone',
    'Brasilia',
    'Bandar Seri Begawan',
    'Sofia',
    'Ouagadougou',
    'Gitega',
    'Phnom Penh',
    'Yaounde',
    'Ottawa',
    'Praia',
    'Bangui',
    "N'Djamena",
    'Santiago',
    'Beijing',
    'Bogota',
    'Moroni',
    'Brazzaville',
    'Kinshasa',
    'San Jose',
    'Yamoussoukro',
    'Zagreb',
    'Havana',
    'Nicosia',
    'Prague',
    'Copenhagen',
    'Djibouti',
    'Roseau',
    'Santo Domingo',
    'Dili',
    'Quito',
    'Cairo',
    'San Salvador',
    'Malabo',
    'Asmara',
    'Tallinn',
    'Addis Ababa',
    'Suva',
    'Helsinki',
    'Paris',
    'Libreville',
    'Banjul',
    'Tbilisi',
    'Berlin',
    'Accra',
    'Athens',
    "Saint George's",
    'Guatemala City',
    'Conakry',
    'Bissau',
    'Georgetown',
    'Port-au-Prince',
    'Tegucigalpa',
    'Budapest',
    'Reykjavik',
    'New Delhi',
    'Jakarta',
    'Tehran',
    'Baghdad',
    'Dublin',
    'Jerusalem*',
    'Rome',
    'Kingston',
    'Tokyo',
    'Amman',
    'Astana',
    'Nairobi',
    'Tarawa Atoll',
    'Pyongyang',
    'Seoul',
    'Pristina',
    'Kuwait City',
    'Bishkek',
    'Vientiane',
    'Riga',
    'Beirut',
    'Maseru',
    'Monrovia',
    'Tripoli',
    'Vaduz',
    'Vilnius',
    'Luxembourg',
    'Skopje',
    'Antananarivo',
    'Lilongwe',
    'Kuala Lumpur',
    'Male',
    'Bamako',
    'Valletta',
    'Majuro',
    'Nouakchott',
    'Port Louis',
    'Mexico City',
    'Palikir',
    'Chisinau',
    'Monaco',
    'Ulaanbaatar',
    'Podgorica',
    'Rabat',
    'Maputo',
    'Rangoon (Yangon)',
    'Windhoek',
    'no official capital',
    'Kathmandu',
    'Amsterdam',
    'Wellington',
    'Managua',
    'Niamey',
    'Abuja',
    'Oslo',
    'Muscat',
    'Islamabad',
    'Melekeok',
    'Panama City',
    'Port Moresby',
    'Asuncion',
    'Lima',
    'Manila',
    'Warsaw',
    'Lisbon',
    'Doha',
    'Bucharest',
    'Moscow',
    'Kigali',
    'Basseterre',
    'Castries',
    'Kingstown',
    'Apia',
    'San Marino',
    'Sao Tome',
    'Riyadh',
    'Dakar',
    'Belgrade',
    'Victoria',
    'Freetown',
    'Singapore',
    'Bratislava',
    'Ljubljana',
    'Honiara',
    'Mogadishu',
    'Pretoria (administrative)',
    'Juba',
    'Madrid',
    'Colombo',
    'Khartoum',
    'Paramaribo',
    'Mbabane',
    'Stockholm',
    'Bern',
    'Damascus',
    'Taipei',
    'Dushanbe',
    'Dar es Salaam',
    'Bangkok',
    'Lome',
    "Nuku'alofa",
    'Port-of-Spain',
    'Tunis',
    'Ankara',
    'Ashgabat',
    'Vaiaku village, Funafuti province',
    'Kampala',
    'Kyiv',
    'Abu Dhabi',
    'London',
    'Washington, D.C.',
    'Montevideo',
    'Tashkent',
    'Port-Vila',
    'Vatican City',
    'Caracas',
    'Hanoi',
    'Sanaa',
    'Lusaka',
    'Harare',
  ];

  return worldCapitals[random(0, worldCapitals.length - 1)];
}
