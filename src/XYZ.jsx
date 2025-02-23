

import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Table() {
  const apiLink = "https://mhcv-backend-taupe.vercel.app/get-data2";
  //download csv link fo both
  const linkSSI = "https://mhcv-backend-taupe.vercel.app/download-csv2";
  const linkCSI = "https://mhcv-backend-taupe.vercel.app/download-csv2";

  const [SSI, setSSI] = useState([]);
  const [CSI, setCSI] = useState([]);
  const SSIApi = [
      {
        "SalesOrganisationCode": "L007",
        "Dealer": "SABOO AUTOZONE",
        "SampleSize": 1485
      },
      {
        "SalesOrganisationCode": "L154",
        "Dealer": "AUTOWORLD (N.G.SALES)",
        "SampleSize": 1339
      },
      {
        "SalesOrganisationCode": "L022",
        "Dealer": "MALIK MOTORS (P) LIMITED",
        "SampleSize": 1086
      },
      {
        "SalesOrganisationCode": "L003",
        "Dealer": "CAUVERY MOTORS (P) LTD",
        "SampleSize": 981
      },
      {
        "SalesOrganisationCode": "L028",
        "Dealer": "KUN CAPITAL AUTO PVT.LTD",
        "SampleSize": 811
      },
      {
        "SalesOrganisationCode": "L019",
        "Dealer": "KUN CAPITAL AUTOMOTIVE",
        "SampleSize": 793
      },
      {
        "SalesOrganisationCode": "L141",
        "Dealer": "CITY WHEELS",
        "SampleSize": 766
      },
      {
        "SalesOrganisationCode": "L157",
        "Dealer": "KUN CAPITAL AUTOMOTIVE",
        "SampleSize": 764
      },
      {
        "SalesOrganisationCode": "L366",
        "Dealer": "Channamma Automotive",
        "SampleSize": 759
      },
      {
        "SalesOrganisationCode": "L415",
        "Dealer": "Sanav Automotives",
        "SampleSize": 682
      },
      {
        "SalesOrganisationCode": "L377",
        "Dealer": "Swarnambigai Motor",
        "SampleSize": 652
      },
      {
        "SalesOrganisationCode": "L041",
        "Dealer": "CAUVERYMOTORS P LTDMYSORE",
        "SampleSize": 648
      },
      {
        "SalesOrganisationCode": "L002",
        "Dealer": "AMMAN AUTO (P) LTD",
        "SampleSize": 622
      },
      {
        "SalesOrganisationCode": "L034",
        "Dealer": "KANCHANA AUTOMOTIVE",
        "SampleSize": 596
      },
      {
        "SalesOrganisationCode": "L348",
        "Dealer": "Magnum Motors",
        "SampleSize": 572
      },
      {
        "SalesOrganisationCode": "L053",
        "Dealer": "VENKATESHWARA AUTO MOTORS",
        "SampleSize": 558
      },
      {
        "SalesOrganisationCode": "L010",
        "Dealer": "INDUS MOTORS LCV (P) LTD",
        "SampleSize": 554
      },
      {
        "SalesOrganisationCode": "L012",
        "Dealer": "ARUNA MOTORS (P) LTD",
        "SampleSize": 542
      },
      {
        "SalesOrganisationCode": "L178",
        "Dealer": "SAGAR FUEL INJECTION",
        "SampleSize": 519
      },
      {
        "SalesOrganisationCode": "L035",
        "Dealer": "LAKSHMI AUTOMOTIVES",
        "SampleSize": 505
      },
      {
        "SalesOrganisationCode": "L198",
        "Dealer": "LUCKY AUTO",
        "SampleSize": 504
      },
      {
        "SalesOrganisationCode": "L437",
        "Dealer": "Kun Capital AutomotivePvt",
        "SampleSize": 492
      },
      {
        "SalesOrganisationCode": "L100",
        "Dealer": "SARVESH TRUCKS & MOTORS",
        "SampleSize": 488
      },
      {
        "SalesOrganisationCode": "L192",
        "Dealer": "SNS Automobiles",
        "SampleSize": 453
      },
      {
        "SalesOrganisationCode": "L387",
        "Dealer": "Santhosh Automobiless",
        "SampleSize": 433
      },
      {
        "SalesOrganisationCode": "L421",
        "Dealer": "Rashmi Auto Udyog Private",
        "SampleSize": 432
      },
      {
        "SalesOrganisationCode": "L188",
        "Dealer": "PULLANI ENGINEERS PVT. LT",
        "SampleSize": 426
      },
      {
        "SalesOrganisationCode": "L344",
        "Dealer": "Anwar Motors",
        "SampleSize": 422
      },
      {
        "SalesOrganisationCode": "L062",
        "Dealer": "RENUKA AUTOMOTIVE",
        "SampleSize": 421
      },
      {
        "SalesOrganisationCode": "L351",
        "Dealer": "Krishnaa Motors",
        "SampleSize": 419
      },
      {
        "SalesOrganisationCode": "L396",
        "Dealer": "Sai Gajanan Motors LLP",
        "SampleSize": 417
      },
      {
        "SalesOrganisationCode": "L083",
        "Dealer": "RAJGARHIA MOTOR",
        "SampleSize": 407
      },
      {
        "SalesOrganisationCode": "L009",
        "Dealer": "EVM LIGHT COMMERCIAL MOTO",
        "SampleSize": 402
      },
      {
        "SalesOrganisationCode": "L063",
        "Dealer": "MPL LIGHT VEHICLES PVT TN",
        "SampleSize": 397
      },
      {
        "SalesOrganisationCode": "L151",
        "Dealer": "MAA PADMAVATI MOTORS",
        "SampleSize": 396
      },
      {
        "SalesOrganisationCode": "L137",
        "Dealer": "GOPINATH MOTOR PVT. LTD",
        "SampleSize": 387
      },
      {
        "SalesOrganisationCode": "L049",
        "Dealer": "BHAGWAT ASSOCIATES",
        "SampleSize": 385
      },
      {
        "SalesOrganisationCode": "L191",
        "Dealer": "ATC AUTOMOTIVE",
        "SampleSize": 381
      },
      {
        "SalesOrganisationCode": "L405",
        "Dealer": "Hitech Motors And Automob",
        "SampleSize": 380
      },
      {
        "SalesOrganisationCode": "L020",
        "Dealer": "INDUS MOTORS LCV PVT .LTD",
        "SampleSize": 377
      },
      {
        "SalesOrganisationCode": "L480",
        "Dealer": "Balaji Trucks",
        "SampleSize": 371
      },
      {
        "SalesOrganisationCode": "L155",
        "Dealer": "SHREE GAJANAND MOTORS",
        "SampleSize": 360
      },
      {
        "SalesOrganisationCode": "L403",
        "Dealer": "Bjsmpl Motors LLP",
        "SampleSize": 342
      },
      {
        "SalesOrganisationCode": "L145",
        "Dealer": "VIP ENTERPRISE PVT.LTD",
        "SampleSize": 288
      },
      {
        "SalesOrganisationCode": "L409",
        "Dealer": "Gulati Motors",
        "SampleSize": 262
      },
      {
        "SalesOrganisationCode": "L471",
        "Dealer": "Shree Lakshmi Commercial",
        "SampleSize": 256
      },
      {
        "SalesOrganisationCode": "L376",
        "Dealer": "Movish Automobile Pvt Ltd",
        "SampleSize": 243
      },
      {
        "SalesOrganisationCode": "L401",
        "Dealer": "Raipur Motors Pvt. Ltd",
        "SampleSize": 238
      },
      {
        "SalesOrganisationCode": "L406",
        "Dealer": "Aruna Trucks.",
        "SampleSize": 237
      },
      {
        "SalesOrganisationCode": "L473",
        "Dealer": "ARP Motors Pvt Ltd",
        "SampleSize": 235
      },
      {
        "SalesOrganisationCode": "L494",
        "Dealer": "Aadi Autolinks Private Li",
        "SampleSize": 223
      },
      {
        "SalesOrganisationCode": "L451",
        "Dealer": "Raj Diesels LLP",
        "SampleSize": 222
      },
      {
        "SalesOrganisationCode": "L422",
        "Dealer": "ARS  Motors",
        "SampleSize": 221
      },
      {
        "SalesOrganisationCode": "L300",
        "Dealer": "D.R. Brijmohan & Sons (P)",
        "SampleSize": 209
      },
      {
        "SalesOrganisationCode": "L066",
        "Dealer": "BEEAAR AUTOWHEELS INDIA",
        "SampleSize": 206
      },
      {
        "SalesOrganisationCode": "L054",
        "Dealer": "ADITYA AGENCY",
        "SampleSize": 204
      },
      {
        "SalesOrganisationCode": "L124",
        "Dealer": "AJMERA MOTORS",
        "SampleSize": 203
      },
      {
        "SalesOrganisationCode": "L335",
        "Dealer": "Flagship Motors",
        "SampleSize": 196
      },
      {
        "SalesOrganisationCode": "L320",
        "Dealer": "Yashodha Motors Pvt. Ltd",
        "SampleSize": 194
      },
      {
        "SalesOrganisationCode": "L439",
        "Dealer": "Amrit Cargo",
        "SampleSize": 192
      },
      {
        "SalesOrganisationCode": "L389",
        "Dealer": "Gajanan Automobiles Pvt L",
        "SampleSize": 191
      },
      {
        "SalesOrganisationCode": "L499",
        "Dealer": "Ganga Automobile",
        "SampleSize": 190
      },
      {
        "SalesOrganisationCode": "L407",
        "Dealer": "Aaryan Motors",
        "SampleSize": 175
      },
      {
        "SalesOrganisationCode": "L492",
        "Dealer": "Shree Amba Motors",
        "SampleSize": 171
      },
      {
        "SalesOrganisationCode": "L482",
        "Dealer": "Tara Autokart Private Lim",
        "SampleSize": 162
      },
      {
        "SalesOrganisationCode": "L059",
        "Dealer": "KIARA AUTOMOBILES PVT.LTD",
        "SampleSize": 161
      },
      {
        "SalesOrganisationCode": "L056",
        "Dealer": "GROVER MOTORS PVT. LTD",
        "SampleSize": 155
      },
      {
        "SalesOrganisationCode": "L175",
        "Dealer": "ADVANCE AUTOMOBILES",
        "SampleSize": 152
      },
      {
        "SalesOrganisationCode": "L472",
        "Dealer": "Shri Ram Associates",
        "SampleSize": 151
      },
      {
        "SalesOrganisationCode": "L340",
        "Dealer": "Aparna Automotives",
        "SampleSize": 149
      },
      {
        "SalesOrganisationCode": "L368",
        "Dealer": "Jai Ganesh Auto Centre",
        "SampleSize": 145
      },
      {
        "SalesOrganisationCode": "L307",
        "Dealer": "Rajesh Motors (Auto)",
        "SampleSize": 143
      },
      {
        "SalesOrganisationCode": "L490",
        "Dealer": "Ganga Automobile",
        "SampleSize": 143
      },
      {
        "SalesOrganisationCode": "L441",
        "Dealer": "Dutt Autohaus",
        "SampleSize": 141
      },
      {
        "SalesOrganisationCode": "L380",
        "Dealer": "Jalan Automobiles Pvt Ltd",
        "SampleSize": 139
      },
      {
        "SalesOrganisationCode": "L075",
        "Dealer": "AMCO AUTOMOBILES PVT. LTD",
        "SampleSize": 136
      },
      {
        "SalesOrganisationCode": "L111",
        "Dealer": "TIRUPATI STEELS",
        "SampleSize": 134
      },
      {
        "SalesOrganisationCode": "L371",
        "Dealer": "Sreejit Automotive Pvt. L",
        "SampleSize": 134
      },
      {
        "SalesOrganisationCode": "L374",
        "Dealer": "Paras Trucks",
        "SampleSize": 132
      },
      {
        "SalesOrganisationCode": "L402",
        "Dealer": "USK Equipments LLP",
        "SampleSize": 130
      },
      {
        "SalesOrganisationCode": "L513",
        "Dealer": "Arkade Auto Private Limit",
        "SampleSize": 127
      },
      {
        "SalesOrganisationCode": "L414",
        "Dealer": "T R Enterprises",
        "SampleSize": 126
      },
      {
        "SalesOrganisationCode": "L190",
        "Dealer": "JAHANVI AUTOMOBILES",
        "SampleSize": 121
      },
      {
        "SalesOrganisationCode": "L483",
        "Dealer": "VMT Motors Llp",
        "SampleSize": 116
      },
      {
        "SalesOrganisationCode": "L106",
        "Dealer": "GEMINI MOTORS",
        "SampleSize": 113
      },
      {
        "SalesOrganisationCode": "L074",
        "Dealer": "RAHUL PAM PVT. LTD",
        "SampleSize": 112
      },
      {
        "SalesOrganisationCode": "L397",
        "Dealer": "Ishwartech Auto Indust.",
        "SampleSize": 104
      },
      {
        "SalesOrganisationCode": "L346",
        "Dealer": "Shanti Motors",
        "SampleSize": 103
      },
      {
        "SalesOrganisationCode": "L081",
        "Dealer": "PMG MOTORS",
        "SampleSize": 100
      },
      {
        "SalesOrganisationCode": "L080",
        "Dealer": "TIRHUT AUTOMOBILES",
        "SampleSize": 95
      },
      {
        "SalesOrganisationCode": "L423",
        "Dealer": "Autoveer Pvt Ltd",
        "SampleSize": 95
      },
      {
        "SalesOrganisationCode": "L121",
        "Dealer": "MAHAVEER WHEELS",
        "SampleSize": 94
      },
      {
        "SalesOrganisationCode": "L440",
        "Dealer": "Gurunanak Automobiles",
        "SampleSize": 92
      },
      {
        "SalesOrganisationCode": "L458",
        "Dealer": "Ya Mobility Llp",
        "SampleSize": 88
      },
      {
        "SalesOrganisationCode": "L432",
        "Dealer": "Csg Automobiles",
        "SampleSize": 88
      },
      {
        "SalesOrganisationCode": "L386",
        "Dealer": "2020 Motors Pvt. Ltd",
        "SampleSize": 84
      },
      {
        "SalesOrganisationCode": "L443",
        "Dealer": "Patliputra Motors Pvt. Lt",
        "SampleSize": 80
      },
      {
        "SalesOrganisationCode": "L375",
        "Dealer": "Bharat Engineering Works",
        "SampleSize": 79
      },
      {
        "SalesOrganisationCode": "L349",
        "Dealer": "Landmark Automobiles",
        "SampleSize": 78
      },
      {
        "SalesOrganisationCode": "L189",
        "Dealer": "TRUST AUTOMOBILES",
        "SampleSize": 78
      },
      {
        "SalesOrganisationCode": "L428",
        "Dealer": "Shanti SudamaMotors Pvt.",
        "SampleSize": 78
      },
      {
        "SalesOrganisationCode": "L435",
        "Dealer": "Hulash Motor Private Limi",
        "SampleSize": 75
      },
      {
        "SalesOrganisationCode": "L412",
        "Dealer": "Jagdishwar Enter. P Ltd",
        "SampleSize": 73
      },
      {
        "SalesOrganisationCode": "L427",
        "Dealer": "CITY WHEELS",
        "SampleSize": 70
      },
      {
        "SalesOrganisationCode": "L515",
        "Dealer": "Kamal Autolinks Private L",
        "SampleSize": 70
      },
      {
        "SalesOrganisationCode": "L506",
        "Dealer": "Jain Auto Wheels Llp",
        "SampleSize": 69
      },
      {
        "SalesOrganisationCode": "L489",
        "Dealer": "De Crown Motors",
        "SampleSize": 69
      },
      {
        "SalesOrganisationCode": "L496",
        "Dealer": "Arantya Auto",
        "SampleSize": 66
      },
      {
        "SalesOrganisationCode": "L159",
        "Dealer": "SRI RAM AUTOMOBILE",
        "SampleSize": 64
      },
      {
        "SalesOrganisationCode": "L094",
        "Dealer": "AGARWAL AUTOZONE",
        "SampleSize": 63
      },
      {
        "SalesOrganisationCode": "L044",
        "Dealer": "MPL LIGHT VEHICLES PVT",
        "SampleSize": 63
      },
      {
        "SalesOrganisationCode": "L488",
        "Dealer": "Saket Autowheels Private",
        "SampleSize": 58
      },
      {
        "SalesOrganisationCode": "L493",
        "Dealer": "Tirupati Automobiles",
        "SampleSize": 57
      },
      {
        "SalesOrganisationCode": "L144",
        "Dealer": "ANAND AUTOMOTIVE",
        "SampleSize": 56
      },
      {
        "SalesOrganisationCode": "L413",
        "Dealer": "Seven Dawn Concepts",
        "SampleSize": 55
      },
      {
        "SalesOrganisationCode": "L208",
        "Dealer": "GYAN MOTORS",
        "SampleSize": 51
      },
      {
        "SalesOrganisationCode": "L479",
        "Dealer": "Kiara Automobiles Private",
        "SampleSize": 47
      },
      {
        "SalesOrganisationCode": "L507",
        "Dealer": "TVS Trucks And Buses Pvt",
        "SampleSize": 47
      },
      {
        "SalesOrganisationCode": "L497",
        "Dealer": "JVH Trucking",
        "SampleSize": 46
      },
      {
        "SalesOrganisationCode": "L316",
        "Dealer": "Indian Auto Wheels",
        "SampleSize": 45
      },
      {
        "SalesOrganisationCode": "L436",
        "Dealer": "Jagannath Vahan Pvt. Ltd",
        "SampleSize": 43
      },
      {
        "SalesOrganisationCode": "L093",
        "Dealer": "SANJIBANI MOTORS PVT. LTD",
        "SampleSize": 40
      },
      {
        "SalesOrganisationCode": "L498",
        "Dealer": "Patliputra Motors Private",
        "SampleSize": 37
      },
      {
        "SalesOrganisationCode": "L447",
        "Dealer": "P C Bhandari Vehicles",
        "SampleSize": 36
      },
      {
        "SalesOrganisationCode": "L438",
        "Dealer": "Tirupati Motors",
        "SampleSize": 31
      },
      {
        "SalesOrganisationCode": "L476",
        "Dealer": "A P Auto Zone",
        "SampleSize": 31
      },
      {
        "SalesOrganisationCode": "L321",
        "Dealer": "Jai Ambay Automobiles",
        "SampleSize": 27
      },
      {
        "SalesOrganisationCode": "L468",
        "Dealer": "Sunil Auto Enterprises",
        "SampleSize": 25
      },
      {
        "SalesOrganisationCode": "L510",
        "Dealer": "Bharat Motors",
        "SampleSize": 24
      },
      {
        "SalesOrganisationCode": "L416",
        "Dealer": "NRL Truckers",
        "SampleSize": 24
      },
      {
        "SalesOrganisationCode": "L150",
        "Dealer": "SUVIDHA MOVERS PVT LTD",
        "SampleSize": 21
      },
      {
        "SalesOrganisationCode": "L486",
        "Dealer": "Shashank Auto Agrico",
        "SampleSize": 19
      },
      {
        "SalesOrganisationCode": "L457",
        "Dealer": "Popu Automobiles",
        "SampleSize": 16
      },
      {
        "SalesOrganisationCode": "L211",
        "Dealer": "JAGRITRI MOTORS",
        "SampleSize": 14
      },
      {
        "SalesOrganisationCode": "L388",
        "Dealer": "Rajesh Motors(Auto) P Ltd",
        "SampleSize": 12
      },
      {
        "SalesOrganisationCode": "L491",
        "Dealer": "Shree Udai Traders",
        "SampleSize": 12
      },
      {
        "SalesOrganisationCode": "L478",
        "Dealer": "Imperial Agro Private Lim",
        "SampleSize": 11
      },
      {
        "SalesOrganisationCode": "L434",
        "Dealer": "Andaman Automobile Agency",
        "SampleSize": 7
      },
      {
        "SalesOrganisationCode": "L202",
        "Dealer": "LERINAH MOTORS",
        "SampleSize": 5
      },
      {
        "SalesOrganisationCode": "L444",
        "Dealer": "Liando Auto Works",
        "SampleSize": 4
      }
  ];

  const CSIApi = [
    {
      "SalesOrganisationCode": 1040,
      "Dealer": "CAUVERY MOTORS (P) LTD)",
      "SampleSize": 752
    },
    {
      "SalesOrganisationCode": 8160,
      "Dealer": "Sanav Automotives",
      "SampleSize": 447
    },
    {
      "SalesOrganisationCode": 4940,
      "Dealer": "LUCKY AUTO",
      "SampleSize": 436
    },
    {
      "SalesOrganisationCode": 1540,
      "Dealer": "KUN CAPITAL AUTOMOTIVE PVT LTD",
      "SampleSize": 400
    },
    {
      "SalesOrganisationCode": 8220,
      "Dealer": "Rashmi Auto Udyog Private Ltd",
      "SampleSize": 396
    },
    {
      "SalesOrganisationCode": 4941,
      "Dealer": "LUCKY AUTO(DSC-SAN)",
      "SampleSize": 395
    },
    {
      "SalesOrganisationCode": 1420,
      "Dealer": "MALIK MOTORS PRIVATE LIMITED",
      "SampleSize": 383
    },
    {
      "SalesOrganisationCode": 7780,
      "Dealer": "Swarnambigai Motor",
      "SampleSize": 352
    },
    {
      "SalesOrganisationCode": 2980,
      "Dealer": "SARVESH TRUCKS & MOTORS",
      "SampleSize": 348
    },
    {
      "SalesOrganisationCode": 1800,
      "Dealer": "CAUVERY MOTORS (P)LTD, MYSORE",
      "SampleSize": 344
    },
    {
      "SalesOrganisationCode": 4800,
      "Dealer": "ATC AUTOMOTIVE",
      "SampleSize": 334
    },
    {
      "SalesOrganisationCode": 4060,
      "Dealer": "AUTOWORLD(A UNIT OF N.G.SALES)",
      "SampleSize": 331
    },
    {
      "SalesOrganisationCode": 1024,
      "Dealer": "AMMAN AUTO(DSC-TPR)",
      "SampleSize": 312
    },
    {
      "SalesOrganisationCode": 4741,
      "Dealer": "PULLANI ENGINEERS PVT. LTD(DSC",
      "SampleSize": 304
    },
    {
      "SalesOrganisationCode": 3720,
      "Dealer": "GOPINATH MOTOR PVT. LTD",
      "SampleSize": 301
    },
    {
      "SalesOrganisationCode": 3800,
      "Dealer": "CITY WHEELS",
      "SampleSize": 294
    },
    {
      "SalesOrganisationCode": 1047,
      "Dealer": "Cauvery Motors (DSC-KRP)",
      "SampleSize": 291
    },
    {
      "SalesOrganisationCode": 1020,
      "Dealer": "AMMAN AUTO (P) LTD",
      "SampleSize": 291
    },
    {
      "SalesOrganisationCode": 8730,
      "Dealer": "Shree Lakshmi Commercial",
      "SampleSize": 287
    },
    {
      "SalesOrganisationCode": 4061,
      "Dealer": "AUTO WORLD (DSC-CHA)",
      "SampleSize": 282
    },
    {
      "SalesOrganisationCode": 4063,
      "Dealer": "AUTO WORLD (DSC-HAD)",
      "SampleSize": 282
    },
    {
      "SalesOrganisationCode": 7670,
      "Dealer": "Channamma Automotive",
      "SampleSize": 280
    },
    {
      "SalesOrganisationCode": 8224,
      "Dealer": "Rashmi Auto Udyog (DSC-MAN)",
      "SampleSize": 271
    },
    {
      "SalesOrganisationCode": 8162,
      "Dealer": "Sanav Automotives(DSC-CHI)",
      "SampleSize": 261
    },
    {
      "SalesOrganisationCode": 1120,
      "Dealer": "SABOO AUTOZONE (A Unit of R K",
      "SampleSize": 257
    },
    {
      "SalesOrganisationCode": 1364,
      "Dealer": "KUN CAPITAL (DSC-KAR)",
      "SampleSize": 253
    },
    {
      "SalesOrganisationCode": 1360,
      "Dealer": "KUN CAPITAL AUTOMOTIVE PVT LTD",
      "SampleSize": 252
    },
    {
      "SalesOrganisationCode": 1382,
      "Dealer": "Indus Motors (ATP), Kottyam",
      "SampleSize": 249
    },
    {
      "SalesOrganisationCode": 8100,
      "Dealer": "Gulati Motors",
      "SampleSize": 248
    },
    {
      "SalesOrganisationCode": 8070,
      "Dealer": "Aruna Trucks.",
      "SampleSize": 240
    },
    {
      "SalesOrganisationCode": 2220,
      "Dealer": "RENUKA AUTOMOTIVE",
      "SampleSize": 238
    },
    {
      "SalesOrganisationCode": 4120,
      "Dealer": "KUN CAPITAL AUTOMOTIVE PVT.LTD",
      "SampleSize": 238
    },
    {
      "SalesOrganisationCode": 4480,
      "Dealer": "ADVANCE AUTOMOBILES",
      "SampleSize": 233
    },
    {
      "SalesOrganisationCode": 7454,
      "Dealer": "Anwar Motors(DSC-TEN)",
      "SampleSize": 226
    },
    {
      "SalesOrganisationCode": 4020,
      "Dealer": "M/S NANDINI AUTO CENTRE",
      "SampleSize": 223
    },
    {
      "SalesOrganisationCode": 1801,
      "Dealer": "CAUVERY MOTORS(DSC-MAN)",
      "SampleSize": 222
    },
    {
      "SalesOrganisationCode": 1960,
      "Dealer": "BHAGWAT ASSOCIATES",
      "SampleSize": 222
    },
    {
      "SalesOrganisationCode": 1125,
      "Dealer": "SABOO AUTOZONE(DSC-KUK)",
      "SampleSize": 218
    },
    {
      "SalesOrganisationCode": 2240,
      "Dealer": "MPL LIGHT VEHICLES PVT LTD(TN)",
      "SampleSize": 214
    },
    {
      "SalesOrganisationCode": 8071,
      "Dealer": "Aruna Trucks. (ATP-NEL)",
      "SampleSize": 213
    },
    {
      "SalesOrganisationCode": 7673,
      "Dealer": "Channamma Automotive(DSC-DAV)",
      "SampleSize": 211
    },
    {
      "SalesOrganisationCode": 3100,
      "Dealer": "GEMINI MOTORS",
      "SampleSize": 211
    },
    {
      "SalesOrganisationCode": 2160,
      "Dealer": "KIARA AUTOMOBILES PVT. LTD",
      "SampleSize": 205
    },
    {
      "SalesOrganisationCode": 1048,
      "Dealer": "Cauvery Motors (DSC-YEL)",
      "SampleSize": 205
    },
    {
      "SalesOrganisationCode": 7452,
      "Dealer": "Anwar Motors(DSC-NAG)",
      "SampleSize": 202
    },
    {
      "SalesOrganisationCode": 7883,
      "Dealer": "Santhosh Automobiless(DSC-BHV)",
      "SampleSize": 190
    },
    {
      "SalesOrganisationCode": 7000,
      "Dealer": "D.R. Brijmohan & Sons (P) Ltd",
      "SampleSize": 188
    },
    {
      "SalesOrganisationCode": 7880,
      "Dealer": "Santhosh Automobiless",
      "SampleSize": 188
    },
    {
      "SalesOrganisationCode": 1126,
      "Dealer": "SABOO AUTOZONE(DSC-NAG)",
      "SampleSize": 186
    },
    {
      "SalesOrganisationCode": 1389,
      "Dealer": "INDUS MOTORS (DSC-PAR)",
      "SampleSize": 185
    },
    {
      "SalesOrganisationCode": 3880,
      "Dealer": "VIP ENTERPRISE PVT.LTD",
      "SampleSize": 184
    },
    {
      "SalesOrganisationCode": 1381,
      "Dealer": "INDUS MOTORS LIGHT COMMERCIAL",
      "SampleSize": 182
    },
    {
      "SalesOrganisationCode": 8383,
      "Dealer": "Kun Capital Auto(ATP-THR)",
      "SampleSize": 179
    },
    {
      "SalesOrganisationCode": 4740,
      "Dealer": "PULLANI ENGINEERS PVT. LTD",
      "SampleSize": 177
    },
    {
      "SalesOrganisationCode": 2982,
      "Dealer": "SARVESH TRUCKS(ATP-KPM)",
      "SampleSize": 175
    },
    {
      "SalesOrganisationCode": 1681,
      "Dealer": "LAKSHMI AUTOMOTIVES(ATP-RJY)",
      "SampleSize": 175
    },
    {
      "SalesOrganisationCode": 1683,
      "Dealer": "LAKSHMI AUTOMOTIVES (DSC-KAK)",
      "SampleSize": 175
    },
    {
      "SalesOrganisationCode": 9160,
      "Dealer": "Arkade Auto Private Limited",
      "SampleSize": 175
    },
    {
      "SalesOrganisationCode": 1163,
      "Dealer": "EVM LIGHT COMMERCIAL MOTORS",
      "SampleSize": 173
    },
    {
      "SalesOrganisationCode": 2981,
      "Dealer": "SARVESH TRUCKS & MOTORS(ATP)",
      "SampleSize": 171
    },
    {
      "SalesOrganisationCode": 1181,
      "Dealer": "INDUS MOTORS LIGHT COMMERCIAL",
      "SampleSize": 171
    },
    {
      "SalesOrganisationCode": 7970,
      "Dealer": "Sai Gajanan Motors LLP",
      "SampleSize": 171
    },
    {
      "SalesOrganisationCode": 1662,
      "Dealer": "KANCHANA AUTO(DSC-UPI)",
      "SampleSize": 170
    },
    {
      "SalesOrganisationCode": 8223,
      "Dealer": "Rashmi Auto Udyog (DSC-BER)",
      "SampleSize": 168
    },
    {
      "SalesOrganisationCode": 1680,
      "Dealer": "LAKSHMI AUTOMOTIVES (I) PVTLTD",
      "SampleSize": 167
    },
    {
      "SalesOrganisationCode": 2460,
      "Dealer": "RAHUL PAM PVT. LTD",
      "SampleSize": 165
    },
    {
      "SalesOrganisationCode": 1431,
      "Dealer": "MALIK MOTORS(DSC-SHA)",
      "SampleSize": 164
    },
    {
      "SalesOrganisationCode": 2042,
      "Dealer": "VENKATESHWARA AUTO(DSC-KRM)",
      "SampleSize": 164
    },
    {
      "SalesOrganisationCode": 4700,
      "Dealer": "SRI SAI RAM AUTOMOBILES",
      "SampleSize": 164
    },
    {
      "SalesOrganisationCode": 2060,
      "Dealer": "ADITYA AGENCY",
      "SampleSize": 164
    },
    {
      "SalesOrganisationCode": 1661,
      "Dealer": "KANCHANA AUTOMOTIVE(ATP-HAS)",
      "SampleSize": 160
    },
    {
      "SalesOrganisationCode": 1221,
      "Dealer": "ARUNA MOTORS PVT LTD (ATP)",
      "SampleSize": 160
    },
    {
      "SalesOrganisationCode": 2221,
      "Dealer": "RENUKA AUTOMOTIVE(ATP-GUL)",
      "SampleSize": 159
    },
    {
      "SalesOrganisationCode": 8060,
      "Dealer": "Hitech Motors And Automobiles",
      "SampleSize": 158
    },
    {
      "SalesOrganisationCode": 7881,
      "Dealer": "Santhosh Automobiless(DSC-ERO)",
      "SampleSize": 158
    },
    {
      "SalesOrganisationCode": 8630,
      "Dealer": "Balaji Trucks",
      "SampleSize": 158
    },
    {
      "SalesOrganisationCode": 1373,
      "Dealer": "Kun Capital (DSC-THI)",
      "SampleSize": 156
    },
    {
      "SalesOrganisationCode": 2241,
      "Dealer": "MPL LIGHT VEHICLES(DSC-VPM)",
      "SampleSize": 156
    },
    {
      "SalesOrganisationCode": 7900,
      "Dealer": "Gajanan Automobiles Pvt Ltd",
      "SampleSize": 155
    },
    {
      "SalesOrganisationCode": 7492,
      "Dealer": "Magnum Motors(DSC-KAN)",
      "SampleSize": 154
    },
    {
      "SalesOrganisationCode": 1545,
      "Dealer": "KUN CAPITAL AUTOMOTIVE(DSC-AMB",
      "SampleSize": 152
    },
    {
      "SalesOrganisationCode": 2480,
      "Dealer": "AMCO AUTOMOBILES PVT. LTD",
      "SampleSize": 151
    },
    {
      "SalesOrganisationCode": 1366,
      "Dealer": "KUN CAPITAL (DSC-KUM)",
      "SampleSize": 151
    },
    {
      "SalesOrganisationCode": 7360,
      "Dealer": "Flagship Motors",
      "SampleSize": 150
    },
    {
      "SalesOrganisationCode": 4122,
      "Dealer": "KUN CAPITAL (DSC-OMR)",
      "SampleSize": 149
    },
    {
      "SalesOrganisationCode": 1031,
      "Dealer": "AMMAN AUTO(DSC-GAN)",
      "SampleSize": 149
    },
    {
      "SalesOrganisationCode": 4121,
      "Dealer": "KUN CAPITAL (DSC-CHR)",
      "SampleSize": 148
    },
    {
      "SalesOrganisationCode": 1860,
      "Dealer": "MPL LIGHT VEHICLES PVT LTD",
      "SampleSize": 146
    },
    {
      "SalesOrganisationCode": 7520,
      "Dealer": "Krishnaa Motors",
      "SampleSize": 145
    },
    {
      "SalesOrganisationCode": 3807,
      "Dealer": "CITY WHEELS(DSC-DUM)",
      "SampleSize": 143
    },
    {
      "SalesOrganisationCode": 8400,
      "Dealer": "Amrit Cargo",
      "SampleSize": 140
    },
    {
      "SalesOrganisationCode": 7570,
      "Dealer": "Sairam Motors",
      "SampleSize": 140
    },
    {
      "SalesOrganisationCode": 1383,
      "Dealer": "INDUS MOTORS (ATP-TPZ)",
      "SampleSize": 139
    },
    {
      "SalesOrganisationCode": 4080,
      "Dealer": "SHREE GAJANAND MOTORS",
      "SampleSize": 136
    },
    {
      "SalesOrganisationCode": 2061,
      "Dealer": "ADITYA AGENCY(ATP-LTR)",
      "SampleSize": 135
    },
    {
      "SalesOrganisationCode": 1804,
      "Dealer": "CAUVERY MOTORS(DSC-K R Pete)",
      "SampleSize": 134
    },
    {
      "SalesOrganisationCode": 8384,
      "Dealer": "Kun Capital Auto(ATP-PAL)",
      "SampleSize": 133
    },
    {
      "SalesOrganisationCode": 2300,
      "Dealer": "BEEAAR AUTOWHEELS INDIA PVT.",
      "SampleSize": 131
    },
    {
      "SalesOrganisationCode": 8380,
      "Dealer": "Kun Capital AutomotivePvt Ltd",
      "SampleSize": 131
    },
    {
      "SalesOrganisationCode": 4540,
      "Dealer": "SAGAR FUEL INJECTION",
      "SampleSize": 130
    },
    {
      "SalesOrganisationCode": 2040,
      "Dealer": "VENKATESHWARA AUTO MOTORS",
      "SampleSize": 130
    },
    {
      "SalesOrganisationCode": 3200,
      "Dealer": "TIRUPATI STEELS",
      "SampleSize": 129
    },
    {
      "SalesOrganisationCode": 8130,
      "Dealer": "Jagdishwar Enter. P Ltd",
      "SampleSize": 129
    },
    {
      "SalesOrganisationCode": 7450,
      "Dealer": "Anwar Motors",
      "SampleSize": 129
    },
    {
      "SalesOrganisationCode": 1046,
      "Dealer": "CAUVERY MOTORS(DSC-NEL)",
      "SampleSize": 125
    },
    {
      "SalesOrganisationCode": 1025,
      "Dealer": "AMMAN AUTO(DSC-POL)",
      "SampleSize": 125
    },
    {
      "SalesOrganisationCode": 1235,
      "Dealer": "Aruna Motors (DSC-VIJ)",
      "SampleSize": 125
    },
    {
      "SalesOrganisationCode": 7491,
      "Dealer": "Magnum Motors(DSC-RAM)",
      "SampleSize": 124
    },
    {
      "SalesOrganisationCode": 8760,
      "Dealer": "ARP Motors Pvt Ltd",
      "SampleSize": 122
    },
    {
      "SalesOrganisationCode": 2648,
      "Dealer": "RAJGARHIA MOTOR(DSC-MOR)",
      "SampleSize": 121
    },
    {
      "SalesOrganisationCode": 1423,
      "Dealer": "MALIK MOTORS(DSC-RCP)",
      "SampleSize": 121
    },
    {
      "SalesOrganisationCode": 8080,
      "Dealer": "Aaryan Motors",
      "SampleSize": 120
    },
    {
      "SalesOrganisationCode": 7522,
      "Dealer": "Krishnaa Motors(DSC-DHA)",
      "SampleSize": 120
    },
    {
      "SalesOrganisationCode": 8030,
      "Dealer": "USK Equipments LLP",
      "SampleSize": 119
    },
    {
      "SalesOrganisationCode": 7451,
      "Dealer": "Anwar Motors(DSC-TUT)",
      "SampleSize": 119
    },
    {
      "SalesOrganisationCode": 7770,
      "Dealer": "Movish Automobile Pvt Ltd",
      "SampleSize": 119
    },
    {
      "SalesOrganisationCode": 2100,
      "Dealer": "GROVER MOTORS PVT. LTD",
      "SampleSize": 118
    },
    {
      "SalesOrganisationCode": 8232,
      "Dealer": "ARS  Motors(DSC-BHU)",
      "SampleSize": 118
    },
    {
      "SalesOrganisationCode": 7500,
      "Dealer": "Landmark Automobiles",
      "SampleSize": 117
    },
    {
      "SalesOrganisationCode": 1361,
      "Dealer": "Kun Capital Automotive (ATP)",
      "SampleSize": 116
    },
    {
      "SalesOrganisationCode": 7210,
      "Dealer": "Yashodha Motors Pvt. Ltd",
      "SampleSize": 115
    },
    {
      "SalesOrganisationCode": 7410,
      "Dealer": "Aparna Automotives",
      "SampleSize": 115
    },
    {
      "SalesOrganisationCode": 1363,
      "Dealer": "KUN CAPITAL(ATP-PTI)",
      "SampleSize": 114
    },
    {
      "SalesOrganisationCode": 4820,
      "Dealer": "SNS Automobiles",
      "SampleSize": 114
    },
    {
      "SalesOrganisationCode": 8631,
      "Dealer": "Balaji Trucks (DSC-RAM)",
      "SampleSize": 114
    },
    {
      "SalesOrganisationCode": 7671,
      "Dealer": "Channamma Automotive(DSC-HAV)",
      "SampleSize": 113
    },
    {
      "SalesOrganisationCode": 1424,
      "Dealer": "MALIK MOTORS(DSC-SGR)",
      "SampleSize": 112
    },
    {
      "SalesOrganisationCode": 2053,
      "Dealer": "Venkateshwara Auto(DSC-KHA)",
      "SampleSize": 112
    },
    {
      "SalesOrganisationCode": 8150,
      "Dealer": "T R Enterprises",
      "SampleSize": 111
    },
    {
      "SalesOrganisationCode": 1660,
      "Dealer": "KANCHANA AUTOMOTIVE",
      "SampleSize": 111
    },
    {
      "SalesOrganisationCode": 1802,
      "Dealer": "CAUVERY MOTORS(DSC-PER)",
      "SampleSize": 111
    },
    {
      "SalesOrganisationCode": 2041,
      "Dealer": "VENKATESHWARA AUTO(DSC-NIZ)",
      "SampleSize": 110
    },
    {
      "SalesOrganisationCode": 8930,
      "Dealer": "Shree Amba Motors",
      "SampleSize": 110
    },
    {
      "SalesOrganisationCode": 2640,
      "Dealer": "RAJGARHIA MOTOR",
      "SampleSize": 109
    },
    {
      "SalesOrganisationCode": 7490,
      "Dealer": "Magnum Motors",
      "SampleSize": 109
    },
    {
      "SalesOrganisationCode": 7440,
      "Dealer": "Akshay Motors",
      "SampleSize": 107
    },
    {
      "SalesOrganisationCode": 1172,
      "Dealer": "Evm Light Commercial Moto(DSC-",
      "SampleSize": 107
    },
    {
      "SalesOrganisationCode": 4000,
      "Dealer": "MAA PADMAVATI MOTORS",
      "SampleSize": 107
    },
    {
      "SalesOrganisationCode": 7411,
      "Dealer": "Aparna Automotives(DSC-DHU)",
      "SampleSize": 106
    },
    {
      "SalesOrganisationCode": 8020,
      "Dealer": "Raipur Motors Pvt. Ltd",
      "SampleSize": 105
    },
    {
      "SalesOrganisationCode": 7521,
      "Dealer": "Krishnaa Motors(ATP-KRI)",
      "SampleSize": 104
    },
    {
      "SalesOrganisationCode": 1222,
      "Dealer": "ARUNA MOTORS PVT LTD (ATP-TAD)",
      "SampleSize": 104
    },
    {
      "SalesOrganisationCode": 4801,
      "Dealer": "ATC AUTOMOTIVE(DSC-BEE)",
      "SampleSize": 104
    },
    {
      "SalesOrganisationCode": 1546,
      "Dealer": "KUN CAPITAL AUTOMOTIVE-DSC-KOY",
      "SampleSize": 103
    },
    {
      "SalesOrganisationCode": 1182,
      "Dealer": "INDUS MOTORS LCV P. LTD(ATP)",
      "SampleSize": 103
    },
    {
      "SalesOrganisationCode": 2840,
      "Dealer": "SANJIBANI MOTORS PVT. LTD",
      "SampleSize": 102
    },
    {
      "SalesOrganisationCode": 7070,
      "Dealer": "Rajesh Motors (Auto) Pvt. Ltd",
      "SampleSize": 102
    },
    {
      "SalesOrganisationCode": 7884,
      "Dealer": "Santhosh Automobiless(DSC-OND)",
      "SampleSize": 102
    },
    {
      "SalesOrganisationCode": 8042,
      "Dealer": "Bjsmpl Motors Llp(DSC-BAL)",
      "SampleSize": 101
    },
    {
      "SalesOrganisationCode": 1365,
      "Dealer": "KUN CAPITAL (DSC-NAG)",
      "SampleSize": 101
    },
    {
      "SalesOrganisationCode": 7750,
      "Dealer": "Paras Trucks",
      "SampleSize": 100
    },
    {
      "SalesOrganisationCode": 8040,
      "Dealer": "Bjsmpl Motors LLP",
      "SampleSize": 99
    },
    {
      "SalesOrganisationCode": 7784,
      "Dealer": "Swarnambigai Motor(ATP-NAM)",
      "SampleSize": 99
    },
    {
      "SalesOrganisationCode": 1123,
      "Dealer": "SABOO AUTOZONE(DSC-ATT)",
      "SampleSize": 99
    },
    {
      "SalesOrganisationCode": 4067,
      "Dealer": "Autoworld (DSC-BAR)",
      "SampleSize": 99
    },
    {
      "SalesOrganisationCode": 7720,
      "Dealer": "Sreejit Automotive Pvt. Ltd",
      "SampleSize": 98
    },
    {
      "SalesOrganisationCode": 3400,
      "Dealer": "MAHAVEER WHEELS",
      "SampleSize": 98
    },
    {
      "SalesOrganisationCode": 8750,
      "Dealer": "Shri Ram Associates",
      "SampleSize": 96
    },
    {
      "SalesOrganisationCode": 2600,
      "Dealer": "PMG MOTORS",
      "SampleSize": 96
    },
    {
      "SalesOrganisationCode": 7760,
      "Dealer": "Bharat Engineering Works",
      "SampleSize": 96
    },
    {
      "SalesOrganisationCode": 2302,
      "Dealer": "BEEAAR AUTOWHEELS INDIA PVT.",
      "SampleSize": 96
    },
    {
      "SalesOrganisationCode": 1160,
      "Dealer": "EVM LIGHT COMMERCIAL MOTORS",
      "SampleSize": 96
    },
    {
      "SalesOrganisationCode": 7690,
      "Dealer": "Jai Ganesh Auto Centre",
      "SampleSize": 96
    },
    {
      "SalesOrganisationCode": 7362,
      "Dealer": "Flagship Motors(DSC-KAS)",
      "SampleSize": 95
    },
    {
      "SalesOrganisationCode": 8382,
      "Dealer": "Kun Capital Auto(DSC-KUM)",
      "SampleSize": 95
    },
    {
      "SalesOrganisationCode": 1028,
      "Dealer": "AMMAN AUTO(DSC-SID)",
      "SampleSize": 95
    },
    {
      "SalesOrganisationCode": 8074,
      "Dealer": "Aruna Trucks.",
      "SampleSize": 94
    },
    {
      "SalesOrganisationCode": 8740,
      "Dealer": "Ganga Automobile",
      "SampleSize": 93
    },
    {
      "SalesOrganisationCode": 8231,
      "Dealer": "ARS  Motors(DSC-MOR)",
      "SampleSize": 93
    },
    {
      "SalesOrganisationCode": 9180,
      "Dealer": "Kamal Autolinks Private Limite",
      "SampleSize": 92
    },
    {
      "SalesOrganisationCode": 7530,
      "Dealer": "Rasika Motors",
      "SampleSize": 92
    },
    {
      "SalesOrganisationCode": 8370,
      "Dealer": "Jagannath Vahan Pvt. Ltd",
      "SampleSize": 91
    },
    {
      "SalesOrganisationCode": 4160,
      "Dealer": "SRI RAM AUTOMOBILE",
      "SampleSize": 91
    },
    {
      "SalesOrganisationCode": 8830,
      "Dealer": "Auto Wheelz",
      "SampleSize": 91
    },
    {
      "SalesOrganisationCode": 7810,
      "Dealer": "Jalan Automobiles Pvt Ltd",
      "SampleSize": 90
    },
    {
      "SalesOrganisationCode": 8520,
      "Dealer": "Raj Diesels LLP",
      "SampleSize": 90
    },
    {
      "SalesOrganisationCode": 2860,
      "Dealer": "AGARWAL AUTOZONE",
      "SampleSize": 90
    },
    {
      "SalesOrganisationCode": 8850,
      "Dealer": "VMT Motors Llp",
      "SampleSize": 90
    },
    {
      "SalesOrganisationCode": 1188,
      "Dealer": "Indus Motors LCV P.LTD(DSC-TIR",
      "SampleSize": 90
    },
    {
      "SalesOrganisationCode": 7470,
      "Dealer": "Shanti Motors",
      "SampleSize": 89
    },
    {
      "SalesOrganisationCode": 8590,
      "Dealer": "Ya Mobility Llp",
      "SampleSize": 89
    },
    {
      "SalesOrganisationCode": 6070,
      "Dealer": "GYAN MOTORS",
      "SampleSize": 89
    },
    {
      "SalesOrganisationCode": 8410,
      "Dealer": "Gurunanak Automobiles",
      "SampleSize": 88
    },
    {
      "SalesOrganisationCode": 8820,
      "Dealer": "Kiara Automobiles Private Limi",
      "SampleSize": 88
    },
    {
      "SalesOrganisationCode": 7980,
      "Dealer": "Ishwartech Auto Industries Pvt",
      "SampleSize": 88
    },
    {
      "SalesOrganisationCode": 7870,
      "Dealer": "2020 Motors Pvt. Ltd",
      "SampleSize": 88
    },
    {
      "SalesOrganisationCode": 7672,
      "Dealer": "Channamma Automotive(DSC-GAD)",
      "SampleSize": 88
    },
    {
      "SalesOrganisationCode": 8480,
      "Dealer": "P C Bhandari Vehicles",
      "SampleSize": 87
    },
    {
      "SalesOrganisationCode": 8240,
      "Dealer": "Autoveer Pvt Ltd",
      "SampleSize": 87
    },
    {
      "SalesOrganisationCode": 4760,
      "Dealer": "TRUST AUTOMOBILES",
      "SampleSize": 87
    },
    {
      "SalesOrganisationCode": 8381,
      "Dealer": "Kun Capital Auto(DSC-PBR)",
      "SampleSize": 87
    },
    {
      "SalesOrganisationCode": 1223,
      "Dealer": "ARUNA MOTORS PVT LTD (DSC-NAR)",
      "SampleSize": 87
    },
    {
      "SalesOrganisationCode": 8990,
      "Dealer": "Patliputra Motors Private Limi",
      "SampleSize": 86
    },
    {
      "SalesOrganisationCode": 1544,
      "Dealer": "KUN CAPITAL AUTOMOTIVE(DSC-GUM",
      "SampleSize": 86
    },
    {
      "SalesOrganisationCode": 8360,
      "Dealer": "Hulash Motor Private Limited",
      "SampleSize": 85
    },
    {
      "SalesOrganisationCode": 8290,
      "Dealer": "Shanti SudamaMotors Pvt. Ltd",
      "SampleSize": 85
    },
    {
      "SalesOrganisationCode": 3860,
      "Dealer": "ANAND AUTOMOTIVE",
      "SampleSize": 84
    },
    {
      "SalesOrganisationCode": 8790,
      "Dealer": "A P Auto Zone",
      "SampleSize": 82
    },
    {
      "SalesOrganisationCode": 7782,
      "Dealer": "Swarnambigai Motor(DSC-TIR)",
      "SampleSize": 82
    },
    {
      "SalesOrganisationCode": 8420,
      "Dealer": "Dutt Autohaus",
      "SampleSize": 82
    },
    {
      "SalesOrganisationCode": 8950,
      "Dealer": "Aadi Autolinks Private Limited",
      "SampleSize": 82
    },
    {
      "SalesOrganisationCode": 4780,
      "Dealer": "JAHANVI AUTOMOBILES",
      "SampleSize": 81
    },
    {
      "SalesOrganisationCode": 7812,
      "Dealer": "Jalan Automobiles (ATP-ROU)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 4545,
      "Dealer": "SAGAR FUEL INJECTION(DSC-IND)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 2644,
      "Dealer": "RAJGARHIA MOTOR(DSC-DIA)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 7730,
      "Dealer": "A S Trading Co",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 7170,
      "Dealer": "Indian Auto Wheels",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1664,
      "Dealer": "KANCHANA AUTO(DSC-ARS)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1803,
      "Dealer": "CAUVERY MOTORS(DSC-CHA)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 7480,
      "Dealer": "Nationwide Autocorp LLP",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 8733,
      "Dealer": "Shree Lakshmi (DSC-CHI)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 2222,
      "Dealer": "RENUKA AUTOMOTIVE(DSC-BID)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 2224,
      "Dealer": "RENUKA AUTO(DSC-SHA)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 8062,
      "Dealer": "Hitech Motors&Auto. (DSC-MUD)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 7523,
      "Dealer": "Krishnaa Motors(DSC-HOS)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 9130,
      "Dealer": "Sun Motors",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 9040,
      "Dealer": "SAP Services",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1164,
      "Dealer": "EVM LIGHT COMMERCIAL (DSC-NEY)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1165,
      "Dealer": "EVM LIGHT COMMERCIAL (DSC-MKA)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1189,
      "Dealer": "Indus Motors LCV P.LTD(DSC-PER",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 4420,
      "Dealer": "JJ AUTO GARAGE",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 7363,
      "Dealer": "Flagship Motors(DSC-PAR)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 8385,
      "Dealer": "Kun Capital Auto(DSE-PAT)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 4824,
      "Dealer": "SNS AUTOMOBILES (ATP-MAD)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 7781,
      "Dealer": "Swarnambigai Motor(DSC-ATT)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 8633,
      "Dealer": "Balaji Trucks (DSC-SIVA)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1122,
      "Dealer": "SABOO AUTOZONE (A Unit of R K",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1124,
      "Dealer": "SABOO AUTO(DSC-VBD)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1127,
      "Dealer": "SABOO AUTOZONE(DSC-JOD)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1128,
      "Dealer": "SABOO AUTOZONE(DSC-SID)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1132,
      "Dealer": "SABOO AUTOZONE(DSC-NAG)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1135,
      "Dealer": "SABOO AUTOZONE(DSC-SAN)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1422,
      "Dealer": "MALIK MOTORS(ATP-NGA)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1426,
      "Dealer": "MALIK MOTORS(DSC-SHA)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1428,
      "Dealer": "MALIK MOTORS(DSC-SUR)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 2043,
      "Dealer": "VENKATESHWARA AUTO(DSC-MAN)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1682,
      "Dealer": "LAKSHMI AUTOMOTIVES (DSC-SKK)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1690,
      "Dealer": "Lakshmi Automotives(DSC-GAJ)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 3881,
      "Dealer": "VIP ENTERPRISE (DSC-SUR)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 4081,
      "Dealer": "SHREE GAJANAND MOTORS(ATP-GOD)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 4082,
      "Dealer": "SHREE GAJANAND MOTORS(DSC-ANA)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 4400,
      "Dealer": "SHASWAT AUTOMOBILES",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 8230,
      "Dealer": "ARS  Motors",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 3460,
      "Dealer": "AJMERA MOTORS",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 3463,
      "Dealer": "AJMERA MOTORS(DSC-SAK)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 3464,
      "Dealer": "AJMERA MOTORS(DSC-NER)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 1961,
      "Dealer": "BHAGWAT ASSOCIATES(ATP-OSM)",
      "SampleSize": 80
    },
    {
      "SalesOrganisationCode": 8280,
      "Dealer": "CITY WHEELS",
      "SampleSize": 79
    },
    {
      "SalesOrganisationCode": 7493,
      "Dealer": "Magnum Motors(DSC-HOS)",
      "SampleSize": 79
    },
    {
      "SalesOrganisationCode": 8061,
      "Dealer": "Hitech Motors&Auto. (DSC-CHI)",
      "SampleSize": 79
    },
    {
      "SalesOrganisationCode": 8064,
      "Dealer": "Hitech Motors&Auto. (DSC-BAG)",
      "SampleSize": 79
    },
    {
      "SalesOrganisationCode": 1161,
      "Dealer": "EVM LIGHT COMMERCIAL (ATP)",
      "SampleSize": 79
    },
    {
      "SalesOrganisationCode": 1425,
      "Dealer": "MALIK MOTORS(DSC-MED)",
      "SampleSize": 79
    },
    {
      "SalesOrganisationCode": 1427,
      "Dealer": "MALIK MOTORS(DSC-MED)",
      "SampleSize": 79
    },
    {
      "SalesOrganisationCode": 1224,
      "Dealer": "ARUNA MOTORS(DSC-BHI)",
      "SampleSize": 79
    },
    {
      "SalesOrganisationCode": 2580,
      "Dealer": "TIRHUT AUTOMOBILES",
      "SampleSize": 78
    },
    {
      "SalesOrganisationCode": 1166,
      "Dealer": "EVM LIGHT COMMERCIAL(DSC-AMB)",
      "SampleSize": 77
    },
    {
      "SalesOrganisationCode": 1372,
      "Dealer": "Kun Capital (DSC-ARI)",
      "SampleSize": 76
    },
    {
      "SalesOrganisationCode": 6071,
      "Dealer": "Gyan Motors(DSC-ALI)",
      "SampleSize": 75
    },
    {
      "SalesOrganisationCode": 7882,
      "Dealer": "Santhosh Automobiless(DSC-SAT)",
      "SampleSize": 75
    },
    {
      "SalesOrganisationCode": 7580,
      "Dealer": "Lok Enterprises",
      "SampleSize": 74
    },
    {
      "SalesOrganisationCode": 8140,
      "Dealer": "Seven Dawn Concepts",
      "SampleSize": 72
    },
    {
      "SalesOrganisationCode": 8330,
      "Dealer": "Csg Automobiles",
      "SampleSize": 71
    },
    {
      "SalesOrganisationCode": 8940,
      "Dealer": "Tirupati Automobiles",
      "SampleSize": 70
    },
    {
      "SalesOrganisationCode": 8170,
      "Dealer": "NRL Truckers",
      "SampleSize": 69
    },
    {
      "SalesOrganisationCode": 1162,
      "Dealer": "EVM LIGHT COMMERCIAL MOTORS (A",
      "SampleSize": 69
    },
    {
      "SalesOrganisationCode": 8840,
      "Dealer": "Tara Autokart Private Limited",
      "SampleSize": 68
    },
    {
      "SalesOrganisationCode": 8041,
      "Dealer": "Bjsmpl Motors Llp(DSC-RAI)",
      "SampleSize": 67
    },
    {
      "SalesOrganisationCode": "Total",
      "Dealer": NaN,
      "SampleSize": 37506
    }
  ]

  const fetchData = async () => {
    try {
      const response = await axios.get(apiLink);
      const data = response.data;
      setSSI(data.ssi || []);
      setCSI(data.csi || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data.");
    }
  };

  // Fetch data from API
  useEffect(() => {
    fetchData();
    console.log(SSI, "SSI");
    console.log("dsbcsdd");
    console.log(CSI);
  }, []);

  const downloadFile = async (type) => {
    const link = type === "SSI" ? linkSSI : linkCSI;
    toast.success(`Downloading ${type} CSV File`, { autoClose: 5000 });
    try {
      const response = await axios.get(link);
      const downloadUrl = response.data.downloadUrls?.[`${type.toLowerCase()}Url`];
      if (downloadUrl) {
        window.location.href = downloadUrl;
      } else {
        console.error("Download URL not found.");
        toast.error("Download URL not found.");
      }
    } catch (error) {
      console.error(`Failed to download ${type} CSV:`, error.message);
      toast.error(`Failed to download ${type} CSV.`);
    }
  };




  const calculateTotalInterviews = (data, apiData) =>
    data
      .filter(item =>
        apiData.some(apiItem => apiItem.SalesOrganisationCode == item.SalesOrganisationCode)
      )
      .reduce((acc, curr) => acc + (curr.count || 0), 0);


  return (
    <div className="bg-[#ffffff] w-full min-h-screen">
      <div className="header bg-[#131c52] sticky top-0 p-2"></div>
      <div className="header bg-[#131c52] sticky top-0 p-2">
        <div className="title text-white text-2xl sm:text-2xl">LCV Survey</div>
      </div>
      <div className="maindivwithtwotables mt-10 m-10 flex flex-col space-x-5 sm:flex-row sm:justify-around p-4">
        {/* SSI Table */}
        <div className="ssitable w-full sm:w-1/2">
          <button
            onClick={() => downloadFile("SSI")}
            className="bg-teal-500 rounded-lg p-2 text-white font-semibold mb-2 flex justify-center sm:justify-start"
          >
            Download CSV <FaDownload className="ml-2 text-xl" />
          </button>
          <h1 className="text-xl sm:text-xl bg-pink-300 p-1 rounded-lg text-center mb-2 ">SSI</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">Dealer Code</th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">Dealer</th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">SampleSize</th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">No of interviews</th>
                </tr>
              </thead>
              <tbody>


                {SSI.filter(item =>
                  SSIApi.some(apiItem => apiItem.SalesOrganisationCode == item.SalesOrganisationCode)
                ).map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-200`}>
                    <td className="border border-gray-300 px-4 py-2">{item.SalesOrganisationCode}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {SSIApi.find(apiItem => apiItem.SalesOrganisationCode == item.SalesOrganisationCode)?.Dealer || ''}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {SSIApi.find(apiItem => apiItem.SalesOrganisationCode == item.SalesOrganisationCode)?.SampleSize || ''}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-lg p-2 mt-3">
            <h1 className="text-end font-semibold text-xl">
              Total numbers of Interviews = {calculateTotalInterviews(SSI, SSIApi)}
            </h1>
          </div>
        </div>

        {/* CSI Table */}
        <div className="csitable w-full sm:w-1/2">
          <button
            onClick={() => downloadFile("CSI")}
            className="bg-teal-500 rounded-lg p-2 text-white font-semibold mb-2 flex justify-center sm:justify-start"
          >
            Download CSV <FaDownload className="ml-2 text-xl" />
          </button>
          <h1 className="text-xl sm:text-xl bg-pink-300 p-1 rounded-lg text-center mb-2 ">CSI</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">Branch Code</th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">Sub Branch Name</th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">SampleSize</th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">No of interviews</th>
                </tr>
              </thead>
              <tbody>


                {CSI.filter(item =>
                  CSIApi.some(apiItem => apiItem.SalesOrganisationCode == item.SalesOrganisationCode)
                ).map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-200`}>
                    <td className="border border-gray-300 px-4 py-2">{item.SalesOrganisationCode}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {CSIApi.find(apiItem => apiItem.SalesOrganisationCode == item.SalesOrganisationCode)?.Dealer || ''}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {CSIApi.find(apiItem => apiItem.SalesOrganisationCode == item.SalesOrganisationCode)?.SampleSize || ''}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-lg p-2 mt-3">
            <h1 className="text-end font-semibold text-xl">
              Total numbers of Interviews = {calculateTotalInterviews(CSI, CSIApi)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
