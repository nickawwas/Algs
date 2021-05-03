export const algsUBL = [
  {
    case: "UBL-URB",
    algs: [
      {
        alg: "Lw' U R' D2 R U' R' D2' R Lw",
      },
      {
        alg: "[Lw': [U, R' D2 R]]",
      },
    ],
  },
  {
    case: "UBL-ULF",
    algs: [
      {
        alg: "R' D' R U2 R' D R U R' D' R U' U2' R' D R",
      },
      {
        alg: "[R' D' R U2: [R' D R, U]]",
      },
    ],
  },
  {
    case: "UBL-LFU",
    algs: [
      {
        alg: "F U2 R' D' R U2' R' D R F'",
      },
      {
        alg: "[F: [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "UBL-LDF",
    algs: [
      {
        alg: "R' D R U2 R' D' R U2'",
      },
      {
        alg: "[R' D R, U2]",
      },
    ],
  },
  {
    case: "UBL-LBD",
    algs: [
      {
        alg: "U' R D' R' U2 R D R' U2' U",
      },
      {
        alg: "[U': [R D' R', U2]]",
      },
    ],
  },
  {
    case: "UBL-FUL",
    algs: [
      {
        alg: "Lw' U2 R' D2 R U2' R' D2' R Lw",
      },
      {
        alg: "[Lw': [U2, R' D2 R]]",
      },
    ],
  },
  {
    case: "UBL-FDR",
    algs: [
      {
        alg: "D' R' D R U2 R' D' R U2' D",
      },
      {
        alg: "[D': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "UBL-FLD",
    algs: [
      {
        alg: "D' U' R D' R' U2 R D R' U2' U D",
      },
      {
        alg: "[D' U': [R D' R', U2]]",
      },
    ],
  },
  {
    case: "UBL-RBU",
    algs: [
      {
        alg: "R D R' R' D2 R U2 R' D2' R U2' R D' R'",
      },
      {
        alg: "[R D R': [R' D2 R, U2]]",
      },
    ],
  },
  {
    case: "UBL-RDB",
    algs: [
      {
        alg: "U' R D R' U2 R D' R' U2' U",
      },
      {
        alg: "[U': [R D R', U2]]",
      },
    ],
  },
  {
    case: "UBL-RFD",
    algs: [
      {
        alg: "R' D' R U2 R' D R U2'",
      },
      {
        alg: "[R' D' R, U2]",
      },
    ],
  },
  {
    case: "UBL-BUR",
    algs: [
      {
        alg: "R' D' U2 R' D R U2' R' D' R D R",
      },
      {
        alg: "[R' D': [U2, R' D R]]",
      },
    ],
  },
  {
    case: "UBL-BDL",
    algs: [
      {
        alg: "R' D2 R U2 R' D2' R U2'",
      },
      {
        alg: "[R' D2 R, U2]",
      },
    ],
  },
  {
    case: "UBL-BRD",
    algs: [
      {
        alg: "D U' R D' R' U2 R D R' U2' U D'",
      },
      {
        alg: "[D U': [R D' R', U2]]",
      },
    ],
  },
  {
    case: "UBL-DFL",
    algs: [
      {
        alg: "R F' R' U' R D R' U2 R D' R' U2' U R F R'",
      },
      {
        alg: "[R F' R' U': [R D R', U2]]",
      },
    ],
  },
  {
    case: "UBL-DRF",
    algs: [
      {
        alg: "D R D' R' R' D R U2 R' D' R U2' R D R' D'",
      },
      {
        alg: "[D R D' R': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "UBL-DBR",
    algs: [
      {
        alg: "R D' R' R' D R U2 R' D' R U2' R D R'",
      },
      {
        alg: "[R D' R': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "UBL-DLB",
    algs: [
      {
        alg: "R' z R' R' D R U2 R' D' R U2' R z' R",
      },
      {
        alg: "[R' z R': [R' D R, U2]]",
      },
    ],
  },
];

export const algsURB = [
  {
    case: "URB-UBL",
    algs: [
      {
        alg: "Lw' R' D2 R U R' D2' R U' Lw",
      },
      {
        alg: "[Lw': [R' D2 R, U]]",
      },
    ],
  },
  {
    case: "URB-ULF",
    algs: [
      {
        alg: "R F' R2' D R U R' D' R U' R' R2 F R'",
      },
      {
        alg: "[R F' R2': [D, R U R']]",
      },
    ],
  },
  {
    case: "URB-LUB",
    algs: [
      {
        alg: "R U R D R' U' R D' R' R'",
      },
      {
        alg: "[R: [U, R D R']]",
      },
    ],
  },
  {
    case: "URB-LFU",
    algs: [
      {
        alg: "R' R' D' R U' R' D R U R",
      },
      {
        alg: "[R': [R' D' R, U']]",
      },
    ],
  },
  {
    case: "URB-LDF",
    algs: [
      {
        alg: "R' D R U R' D' R U'",
      },
      {
        alg: "[R' D R, U]",
      },
    ],
  },
  {
    case: "URB-LBD",
    algs: [
      {
        alg: "U' R D' R' U R D R'",
      },
      {
        alg: "[U', R D' R']",
      },
    ],
  },
  {
    case: "URB-FUL",
    algs: [
      {
        alg: "R U2 R D R' U2' R D' R' R'",
      },
      {
        alg: "[R: [U2, R D R']]",
      },
    ],
  },
  {
    case: "URB-FDR",
    algs: [
      {
        alg: "D' R' D R U R' D' R U' D",
      },
      {
        alg: "[D': [R' D R, U]]",
      },
    ],
  },
  {
    case: "URB-FLD",
    algs: [
      {
        alg: "D R' D' R U R' D R U' D'",
      },
      {
        alg: "[D: [R' D' R, U]]",
      },
    ],
  },
  {
    case: "URB-RDB",
    algs: [
      {
        alg: "U' R D R' U R D' R'",
      },
      {
        alg: "[U', R D R']",
      },
    ],
  },
  {
    case: "URB-RFD",
    algs: [
      {
        alg: "R' D' R U R' D R U'",
      },
      {
        alg: "[R' D' R, U]",
      },
    ],
  },
  {
    case: "URB-BLU",
    algs: [
      {
        alg: "R' R' D' R U2 R' D R U2' R",
      },
      {
        alg: "[R': [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "URB-BDL",
    algs: [
      {
        alg: "R' D2 R U R' D2' R U'",
      },
      {
        alg: "[R' D2 R, U]",
      },
    ],
  },
  {
    case: "URB-BRD",
    algs: [
      {
        alg: "D U' R D' R' U R D R' D'",
      },
      {
        alg: "[D: [U', R D' R']]",
      },
    ],
  },
  {
    case: "URB-DFL",
    algs: [
      {
        alg: "x' D2 R U R' D2' R U' R' x",
      },
      {
        alg: "[x': [D2, R U R']]",
      },
    ],
  },
  {
    case: "URB-DRF",
    algs: [
      {
        alg: "R' D R U' R D' R' U R D R' U R' D' R U'",
      },
      {
        alg: "[R' D R U' R D' R', U]",
      },
    ],
  },
  {
    case: "URB-DBR",
    algs: [
      {
        alg: "U R D' R' U' R' D R U R' D' R R D R' U'",
      },
      {
        alg: "[U R D' R': [U', R' D R]]",
      },
    ],
  },
  {
    case: "URB-DLB",
    algs: [
      {
        alg: "x R' U' R D2 R' U R D2' x'",
      },
      {
        alg: "[x: [R' U' R, D2]]",
      },
    ],
  },
];

export const algsULF = [
    {
       case:"ULF-UBL",
       algs: [ 
         {
              alg: "R' D' U' R' D R U' R' D' R U U D R" 
         },
         {     
              alg: "[R' D' U' : [R' D R, U']]"
        } 
      ]
  },
    {
       case:"ULF-URB",
       algs: [ 
         {
              alg: "R F' R2' R U R' D R U' R' D' R2 F R'" 
         },
         {     
              alg: "[R F' R2': [R U R', D]]"
        } 
      ]
  },
    {
       case:"ULF-LUB",
       algs: [ 
         {
              alg: "U' R R D R' U2 R D' R' U2' R' U" 
         },
         {     
              alg: "[U' R: [R D R', U2]]"
        } 
      ]
  },
    {
       case:"ULF-LDF",
       algs: [ 
         {
              alg: "R' D R U' R' D' R U" 
         },
         {     
              alg: "[R' D R, U']"
        } 
      ]
  },
    {
       case:"ULF-LBD",
       algs: [ 
         {
              alg: "U' R D' R' U' R D R' U U" 
         },
         {     
              alg: "[U': [R D' R', U']]"
        } 
      ]
  },
    {
       case:"ULF-FDR",
       algs: [ 
         {
              alg: "D' R' D R U' R' D' R U D" 
         },
         {     
              alg: "[D': [R' D R, U']]"
        } 
      ]
  },
    {
       case:"ULF-FLD",
       algs: [ 
         {
              alg: "D' R' D' R U' R' D R U D" 
         },
         {     
              alg: "[D': [R' D' R, U']]"
        } 
      ]
  },
    {
       case:"ULF-RBU",
       algs: [ 
         {
              alg: "U' R' U2 R' D' R U2' R' D R R U" 
         },
         {     
              alg: "[U' R': [U2, R' D' R]]"
        } 
      ]
  },
    {
       case:"ULF-RDB",
       algs: [ 
         {
              alg: "U' R D R' U' R D' R' U U" 
         },
         {     
              alg: "[U': [R D R', U']]"
        } 
      ]
  },
    {
       case:"ULF-RFD",
       algs: [ 
         {
              alg: "R' D' R U' R' D R U" 
         },
         {     
              alg: "[R' D' R, U']"
        } 
      ]
  },
    {
       case:"ULF-BUR",
       algs: [ 
         {
              alg: "U' R R D R' U R D' R' U' R' U" 
         },
         {     
              alg: "[U' R: [R D R', U]]"
        } 
      ]
  },
    {
       case:"ULF-BLU",
       algs: [ 
         {
              alg: "U' R' U' R' D' R U R' D R R U" 
         },
         {     
              alg: "[U' R': [U', R' D' R]]"
        } 
      ]
  },
    {
       case:"ULF-BDL",
       algs: [ 
         {
              alg: "R' D2 R U' R' D2' R U" 
         },
         {     
              alg: "[R' D2 R, U']"
        } 
      ]
  },
    {
       case:"ULF-BRD",
       algs: [ 
         {
              alg: "D' R' D' R U' R' D R U D" 
         },
         {     
              alg: "[D': [R' D' R, U']]"
        } 
      ]
  },
    {
       case:"ULF-DFL",
       algs: [ 
         {
              alg: "U' x' R U R' D2 R U' R' D2' x U" 
         },
         {     
              alg: "[U' x': [R U R', D2]]"
        } 
      ]
  },
    {
       case:"ULF-DRF",
       algs: [ 
         {
              alg: "R' D R U' R D' R' U' R D R' U R' D' R U" 
         },
         {     
              alg: "[R' D R U' R D' R', U']"
        } 
      ]
  },
    {
       case:"ULF-DBR",
       algs: [ 
         {
              alg: "R D' R' R' D R U' R' D' R U R D R'" 
         },
         {     
              alg: "[R D' R': [R' D R, U']]"
        } 
      ]
  },
    {
       case:"ULF-DLB",
       algs: [ 
         {
              alg: "R' D' R R U' R' D R U R' D' R' D R" 
         },
         {     
              alg: "[R' D' R: [R U' R', D]]"
        } 
      ]
  }
];

export const algsLUB = [
    {
       case:"LUB-URB",
       algs: [ 
         {
              alg: "R R D R' U R D' R' U' R'" 
         },
         {     
              alg: "[R: [R D R', U]]"
        } 
      ]
  },
    {
       case:"LUB-ULF",
       algs: [ 
         {
              alg: "U' R U2 R D R' U2' R D' R' R' U" 
         },
         {     
              alg: "[U' R: [U2, R D R']]"
        } 
      ]
  },
    {
       case:"LUB-LFU",
       algs: [ 
         {
              alg: "z U R' D' R U' R' D R z'" 
         },
         {     
              alg: "[z: [U, R' D' R]]"
        } 
      ]
  },
    {
       case:"LUB-LDF",
       algs: [ 
         {
              alg: "U R' U' R' D R U R' D' R R U'" 
         },
         {     
              alg: "[U R': [U', R' D R]]"
        } 
      ]
  },
    {
       case:"LUB-LBD",
       algs: [ 
         {
              alg: "z U R' D' R U R' D R U' U' z'" 
         },
         {     
              alg: "[z U: [R' D' R, U]]"
        } 
      ]
  },
    {
       case:"LUB-FUL",
       algs: [ 
         {
              alg: "Lw' U R D' R' U2 R D R' U2' U' Lw" 
         },
         {     
              alg: "[Lw' U: [R D' R', U2]]"
        } 
      ]
  },
    {
       case:"LUB-FDR",
       algs: [ 
         {
              alg: "R U R' R' D' R U' R' D R U R U' R'" 
         },
         {     
              alg: "[R U R': [R' D' R, U']]"
        } 
      ]
  },
    {
       case:"LUB-FLD",
       algs: [ 
         {
              alg: "R U R' D R U R' D' R U' U' R'" 
         },
         {     
              alg: "[R U: [R' D R, U]]"
        } 
      ]
  },
    {
       case:"LUB-RBU",
       algs: [ 
         {
              alg: "R R2' D R2 D' R2' U R2 D R2' D' R2 U' R'" 
         },
         {     
              alg: "[R: [R2' D R2 D' R2', U]]"
        } 
      ]
  },
    {
       case:"LUB-RDB",
       algs: [ 
         {
              alg: "R D R D R' U R D' R' U' D' R'" 
         },
         {     
              alg: "[R D: [R D R', U]]"
        } 
      ]
  },
    {
       case:"LUB-RFD",
       algs: [ 
         {
              alg: "D' R U R' D R U R' D' R U' U' R' D" 
         },
         {     
              alg: "[D' R U: [R' D R, U]]"
        } 
      ]
  },
    {
       case:"LUB-BUR",
       algs: [ 
         {
              alg: "x R' U' L U R U' L' U x'" 
         },
         {     
              alg: "[x: [R', U' L U]]"
        } 
      ]
  },
    {
       case:"LUB-BDL",
       algs: [ 
         {
              alg: "U R' U' R' D2 R U R' D2' R R U'" 
         },
         {     
              alg: "[U R': [U', R' D2 R]"
        } 
      ]
  },
    {
       case:"LUB-BRD",
       algs: [ 
         {
              alg: "R U R' D' R U R' D R U' U' R'" 
         },
         {     
              alg: "[R U: [R' D' R, U]]"
        } 
      ]
  },
    {
       case:"LUB-DFL",
       algs: [ 
         {
              alg: "R R D2 R' U R D2' R' U' R'" 
         },
         {     
              alg: "[R: [R D2 R', U]]"
        } 
      ]
  },
    {
       case:"LUB-DRF",
       algs: [ 
         {
              alg: "U2 x' R U' R' D' R U R' D x U2'" 
         },
         {     
              alg: "[U2 x': [R U' R', D']]"
        } 
      ]
  },
    {
       case:"LUB-DBR",
       algs: [ 
         {
              alg: "D R R D' R' U R D R' U' R' D'" 
         },
         {     
              alg: "[D R: [R D' R', U]]"
        } 
      ]
  },
    {
       case:"LUB-DLB",
       algs: [ 
         {
              alg: "R R D' R' U R D R' U' R'" 
         },
         {     
              alg: "[R: [R D' R', U]]"
        } 
      ]
  }
];

export const algsLFU = [
    {
       case:"LFU-UBL",
       algs: [ 
         {
              alg: "F R' D' R U2 R' D R U2' F'" 
         },
         {     
              alg: "[F: [R' D' R, U2]]"
        } 
      ]
  },
    {
       case:"LFU-URB",
       algs: [ 
         {
              alg: "R' U' R' D' R U R' D R R" 
         },
         {     
              alg: "[R': [U', R' D' R]]"
        } 
      ]
  },
    {
       case:"LFU-LUB",
       algs: [ 
         {
              alg: "z R' D' R U R' D R U' z'" 
         },
         {     
              alg: "[z: [R' D' R, U]]"
        } 
      ]
  },
    {
       case:"LFU-LDF",
       algs: [ 
         {
              alg: "R' U' D R U R' D' R U' R' U R" 
         },
         {     
              alg: "[R' U': [D, R U R']]"
        } 
      ]
  },
    {
       case:"LFU-LBD",
       algs: [ 
         {
              alg: "z R' D' R U2 R' D R U2' z'" 
         },
         {     
              alg: "[z: [R' D' R, U2]]"
        } 
      ]
  },
    {
       case:"LFU-FDR",
       algs: [ 
         {
              alg: "z D R U R' D' R U' R' z'" 
         },
         {     
              alg: "[z: [D, R U R']]"
        } 
      ]
  },
    {
       case:"LFU-FLD",
       algs: [ 
         {
              alg: "D R' U' D' R U R' D R U' R' U R D'" 
         },
         {     
              alg: "[D R' U': [D', R U R']]"
        } 
      ]
  },
    {
       case:"LFU-RBU",
       algs: [ 
         {
              alg: "F' U R' D R U2 R' D' R U2' U' F" 
         },
         {     
              alg: "[F' U: [R' D R, U2]]"
        } 
      ]
  },
    {
       case:"LFU-RDB",
       algs: [ 
         {
              alg: "R' U' R' D' R U2 R' D R U2' U R" 
         },
         {     
              alg: "[R' U': [R' D' R, U2]]"
        } 
      ]
  },
    {
       case:"LFU-RFD",
       algs: [ 
         {
              alg: "R' U' D' R U R' D R U' R' U R" 
         },
         {     
              alg: "[R' U': [D', R U R']]"
        } 
      ]
  },
    {
       case:"LFU-BUR",
       algs: [ 
         {
              alg: "z D' R U R' D R U' R' z'" 
         },
         {     
              alg: "[z: [D', R U R']]"
        } 
      ]
  },
    {
       case:"LFU-BLU",
       algs: [ 
         {
              alg: "x' R U' R' D R U R' D' x" 
         },
         {     
              alg: "[x': [R U' R', D]]"
        } 
      ]
  },
    {
       case:"LFU-BDL",
       algs: [ 
         {
              alg: "x' R U2 R' D R U2' R' D' x" 
         },
         {     
              alg: "[x': [R U2 R', D]]"
        } 
      ]
  },
    {
       case:"LFU-BRD",
       algs: [ 
         {
              alg: "F D' R U R' D R U' R' F'" 
         },
         {     
              alg: "[F: [D', R U R']]"
        } 
      ]
  },
    {
       case:"LFU-DFL",
       algs: [ 
         {
              alg: "U' R' U R U' R' D R U R' D' U' R U" 
         },
         {     
              alg: "[U' R' U: [R U' R', D]]"
        } 
      ]
  },
    {
       case:"LFU-DRF",
       algs: [ 
         {
              alg: "R U' R' R' D' R U2 R' D R U2' R U R'" 
         },
         {     
              alg: "[R U' R': [R' D' R, U2]]"
        } 
      ]
  },
    {
       case:"LFU-DBR",
       algs: [ 
         {
              alg: "z D2 R U R' D2' R U' R' z'" 
         },
         {     
              alg: "[z: [D2, R U R']]"
        } 
      ]
  },
    {
       case:"LFU-DLB",
       algs: [ 
         {
              alg: "R2 D2 R U' R' D R U R' D' D2' R2'" 
         },
         {     
              alg: "[R2 D2: [R U' R', D]]"
        } 
      ]
  }
];

export const algsLDF = [
    {
       case:"LDF-UBL",
       algs: [ 
         {
              alg: "U2 R' D R U2' R' D' R" 
         },
         {     
              alg: "[U2, R' D R]"
        } 
      ]
  },
    {
       case:"LDF-URB",
       algs: [ 
         {
              alg: "U R' D R U' R' D' R" 
         },
         {     
              alg: "[U, R' D R]"
        } 
      ]
  },
    {
       case:"LDF-ULF",
       algs: [ 
         {
              alg: "U' R' D R U R' D' R" 
         },
         {     
              alg: "[U', R' D R]"
        } 
      ]
  },
    {
       case:"LDF-LUB",
       algs: [ 
         {
              alg: "U R' R' D R U' R' D' R U R U'" 
         },
         {     
              alg: "[U R': [R' D R, U']]"
        } 
      ]
  },
    {
       case:"LDF-LFU",
       algs: [ 
         {
              alg: "z U' R' D' R U R' D R z'" 
         },
         {     
              alg: "[z: [U', R' D' R]]"
        } 
      ]
  },
    {
       case:"LDF-LBD",
       algs: [ 
         {
              alg: "z' R U' R' D' R U R' D z" 
         },
         {     
              alg: "[z': [R U' R', D']]"
        } 
      ]
  },
    {
       case:"LDF-FUL",
       algs: [ 
         {
              alg: "D R' F2 R D' R' D F2 D' R" 
         },
         {     
              alg: "-"
        } 
      ]
  },
    {
       case:"LDF-FDR",
       algs: [ 
         {
              alg: "U D R U' R' D' R U R' U'" 
         },
         {     
              alg: "[U: [D, R U' R']]"
        } 
      ]
  },
    {
       case:"LDF-RBU",
       algs: [ 
         {
              alg: "U R U R' D R U2 R' D' R U2' U' R' U'" 
         },
         {     
              alg: "[U R U: [R' D R, U2]]"
        } 
      ]
  },
    {
       case:"LDF-RDB",
       algs: [ 
         {
              alg: "U D R U' R' D2 R U R' D2' D' U'" 
         },
         {     
              alg: "[U D: [R U' R', D2]]"
        } 
      ]
  },
    {
       case:"LDF-RFD",
       algs: [ 
         {
              alg: "U R' D R U' R' D2 R U R' D2' D' R U'" 
         },
         {     
              alg: "[U R' D: [R U' R', D2]]"
        } 
      ]
  },
    {
       case:"LDF-BUR",
       algs: [ 
         {
              alg: "R' U R U' R' D R U R' D' U' R" 
         },
         {     
              alg: "[R' U: [R U' R', D]]"
        } 
      ]
  },
    {
       case:"LDF-BLU",
       algs: [ 
         {
              alg: "Lw U' U' R D' R' U R D R' U Lw'" 
         },
         {     
              alg: "[Lw U': [U', R D' R']]"
        } 
      ]
  },
    {
       case:"LDF-BDL",
       algs: [ 
         {
              alg: "U D R U' R' D R U R' D' D' U'" 
         },
         {     
              alg: "[U D: [R U' R', D]]"
        } 
      ]
  },
    {
       case:"LDF-BRD",
       algs: [ 
         {
              alg: "R' D R D' R U R' D R U' R' R' D' R" 
         },
         {     
              alg: "[R' D R: [D', R U R']]"
        } 
      ]
  },
    {
       case:"LDF-DRF",
       algs: [ 
         {
              alg: "z R' D R U' R' D2 R U R' D2' R R' D' R z'" 
         },
         {     
              alg: "[z R' D R: [U', R' D2 R]]"
        } 
      ]
  },
    {
       case:"LDF-DBR",
       algs: [ 
         {
              alg: "U R D R U' R' D' R U R' R' U'" 
         },
         {     
              alg: "[U R: [D, R U' R']]"
        } 
      ]
  },
    {
       case:"LDF-DLB",
       algs: [ 
         {
              alg: "F' R U' R' D2 R U R' D2' F" 
         },
         {     
              alg: "[F': [R U' R', D2]]"
        } 
      ]
  }
];

export const algsLBD = [
  {
       case:"LBD-UBL",
       algs: [{
          alg:"U' U2 R D' R' U2' R D R' U"
        },{
           alg:"[U': [U2, R D' R']]" 
         }
       ] 
  },
  {
       case:"LBD-URB",
       algs: [{
          alg:"R D' R' U' R D R' U"
        },{
           alg:"[R D' R', U']" 
         }
       ] 
  },
  {
       case:"LBD-ULF",
       algs: [{
          alg:"U' U' R D' R' U R D R' U"
        },{
           alg:"[U': [U', R D' R']]" 
         }
       ] 
  },
  {
       case:"LBD-LUB",
       algs: [{
          alg:"z U U R' D' R U' R' D R U' z'"
        },{
           alg:"[z U: [U, R' D' R]]" 
         }
       ] 
  },
  {
       case:"LBD-LFU",
       algs: [{
          alg:"z U2 R' D' R U2' R' D R z'"
        },{
           alg:"[z: [U2, R' D' R]]" 
         }
       ] 
  },
  {
       case:"LBD-LDF",
       algs: [{
          alg:"z' D' R U' R' D R U R' z"
        },{
           alg:"[z': [D', R U' R']]" 
         }
       ] 
  },
  {
       case:"LBD-FUL",
       algs: [{
          alg:"Lw' U2 R' D R U2' R' D' R Lw"
        },{
           alg:"[Lw': [U2, R' D R]]" 
         }
       ] 
  },
  {
       case:"LBD-FDR",
       algs: [{
          alg:"U R U' R D' R' U' R D R' U U R' U'"
        },{
           alg:"[U R U': [R D' R', U']]" 
         }
       ] 
  },
  {
       case:"LBD-FLD",
       algs: [{
          alg:"D2 R U R' D' R U' R' D D2'"
        },{
           alg:"[D2: [R U R', D']]" 
         }
       ] 
  },
  {
       case:"LBD-RBU",
       algs: [{
          alg:"U R R D' R' U2 R D R' U2' R' U'"
        },{
           alg:"[U R: [R D' R', U2]]" 
         }
       ] 
  },
  {
       case:"LBD-RDB",
       algs: [{
          alg:"R D' R' U' R D2 R' U R D2' D R'"
        },{
           alg:"[R D': [R' U' R, D2]]" 
         }
       ] 
  },
  {
       case:"LBD-RFD",
       algs: [{
          alg:"D2 R U R' D2' R U' R'"
        },{
           alg:"[D2, R U R']" 
         }
       ] 
  },
  {
       case:"LBD-BUR",
       algs: [{
          alg:"U' L U R U' L' U R'"
        },{
           alg:"[U' L U, R]" 
         }
       ] 
  },
  {
       case:"LBD-BLU",
       algs: [{
          alg:"U2 R R D' R' U R D R' U' R' U2'"
        },{
           alg:"[U2 R: [R D' R', U]]" 
         }
       ] 
  },
  {
       case:"LBD-BRD",
       algs: [{
          alg:"D' D' R U R' D R U' R' D"
        },{
           alg:"[D': [D', R U R']]" 
         }
       ] 
  },
  {
       case:"LBD-DFL",
       algs: [{
          alg:"R D R' D R U R' D2 R U' R' D2' D' R D' R'"
        },{
           alg:"[R D R' D: [R U R', D2]]" 
         }
       ] 
  },
  {
       case:"LBD-DRF",
       algs: [{
          alg:"D2 R R D' R' U' R D R' U R' D2'"
        },{
           alg:"[D2 R: [R D' R', U']]" 
         }
       ] 
  },
  {
       case:"LBD-DBR",
       algs: [{
          alg:"R D' R' R' D R U R' D' R U' R D R'"
        },{
           alg:"[R D' R’: [R’ D R, U]]" 
         }
       ] 
  }
];

export const algsFUL = [
  {
       case:"FUL-UBL",
       algs: [{
          alg:"Lw' R' D2 R U2 R' D2' R U2' Lw"
        },{
           alg:"[Lw': [R' D2 R, U2]]" 
         }
       ] 
  },
  {
       case:"FUL-URB",
       algs: [{
          alg:"R R D R' U2 R D' R' U2' R'"
        },{
           alg:"[R: [R D R', U2]]" 
         }
       ] 
  },
  {
       case:"FUL-LUB",
       algs: [{
          alg:"Lw' U U2 R D' R' U2' R D R' U' Lw"
        },{
           alg:"[Lw' U: [U2, R D' R']]" 
         }
       ] 
  },
  {
       case:"FUL-LDF",
       algs: [{
          alg:"R' D F2' D' R D R' F2' R D'"
        },{
           alg:"-" 
         }
       ] 
  },
  {
       case:"FUL-LBD",
       algs: [{
          alg:"Lw' R' D R U2 R' D' R U2' Lw"
        },{
           alg:"[Lw': [R' D R, U2]]" 
         }
       ] 
  },
  {
       case:"FUL-FDR",
       algs: [{
          alg:"D' R' D F2 D' R D R' F2 R"
        },{
           alg:"-" 
         }
       ] 
  },
  {
       case:"FUL-FLD",
       algs: [{
          alg:"R U R' D R U2 R' D' R U2' U' R'"
        },{
           alg:"[R U: [R' D R, U2]]" 
         }
       ] 
  },
  {
       case:"FUL-RBU",
       algs: [{
          alg: "L' D L2 D' L2' U L2 D L2' D' L2 U' L'"
        }, {
          alg:"[L: [L2' D L2 D' L2', U]]" 
         }
       ] 
  },
  {
       case:"FUL-RDB",
       algs: [{
          alg:"Lw' U' R D R' U2 R D' R' U2' U Lw"
        },{
           alg:"[Lw' U': [R D R', U2]]" 
         }
       ] 
  },
  {
       case:"FUL-RFD",
       algs: [{
          alg:"Lw' R' D' R U2 R' D R U2' Lw"
        },{
           alg:"[Lw': [R' D' R, U2]]" 
         }
       ] 
  },
  {
       case:"FUL-BUR",
       algs: [{
          alg:"R D' U R' D' R U2 R' D R U2' U' D R'"
        },{
           alg:"[R D'U: [R' D' R, U2]]" 
         }
       ] 
  },
  {
       case:"FUL-BLU",
       algs: [{
          alg:"R U R' D' U2 R' D R U2' R' D' R D R U' R'"
        },{
           alg:"[R U R' D': [U2, R' D R]]" 
         }
       ] 
  },
  {
       case:"FUL-BDL",
       algs: [{
          alg:"D R' D F2 D' R D R' F2 R D2"
        },{
           alg:"-" 
         }
       ] 
  },
  {
       case:"FUL-BRD",
       algs: [{
          alg:"R U R' D' R U2 R' D R U2' U' R'"
        },{
           alg:"[R U: [R' D' R, U2]]" 
         }
       ] 
  },
  {
       case:"FUL-DFL",
       algs: [{
          alg:"R U D R' D' R U2 R' D R U2' D' U' R'"
        },{
           alg:"[R UD: [R' D' R, U2]]" 
         }
       ] 
  },
  {
       case:"FUL-DRF",
       algs: [{
          alg:"D' R U D R' D' R U2 R' D R U2' D' U' R' D"
        },{
           alg:"[D' R UD: [R' D' R, U2]]" 
         }
       ] 
  },
  {
       case:"FUL-DBR",
       algs: [{
          alg:"D R R D' R' U2 R D R' U2' R' D'"
        },{
           alg:"[D R: [R D' R', U2]]" 
         }
       ] 
  },
  {
       case:"FUL-DLB",
       algs: [{
          alg:"R R D' R' U2 R D R' U2' R'"
        },{
           alg:"[R: [R D' R', U2]]" 
         }
       ] 
  }
];

export const algsFDR = [
  {
       case:"FDR-UBL",
       algs: [{
          alg:"D' U2 R' D R U2' R' D' R D"
        },{
           alg:"[D': [U2, R' D R]]" 
         }
       ] 
  },
  {
       case:"FDR-URB",
       algs: [{
          alg:"D' U R' D R U' R' D' R D"
        },{
           alg:"[D': [U, R' D R]]" 
         }
       ] 
  },
  {
       case:"FDR-ULF",
       algs: [{
          alg:"D' U' R' D R U R' D' R D"
        },{
           alg:"[D': [U', R' D R]]" 
         }
       ] 
  },
  {
       case:"FDR-LUB",
       algs: [{
          alg:"R U R' U' R' D' R U R' D R R U' R'"
        },{
           alg:"[R U R': [U', R' D' R]]" 
         }
       ] 
  },
  {
       case:"FDR-LFU",
       algs: [{
          alg:"z R U R' D R U' R' D' z'"
        },{
           alg:"[z: [R U R', D]]" 
         }
       ] 
  },
  {
       case:"FDR-LDF",
       algs: [{
          alg:"U R U' R' D R U R' D' U'"
        },{
           alg:"[U: [R U' R', D]]" 
         }
       ] 
  },
  {
       case:"FDR-LBD",
       algs: [{
          alg:"Lw' U R U' R' D R U R' D' U' Lw"
        },{
           alg:"[Lw' U: [R U' R', D]]" 
         }
       ] 
  },
  {
       case:"FDR-FUL",
       algs: [{
          alg:"R' F2' R D' R' D F2' D' R D"
        },{
           alg:"-" 
         }
       ] 
  },
  {
       case:"FDR-FLD",
       algs: [{
          alg:"z R U' R' D R U R' D' z'"
        },{
           alg:"[z: [R U' R', D]]" 
         }
       ] 
  },
  {
       case:"FDR-RBU",
       algs: [{
          alg:"U' R' U R D R' U2 R D' R' U2' U' R U"
        },{
           alg:"[U' R' U: [R D R', U2]]" 
         }
       ] 
  },
  {
       case:"FDR-RDB",
       algs: [{
          alg:"U R U' R' D' R U R' D U'"
        },{
           alg:"[U: [R U' R', D']]" 
         }
       ] 
  },
  {
       case:"FDR-BUR",
       algs: [{
          alg:"D' R' U R U' R' D R U R' D' U' R D"
        },{
           alg:"[D' R' U: [R U' R', D]]" 
         }
       ] 
  },
  {
       case:"FDR-BLU",
       algs: [{
          alg:"Lw D' U' R' D R U R' D' R D Lw'"
        },{
           alg:"[Lw D': [U', R' D R]]" 
         }
       ] 
  },
  {
       case:"FDR-BDL",
       algs: [{
          alg:"U R U' R' D2 R U R' D2' U'"
        },{
           alg:"[U: [R U' R', D2]]" 
         }
       ] 
  },
  {
       case:"FDR-BRD",
       algs: [{
          alg:"D R D R' U' R D2 R' U R D2' D' R' D'"
        },{
           alg:"[D R D: [R' U' R, D2]]" 
         }
       ] 
  },
  {
       case:"FDR-DFL",
       algs: [{
          alg:"U R U' F2 U R' U' R F2 R'"
        },{
           alg:" - " 
         }
       ] 
  },
  {
       case:"FDR-DBR",
       algs: [{
          alg:"U R D' U' R' D R U R' D' R D R' U'"
        },{
           alg:"[U R D': [U', R' D R]]" 
         }
       ] 
  },
  {
       case:"FDR-DLB",
       algs: [{
          alg:"z R U2 R' D R U2' R' D' z'"
        },{
           alg:"[z: [R U2 R', D]]" 
         }
       ] 
  }
];

export const algsFLD = [
  {
       case:"FLD-UBL",
       algs: [{
          alg:"D' U' U2 R D' R' U2' R D R' U D"
        },{
           alg:"[D' U': [U2, R D' R']]" 
         }
       ] 
  },
  {
       case:"FLD-URB",
       algs: [{
          alg:"D U R' D' R U' R' D R D'"
        },{
           alg:"[D: [U, R' D' R]]" 
         }
       ] 
  },
  {
       case:"FLD-ULF",
       algs: [{
          alg:"D U' R' D' R U R' D R D'"
        },{
           alg:"[D: [U', R' D' R]]" 
         }
       ] 
  },
  {
       case:"FLD-LUB",
       algs: [{
          alg:"R U U R' D R U' R' D' R U' R'"
        },{
           alg:"[R U: [U, R' D R]]" 
         }
       ] 
  },
  {
       case:"FLD-LFU",
       algs: [{
          alg:"D R' U' R U R' D' R U' R' D U R D'"
        },{
           alg:"[D R' U': [R U R', D']]" 
         }
       ] 
  },
  {
       case:"FLD-LBD",
       algs: [{
          alg:"D2 D' R U R' D R U' R' D2'"
        },{
           alg:"[D2: [D', R U R']]" 
         }
       ] 
  },
  {
       case:"FLD-FUL",
       algs: [{
          alg:"R U U2 R' D R U2' R' D' R U' R'"
        },{
           alg:"[R U: [U2, R' D R]]" 
         }
       ] 
  },
  {
       case:"FLD-FDR",
       algs: [{
          alg:"z D R U' R' D' R U R' z'"
        },{
           alg:"[z: [D, R U' R']]" 
         }
       ] 
  },
  {
       case:"FLD-RBU",
       algs: [{
          alg:"F' U R' D' R U2 R' D R U2' U' F"
        },{
           alg:"[F' U: [R' D' R, U2]]" 
         }
       ] 
  },
  {
       case:"FLD-RDB",
       algs: [{
          alg:"R D D R' U' R D' R' U R D' R'"
        },{
           alg:"[R D: [D, R' U' R]]" 
         }
       ] 
  },
  {
       case:"FLD-RFD",
       algs: [{
          alg:"D R U R' D' R U' R'"
        },{
           alg:"[D, R U R']" 
         }
       ] 
  },
  {
       case:"FLD-BUR",
       algs: [{
          alg:"z D' R U' R' D R U R' z'"
        },{
           alg:"[z: [D', R U' R']]" 
         }
       ] 
  },
  {
       case:"FLD-BLU",
       algs: [{
          alg:"D x' R U' R' D' R U R' D x D'"
        },{
           alg:"[D x': [R U' R', D']]" 
         }
       ] 
  },
  {
       case:"FLD-BDL",
       algs: [{
          alg:"D' R D' R' U' R D2 R' U R D2' D R' D"
        },{
           alg:"[D' R D': [R' U' R, D2]]" 
         }
       ] 
  },
  {
       case:"FLD-BRD",
       algs: [{
          alg:"D R U R' D2 R U' R' D2' D'"
        },{
           alg:"[D: [R U R', D2]]" 
         }
       ] 
  },
  {
       case:"FLD-DRF",
       algs: [{
          alg:"R U' R' R' D R U2 R' D' R U2' R U R'"
        },{
           alg:"[R U' R': [R' D R, U2]]" 
         }
       ] 
  },
  {
       case:"FLD-DBR",
       algs: [{
          alg:"D R R D' R' U' R D R' U R' D'"
        },{
           alg:"[D R: [R D' R', U’]]" 
         }
       ] 
  },
  {
       case:"FLD-DLB",
       algs: [{
          alg:"z' U' R U R' D' R U' R' D U z"
        },{
           alg:"[z' U': [R U R', D']]" 
         }
       ] 
  }
];