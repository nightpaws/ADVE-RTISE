/**
 * Created by Nightpaws on 07/03/2016.
 */
angular.module("CheckAllModule", [])
    .controller("checkboxController", function checkboxController($scope) {

        //Checkbox handling
        $scope.Years = [
            {
                group: "1st Year"
            },
            {
                group: "2nd Year"
            },
            {
                group: "3rd Year"
            },
            {
                group: "4th Year"
            },
            {
                group: "5rd Year"
            },
            {
                group: "PhD Year"
            }
        ];

        $scope.checkAll = function () {
            if ($scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }
            angular.forEach($scope.classes, function (year) {
                year.Selected = $scope.selectedAll;
            });
        };

    });