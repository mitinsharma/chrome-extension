var myApp = angular.module("myModule",[]);
var myController = function($scope,$http){
    
    var op1 = 0;
    var op2 = 0;
    var operator = 0;
    var equal_operator = 0;
    $scope.ldisplay = '';
    $scope.tap_num = function(x){
       if(((x>=0 && x<10)||x=='.') && $scope.ldisplay.length < 9){
            if(equal_operator == 1) reset_calc();
           $scope.ldisplay = $scope.ldisplay +''+ x;
       }
       else if(x=='c'){
           $scope.ldisplay = "";
           op1 = 0;
           op2 = 0;
           operator = 0;
           equal_operator = 0 ;
       }
       else if(x=='+'){
            op1 = $scope.ldisplay;
            $scope.ldisplay = "";
            operator = '+';
           equal_operator = 0 ;
       }
       else if(x=='-'){
            op1 = $scope.ldisplay;
            $scope.ldisplay = "";
            operator = '-';
           equal_operator = 0 ;
       }
       else if(x=='*'){
            op1 = $scope.ldisplay;
            $scope.ldisplay = "";
            operator = '*';
           equal_operator = 0 ;
       }
       else if(x=='/'){
            op1 = $scope.ldisplay;
            $scope.ldisplay = "";
            operator = '/';
           equal_operator = 0 ;
       }

       else if(x=='='){
           equal_operator = 1;
            if(op1!=0){
                if(operator=='+'){
                    op2 = $scope.ldisplay;
                    var result = parseFloat(op1) + parseFloat(op2);
                    $scope.ldisplay = ""+result;
                }
                else if(operator=='-'){
                    op2 = $scope.ldisplay;
                    var result = parseFloat(op1) - parseFloat(op2);
                    $scope.ldisplay = ""+result;
                }
                else if(operator=='*'){
                    op2 = $scope.ldisplay;
                    var result = parseFloat(op1) * parseFloat(op2);
                    $scope.ldisplay = ""+result;
                }
                else if(operator=='/'){
                    op2 = $scope.ldisplay;
                    var result = parseFloat(op1) / parseFloat(op2);
                    $scope.ldisplay = ""+result;
                }
            }
            op1 = 0;
            op2 = 0;
            operator = 0;
       }

    }

    var reset_calc = function(){
        op1 = 0;
        op2 = 0;
        operator = 0;
        equal_operator = 0;
        $scope.ldisplay = "";
    }


}
myApp.controller("myController",myController);
