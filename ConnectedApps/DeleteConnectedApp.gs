/**
 * This script is an example-
 * how to go over all users in the G Suite account and delete Dropbox app from the "Connected App" for each user in case he allowed it.
 * Change the "tok.displayText == 'Dropbox'" to the app you want.
 * Change the "domain: 'doit-intl.com'" to any domain in your account.
*/


function deleteDropbox() {
var OrgUsers;
var Users;
var UserTokens;
var Tokens;
var Email;
  
    OrgUsers = AdminDirectory.Users.list({
      domain: 'doit-intl.com'
    });
  Users = OrgUsers.users;
  
    for (var i = 0; i < Users.length; i++) {
        var user = Users[i];
        Email = Users[i].primaryEmail
        UserTokens = AdminDirectory.Tokens.list(Email)
        Tokens = UserTokens.items
        if (!Tokens){
          continue;
        }
        for (var y = 0; y < Tokens.length; y++){
         var tok = Tokens[y];
          if (tok.displayText == 'Dropbox')
            AdminDirectory.Tokens.remove(Email, tok.clientId)
        }
            
      }
    }