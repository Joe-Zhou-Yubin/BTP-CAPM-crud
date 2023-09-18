using { joecap.db as joe } from '../db/datamodel';

@path : 'sap/odata/user'
service MyService
{
    @odata.draft.enabled
    entity user as
        projection on joe.user;
}
