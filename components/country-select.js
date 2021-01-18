import React from 'react';
import { View, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class CountrySelect extends React.Component {
    render(){
        return(
            <View>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Canada', value: 'CA' },
                        { label: 'United States', value: 'US' },
                        { label: 'Afghanistan', value: 'AF' },
                        { label: 'Albania', value: 'AL' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                    placeholder={{label:"Country ISO Code",value:null}}
        />
            </View>
        )
    }
}

// Afghanistan	   	            AF / AFG
// Albania	   	                ALB
// Algeria	   	                DZA
// American Samoa		   	    AS / ASM
// Andorra			   	   AD / AND
// Angola		   	   AO / AGO
// Anguilla		   	   AI / AIA
// Antarctica		   	   AQ / ATA
// Antigua and Barbuda		   	   AG / ATG
// Argentina		   	   AR / ARG
// Armenia		   	   AM / ARM
// Aruba		   	   AW / ABW
// Australia		   	   AU / AUS
// Austria		   	   AT / AUT
// Azerbaijan		   	   994	AZ / AZE
// Bahamas		   	   BS / BHS
// Bahrain		   	   BH / BHR
// Bangladesh		   	   BD / BGD
// Barbados		   	   BB / BRB
// Belarus			   	   BY / BLR
// Belgium			   	   BE / BEL
// Belize			   	   BZ / BLZ
// Benin			   	   BJ / BEN
// Bermuda			   	   BM / BMU
// Bhutan			   	   	BT / BTN
// Bolivia			   	   	BO / BOL
// Bosnia and Herzegovina		   	   BA / BIH
// Botswana		   	   BW / BWA
// Brazil		   	   BR / BRA
// British Indian Ocean Territory		   	   IO / IOT
// British Virgin Islands		   	   VG / VGB
// Brunei		   	   BN / BRN
// Bulgaria		   	   BG / BGR
// Burkina Faso		   	   BF / BFA
// Burundi		   	   BI / BDI
// Cambodia		   	   KH / KHM
// Cameroon		   	   CM / CMR
// Canada		   	   CA / CAN
// Cape Verde		   	   CV / CPV
// Cayman Islands		   	   KY / CYM
// Central African Republic		   	   CF / CAF
// Chad		   	   	TD / TCD
// Chile		   	   CL / CHL
// China		   	   CN / CHN
// Christmas Island		   	   CX / CXR
// Cocos Islands		   	   CC / CCK
// Colombia		   	   CO / COL
// Comoros		   	   KM / COM
// Cook Islands		   	   CK / COK
// Costa Rica		   	   CR / CRI
// Croatia		   	   HR / HRV
// Cuba			   	   CU / CUB
// Curacao		   	   CW / CUW
// Cyprus		   	   CY / CYP
// Czech Republic		   	   CZ / CZE
// Democratic Republic of the Congo		   	   CD / COD
// Denmark			   	   DK / DNK
// Djibouti		   	   DJ / DJI
// Dominica		   	   DM / DMA
// Dominican Republic		   	   DO / DOM
// East Timor		   	   TL / TLS
// Ecuador			   	   EC / ECU
// Egypt			   	   EG / EGY
// El Salvador		   	   SV / SLV
// Equatorial Guinea		   	   	GQ / GNQ
// Eritrea			   	   ER / ERI
// Estonia			   	   EE / EST
// Ethiopia		   	   ET / ETH
// Falkland Islands		   	   FK / FLK
// Faroe Islands		   	   FO / FRO
// Fiji			   	   FJ / FJI
// Finland			   	   FI / FIN
// France			   	   FR / FRA
// French Polynesia		   	   	PF / PYF
// Gabon			   	   GA / GAB
// Gambia			   	   GM / GMB
// Georgia			   	   GE / GEO
// Germany			   	   DE / DEU
// Ghana			   	   GH / GHA
// Gibraltar		   	   GI / GIB
// Greece			   	   GR / GRC
// Greenland			   	   GL / GRL
// Grenada			   	   GD / GRD
// Guam			   	   GU / GUM
// Guatemala			   	   GT / GTM
// Guernsey			   	   GG / GGY
// Guinea			   	   GN / GIN
// Guinea-Bissau		   	   GW / GNB
// Guyana		   	   GY / GUY
// Haiti		   	   HT / HTI
// Honduras		   	   	HN / HND
// Hong Kong		   	   	HK / HKG
// Hungary			   	   HU / HUN
// Iceland			   	   IS / ISL
// India			   	   IN / IND
// Indonesia			   	   ID / IDN
// Iran			   	   IR / IRN
// Iraq			   	   IQ / IRQ
// Ireland			   	   IE / IRL
// Isle of Man		   	   IM / IMN
// Israel			   	   IL / ISR
// Italy			   	   IT / ITA
// Ivory Coast		   	   CI / CIV
// Jamaica			   	   JM / JAM
// Japan			   	   JP / JPN
// Jersey			   	   JE / JEY
// Jordan			   	   JO / JOR
// Kazakhstan			   	   KZ / KAZ
// Kenya			   	   KE / KEN
// Kiribati			   	   KI / KIR
// Kosovo			   	   XK / XKX
// Kuwait			   	   KW / KWT
// Kyrgyzstan		   	   	KG / KGZ
// Laos			   	   LA / LAO
// Latvia			   	   LV / LVA
// Lebanon			   	   LB / LBN
// Lesotho			   	   LS / LSO
// Liberia			   	   LR / LBR
// Libya			   	   LY / LBY
// Liechtenstein		   	   	LI / LIE
// Lithuania		   	   	LT / LTU
// Luxembourg			   	   	LU / LUX
// Macau			   	   MO / MAC
// Macedonia			   	   MK / MKD
// Madagascar			   	   MG / MDG
// Malawi			   	   MW / MWI
// Malaysia			   	   MY / MYS
// Maldives			   	   MV / MDV
// Mali			   	   ML / MLI
// Malta			   	   MT / MLT
// Marshall Islands			   	   MH / MHL
// Mauritania		   	   	MR / MRT
// Mauritius		   	   	MU / MUS
// Mayotte		   	   YT / MYT
// Mexico		   	   MX / MEX
// Micronesia		   	   FM / FSM
// Moldova		   	   MD / MDA
// Monaco		   	   MC / MCO
// Mongolia			   	   	MN / MNG
// Montenegro			   	   	ME / MNE
// Montserrat		   	   MS / MSR
// Morocco		   	   MA / MAR
// Mozambique		   	   MZ / MOZ
// Myanmar		   	   MM / MMR
// Namibia		   	   NA / NAM
// Nauru			   	   NR / NRU
// Nepal			   	   NP / NPL
// Netherlands		   	   	NL / NLD
// Netherlands Antilles		   	   	AN / ANT
// New Caledonia		   	   NC / NCL
// New Zealand		   	   	NZ / NZL
// Nicaragua		   	   	NI / NIC
// Niger			   	   NE / NER
// Nigeria			   	   NG / NGA
// Niue			   	   NU / NIU
// North Korea			   	   KP / PRK
// Northern Mariana Islands		   	   MP / MNP
// Norway			   	   NO / NOR
// Oman			   	   OM / OMN
// Pakistan		   	   	PK / PAK
// Palau		   	   	PW / PLW
// Palestine		   	   	PS / PSE
// Panama		   	   	PA / PAN
// Papua New Guinea		   	   	PG / PNG
// Paraguay		   	   	PY / PRY
// Peru		   	   	PE / PER
// Philippines		   	   PH / PHL
// Pitcairn			   	   PN / PCN
// Poland		   	   PL / POL
// Portugal		   	   	PT / PRT
// Puerto Rico		   	   	PR / PRI
// Qatar		   	   	QA / QAT
// Republic of the Congo		   	   	CG / COG
// Reunion		   	   	RE / REU
// Romania		   	   	RO / ROU
// Russia		   	   RU / RUS
// Rwanda		   	   	RW / RWA
// Saint Barthelemy			   	   		BL / BLM
// Saint Helena			   	   	SH / SHN
// Saint Kitts and Nevis			   	   	KN / KNA
// Saint Lucia			   	   		LC / LCA
// Saint Martin			   	   	MF / MAF
// Saint Pierre and Miquelon			   	   	PM / SPM
// Saint Vincent and the Grenadines			   	   	VC / VCT
// Samoa			   	   	WS / WSM
// San Marino		   	   		SM / SMR
// Sao Tome and Principe		   	   		ST / STP
// Saudi Arabia		   	   	SA / SAU
// Senegal		   	   		SN / SEN
// Serbia		   	   		RS / SRB
// Seychelles		   	   		SC / SYC
// Sierra Leone		   	   		SL / SLE
// Singapore		   	   		SG / SGP
// Sint Maarten		   	   	SX / SXM
// Slovakia			   	   	SK / SVK
// Slovenia			   	   	SI / SVN
// Solomon Islands			   	   	SB / SLB
// Somalia			   	   	SO / SOM
// South Africa			   	   	ZA / ZAF
// South Korea			   	   	KR / KOR
// South Sudan			   	   	SS / SSD
// Spain			   	   	ES / ESP
// Sri Lanka			   	   	LK / LKA
// Sudan			   	   	SD / SDN
// Suriname			   	   	SR / SUR
// Svalbard and Jan Mayen		   	   		SJ / SJM
// Swaziland			   	   	SZ / SWZ
// Sweden			   	   	SE / SWE
// Switzerland			   	   	CH / CHE
// Syria		   	    	SY / SYR
// Taiwan		   	    	TW / TWN
// Tajikistan			   	   	TJ / TJK
// Tanzania			   	   	TZ / TZA
// Thailand			   	   	TH / THA
// Togo			   	   	TG / TGO
// Tokelau			   	   	TK / TKL
// Tonga			   	   	TO / TON
// Trinidad and Tobago			   	   	TT / TTO
// Tunisia			   	   	TN / TUN
// Turkey			   	   	TR / TUR
// Turkmenistan			   	   	TM / TKM
// Turks and Caicos Islands			   	   	TC / TCA
// Tuvalu			   	   	TV / TUV
// U.S. Virgin Islands			   	   	VI / VIR
// Uganda			   	   	UG / UGA
// Ukraine			   	   	UA / UKR
// United Arab Emirates			   	   	AE / ARE
// United Kingdom			   	   	GB / GBR
// United States			   	   	US / USA
// Uruguay			   	   	UY / URY
// Uzbekistan		   	   	UZ / UZB
// Vanuatu			   	   	VU / VUT
// Vatican			   	   	VA / VAT
// Venezuela			   	   	VE / VEN
// Vietnam			   	   	VN / VNM
// Wallis and Futuna			   	   	WF / WLF
// Western Sahara			   	   	EH / ESH
// Yemen			   	   	YE / YEM
// Zambia			   	   	ZM / ZMB
// Zimbabwe			   	   	ZW / ZWE