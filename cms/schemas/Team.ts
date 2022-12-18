const Team = {
  name: 'Team',
  title: 'Mannschaft',
  type: 'string',
  options: {
    list: [
      {title: 'Afghanistan', value: 'AF'},
      {title: 'Ägypten', value: 'EG'},
      {title: 'Albanien', value: 'AL'},
      {title: 'Algerien', value: 'DZ'},
      {title: 'Amerikanische Jungferninseln', value: 'VI'},
      {title: 'Amerikanisch-Samoa', value: 'AS'},
      {title: 'Andorra', value: 'AD'},
      {title: 'Angola', value: 'AO'},
      {title: 'Anguilla', value: 'AI'},
      {title: 'Antigua und Barbuda', value: 'AG'},
      {title: 'Äquatorialguinea', value: 'GQ'},
      {title: 'Argentinien', value: 'AR'},
      {title: 'Armenien', value: 'AM'},
      {title: 'Aruba', value: 'AW'},
      {title: 'Aserbaidschan', value: 'AZ'},
      {title: 'Äthiopien', value: 'ET'},
      {title: 'Australien', value: 'AU'},
      {title: 'Bahamas', value: 'BS'},
      {title: 'Bahrain', value: 'BH'},
      {title: 'Bangladesch', value: 'BD'},
      {title: 'Barbados', value: 'BB'},
      {title: 'Belarus', value: 'BY'},
      {title: 'Belgien', value: 'BE'},
      {title: 'Belize', value: 'BZ'},
      {title: 'Benin', value: 'BJ'},
      {title: 'Bermuda', value: 'BM'},
      {title: 'Bhutan', value: 'BT'},
      {title: 'Bolivien', value: 'BO'},
      {title: 'Bosnien und Herzegowina', value: 'BA'},
      {title: 'Botswana', value: 'BW'},
      {title: 'Brasilien', value: 'BR'},
      {title: 'Britische Jungferninseln', value: 'VG'},
      {title: 'Brunei', value: 'BN'},
      {title: 'Bulgarien', value: 'BG'},
      {title: 'Burkina Faso', value: 'BF'},
      {title: 'Burundi', value: 'BI'},
      {title: 'Cayman Islands', value: 'KY'},
      {title: 'Chile', value: 'CL'},
      {title: 'China (Volksrepublik)', value: 'CN'},
      {title: 'Chinesisch Taipeh', value: 'TW-OLY'},
      {title: 'Cook-Inseln', value: 'CK'},
      {title: 'Costa Rica', value: 'CR'},
      {title: 'Curaçao', value: 'CW'},
      {title: 'Dänemark', value: 'DK'},
      {title: 'Demokratische Republik Kongo', value: 'CD'},
      {title: 'Deutschland', value: 'DE'},
      {title: 'Dominica', value: 'DM'},
      {title: 'Dominikanische Republik', value: 'DO'},
      {title: 'Dschibuti', value: 'DJ'},
      {title: 'Ecuador', value: 'EC'},
      {title: 'Elfenbeinküste', value: 'CI'},
      {title: 'El Salvador', value: 'SV'},
      {title: 'England', value: 'GB-ENG'},
      {title: 'Eritrea', value: 'ER'},
      {title: 'Estland', value: 'EE'},
      {title: 'Eswatini', value: 'SZ'},
      {title: 'Fidschi', value: 'FJ'},
      {title: 'Finnland', value: 'FI'},
      {title: 'Frankreich', value: 'FR'},
      {title: 'Gabun', value: 'GA'},
      {title: 'Gambia', value: 'GM'},
      {title: 'Georgien', value: 'GE'},
      {title: 'Ghana', value: 'GH'},
      {title: 'Gibraltar', value: 'GI'},
      {title: 'Grenada', value: 'GD'},
      {title: 'Griechenland', value: 'GR'},
      {title: 'Guam', value: 'GU'},
      {title: 'Guatemala', value: 'GT'},
      {title: 'Guyana', value: 'GY'},
      {title: 'Guinea', value: 'GN'},
      {title: 'Guinea-Bissau', value: 'GW'},
      {title: 'Haiti', value: 'HT'},
      {title: 'Honduras', value: 'HN'},
      {title: 'Hongkong', value: 'HK'},
      {title: 'Indien', value: 'IN'},
      {title: 'Indonesien', value: 'ID'},
      {title: 'Irak', value: 'IQ'},
      {title: 'Iran', value: 'IR'},
      {title: 'Irland', value: 'IE'},
      {title: 'Island', value: 'IS'},
      {title: 'Israel', value: 'IL'},
      {title: 'Italien', value: 'IT'},
      {title: 'Jamaika', value: 'JM'},
      {title: 'Japan', value: 'JP'},
      {title: 'Jemen', value: 'YE'},
      {title: 'Jordanien', value: 'JO'},
      {title: 'Kambodscha', value: 'KH'},
      {title: 'Kamerun', value: 'CM'},
      {title: 'Kanada', value: 'CA'},
      {title: 'Kap Verde', value: 'CV'},
      {title: 'Kasachstan', value: 'KZ'},
      {title: 'Katar', value: 'QA'},
      {title: 'Kenia', value: 'KE'},
      {title: 'Kirgisistan', value: 'KG'},
      {title: 'Kolumbien', value: 'CO'},
      {title: 'Komoren', value: 'KM'},
      {title: 'Korea (Demokratische Volksrepublik)', value: 'KP'},
      {title: 'Korea (Republik)', value: 'KR'},
      {title: 'Kosovo', value: 'XK'},
      {title: 'Kroatien', value: 'HR'},
      {title: 'Kuba', value: 'CU'},
      {title: 'Kuwait', value: 'KW'},
      {title: 'Laos', value: 'LA'},
      {title: 'Lesotho', value: 'LS'},
      {title: 'Lettland', value: 'LV'},
      {title: 'Libanon', value: 'LB'},
      {title: 'Liberia', value: 'LR'},
      {title: 'Libyen', value: 'LY'},
      {title: 'Liechtenstein', value: 'LI'},
      {title: 'Litauen', value: 'LT'},
      {title: 'Luxemburg', value: 'LU'},
      {title: 'Macau', value: 'MO'},
      {title: 'Madagaskar', value: 'MG'},
      {title: 'Malawi', value: 'MW'},
      {title: 'Malaysia', value: 'MY'},
      {title: 'Malediven', value: 'MV'},
      {title: 'Mali', value: 'ML'},
      {title: 'Malta', value: 'MT'},
      {title: 'Marokko', value: 'MA'},
      {title: 'Mauretanien', value: 'MR'},
      {title: 'Mauritius', value: 'MU'},
      {title: 'Mexiko', value: 'MX'},
      {title: 'Moldau', value: 'MD'},
      {title: 'Mongolei', value: 'MN'},
      {title: 'Montenegro', value: 'ME'},
      {title: 'Montserrat', value: 'MS'},
      {title: 'Mosambik', value: 'MZ'},
      {title: 'Myanmar', value: 'MM'},
      {title: 'Namibia', value: 'NA'},
      {title: 'Nepal', value: 'NP'},
      {title: 'Neukaledonien', value: 'NC'},
      {title: 'Neuseeland', value: 'NZ'},
      {title: 'Nicaragua', value: 'NI'},
      {title: 'Niederlande', value: 'NL'},
      {title: 'Niger', value: 'NE'},
      {title: 'Nigeria', value: 'NG'},
      {title: 'Nordirland', value: 'GB-NIR'},
      {title: 'Nordmazedonien', value: 'MK'},
      {title: 'Norwegen', value: 'NO'},
      {title: 'Oman', value: 'OM'},
      {title: 'Österreich', value: 'AT'},
      {title: 'Osttimor', value: 'TL'},
      {title: 'Pakistan', value: 'PK'},
      {title: 'Palästina', value: 'PS'},
      {title: 'Panama', value: 'PA'},
      {title: 'Papua-Neuguinea', value: 'PG'},
      {title: 'Paraguay', value: 'PY'},
      {title: 'Peru', value: 'PE'},
      {title: 'Philippinen', value: 'PH'},
      {title: 'Polen', value: 'PL'},
      {title: 'Portugal', value: 'PT'},
      {title: 'Puerto Rico', value: 'PR'},
      {title: 'Republik Kongo', value: 'CG'},
      {title: 'Ruanda', value: 'RW'},
      {title: 'Rumänien', value: 'RO'},
      {title: 'Russland', value: 'RU'},
      {title: 'Saint Kitts und Nevis', value: 'KN'},
      {title: 'Saint Lucia', value: 'LC'},
      {title: 'Saint Vincent und die Grenadinen', value: 'VC'},
      {title: 'Salomonen', value: 'SB'},
      {title: 'Sambia', value: 'ZM'},
      {title: 'Samoa', value: 'WS'},
      {title: 'San Marino', value: 'SM'},
      {title: 'São Tomé und Principé', value: 'ST'},
      {title: 'Saudi-Arabien', value: 'SA'},
      {title: 'Schottland', value: 'GB-SCT'},
      {title: 'Schweden', value: 'SE'},
      {title: 'Schweiz', value: 'CH'},
      {title: 'Senegal', value: 'SN'},
      {title: 'Serbien', value: 'RS'},
      {title: 'Seychellen', value: 'SC'},
      {title: 'Sierra Leone', value: 'SL'},
      {title: 'Simbabwe', value: 'ZW'},
      {title: 'Singapur', value: 'SG'},
      {title: 'Slowakei', value: 'SK'},
      {title: 'Slowenien', value: 'SI'},
      {title: 'Somalia', value: 'SO'},
      {title: 'Spanien', value: 'ES'},
      {title: 'Sri Lanka', value: 'LK'},
      {title: 'Südafrika', value: 'ZA'},
      {title: 'Sudan', value: 'SD'},
      {title: 'Südsudan', value: 'SS'},
      {title: 'Suriname', value: 'SR'},
      {title: 'Syrien', value: 'SY'},
      {title: 'Tadschikistan', value: 'TJ'},
      {title: 'Tahiti', value: 'PF-TAH'},
      {title: 'Tansania', value: 'TZ'},
      {title: 'Thailand', value: 'TH'},
      {title: 'Togo', value: 'TG'},
      {title: 'Tonga', value: 'TO'},
      {title: 'Trinidad und Tobago', value: 'TT'},
      {title: 'Tschad', value: 'TD'},
      {title: 'Tschechien', value: 'CZ'},
      {title: 'Tunesien', value: 'TN'},
      {title: 'Türkei', value: 'TR'},
      {title: 'Turkmenistan', value: 'TM'},
      {title: 'Turks- und Caicosinseln', value: 'TC'},
      {title: 'Uganda', value: 'UG'},
      {title: 'Ukraine', value: 'UA'},
      {title: 'Ungarn', value: 'HU'},
      {title: 'Uruguay', value: 'UY'},
      {title: 'Usbekistan', value: 'UZ'},
      {title: 'Vanuatu', value: 'VU'},
      {title: 'Venezuela', value: 'VE'},
      {title: 'Vereinigte Arabische Emirate', value: 'AE'},
      {title: 'Vereinigte Staaten', value: 'US'},
      {title: 'Vietnam', value: 'VN'},
      {title: 'Wales', value: 'GB-WLS'},
      {title: 'Zentralafrikanische Republik', value: 'CF'},
      {title: 'Zypern', value: 'CY'},
    ],
  },
}

export default Team
