sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'user/test/integration/FirstJourney',
		'user/test/integration/pages/userObjectPage'
    ],
    function(JourneyRunner, opaJourney, userObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('user') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheuserObjectPage: userObjectPage
                }
            },
            opaJourney.run
        );
    }
);