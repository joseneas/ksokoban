.import "matrix-utils.js" as MatrixUtils;

var levels = [
    [
        [1,1,1,1,1,1,1,1],
        [1,8,8,3,0,3,0,1],
        [1,8,0,3,0,0,0,1],
        [1,0,1,0,0,0,4,1],
        [1,1,1,1,1,1,1,1]
    ],

    [
        [7,7,7,1,1,1,7,7,7,7,7],
        [7,7,1,1,0,1,7,1,1,1,1],
        [7,1,1,0,0,1,1,1,0,0,1],
        [1,1,0,3,0,0,0,0,0,0,1],
        [1,0,0,0,4,3,0,1,0,0,1],
        [1,1,1,0,3,1,1,1,0,0,1],
        [7,7,1,0,0,1,8,8,0,0,1],
        [7,1,1,0,1,1,8,1,0,1,1],
        [7,1,0,0,0,0,0,0,1,1,7],
        [7,1,0,0,0,0,0,1,1,7,7],
        [7,1,1,1,1,1,1,1,7,7,7]
    ],

    [
        [7,1,1,7,1,1,1,1,1],
        [1,1,7,1,1,0,8,0,1],
        [1,7,1,1,0,3,8,0,1],
        [7,1,1,0,3,0,0,0,1],
        [1,1,0,3,4,0,1,1,1],
        [1,0,3,0,0,1,1,7,7],
        [1,8,8,0,1,1,7,1,1],
        [1,0,0,0,1,7,1,1,7],
        [1,1,1,1,1,7,1,7,7]
    ],

    [
        [7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1],
        [7,7,7,7,7,7,7,7,7,7,1,1,0,0,0,1],
        [7,7,7,7,7,7,7,7,7,7,1,0,0,0,0,1],
        [7,7,7,7,1,1,1,1,7,7,1,0,3,0,1,1],
        [7,7,7,7,1,0,0,1,1,1,1,3,0,3,1,7],
        [7,7,7,7,1,0,0,0,0,0,3,0,3,0,1,7],
        [7,7,7,1,1,0,1,1,0,3,0,3,0,3,1,7],
        [7,7,7,1,0,0,8,1,0,0,3,0,3,0,1,7],
        [7,7,7,1,0,0,8,1,0,0,0,0,0,0,1,7],
        [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,7],
        [1,8,8,8,8,0,4,0,0,1,7,7,7,7,7,7],
        [1,8,8,8,8,0,0,0,0,1,7,7,7,7,7,7],
        [1,1,0,0,1,1,1,1,1,1,7,7,7,7,7,7],
        [7,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7],
    ],
    [
        [7,7,1,1,1,1,1,1,1,1,1,1,1],
        [7,1,1,0,0,0,0,0,1,0,0,4,1],
        [1,1,1,0,3,0,3,3,1,0,0,0,1],
        [1,0,1,1,3,0,0,0,0,3,3,0,1],
        [1,0,0,1,0,0,3,0,1,0,0,0,1],
        [1,1,1,1,1,1,0,1,1,1,1,1,1],
        [1,8,8,0,8,8,3,0,1,9,1,1,7],
        [1,0,8,8,0,0,0,0,1,1,1,7,7],
        [1,0,0,8,8,1,1,1,1,1,7,7,7],
        [1,1,1,1,1,1,1,1,1,7,7,7,7]
    ]

]

function getLevel(number){
    if(number < 1){
        number = 1
    }
    
    else 
    
    if(number > levels.length-1){
        number = levels.length-1
    }
        
    var level = MatrixUtils.copyMatrix(this.levels[number-1]);
    return level;
}

function size(){
    return this.Levels.length
}
