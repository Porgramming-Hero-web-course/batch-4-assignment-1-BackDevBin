interface Profile {
    name: string;
    age: number;
    email: string;
  }

const myProfile = {
     name: "Alice", 
     age: 25, 
     email: "alice@example.com"
     };
  
  function updateProfile(pro: Profile, up: Partial<Profile>): Profile {
    return { ...pro, ...up };
  }
  
 updateProfile(myProfile, { age: 26 });
 updateProfile(myProfile, { name: "Tishan" });