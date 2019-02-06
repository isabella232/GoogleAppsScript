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
        //Logger.log(Tokens)
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