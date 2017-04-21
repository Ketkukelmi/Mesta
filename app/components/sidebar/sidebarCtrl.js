app.controller('sidebarCtrl', function (postService, $scope, $rootScope) {
    $scope.searchType = "popular";

    // Toggle between search modes
    $scope.toggleSearchType = function () {
        if ($scope.searchType == "popular") {
            $scope.searchType = "nearby";
        }
        else {
            $scope.searchType = "popular";
        }
    };

    // Initialize locations array (from location/all will be stored here)
    $scope.locations = [];

    // Get the locations from the service
    $scope.$on('locations', function (event, locations) {
        $scope.$apply(function () {
            $scope.locations = locations;
            console.log($scope.locations);
        });
    });

    // Open the clicked location in the post view (broadcast selected location ID to the post view)
    $rootScope.togglePostView = function (id) {
        $rootScope.$broadcast('location_id', id);
        togglePostView();
    };
});
