sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'userlist/test/integration/FirstJourney',
		'userlist/test/integration/pages/userList',
		'userlist/test/integration/pages/userObjectPage'
    ],
    function(JourneyRunner, opaJourney, userList, userObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('userlist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheuserList: userList,
					onTheuserObjectPage: userObjectPage
                }
            },
            opaJourney.run
        );
    }
);