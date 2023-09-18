namespace joecap.db;
using {managed} from '@sap/cds/common';

entity user
{
    key ID : UUID
        @Core.Computed;
    name : String(100);
    age : Integer;
    email : String(1000);
}
