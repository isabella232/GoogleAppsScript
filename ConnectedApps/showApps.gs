function showApps() {
var OrgUsers;
var Users;
var UserTokens;
var Tokens;
var Email;
  
    OrgUsers = AdminDirectory.Users.list({
      domain: 'gdemo.co.il'
    });
  Users = OrgUsers.users;
  
    for (var i = 0; i < Users.length; i++) {
        Email = Users[i].primaryEmail
        UserTokens = AdminDirectory.Tokens.list(Email)
        Tokens = UserTokens.items
        Logger.log (Email)
        
        if (Tokens) {
         for (var y = 0; y < Tokens.length; y++) {
          var tok = Tokens[y]
          Logger.log ('**' + tok.displayText);
         }
        }  
        else {
	 continue;
	}
        } 
      }