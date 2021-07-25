// // Import the SkynetClient and a helper
// import { SkynetClient } from 'skynet-js';

// // We'll define a portal to allow for developing on localhost.
// // When hosted on a skynet portal, SkynetClient doesn't need any arguments.
// const portal =
//   window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;

// // Initiate the SkynetClient
// const client = new SkynetClient();


// function SkyNet(){
//   const [mySky, setMySky] = useState();
//   const [loggedIn, setLoggedIn] = useState(null);

//   const hostApp = 'localhost';  


//   useEffect(() => {
//     async function initMySky() {
//       try {

//         const mySky = await client.loadMySky(hostApp);
    
    
//         // check if user is already logged
//         const loggedIn = await mySky.checkLogin();
        
//         // set react state for login status and
//         // to access mySky in rest of app
//         setMySky(mySky);
//         setLoggedIn(loggedIn);
//         mySky.checkLogin();
//       } catch (e) {
//         console.error(e);
//       }
//     }
    
//   initMySky();
//   });

//   const mySkyLogin = async () => {
//     // Try login again, opening pop-up
//     const status = await mySky.requestLoginAccess();

//     // set react state
//     setLoggedIn(status);

// }

//   const mySkyLogout = async () => {

//   //logout the user
//   await mySky.logout();

//   //set react state
//   setLoggedIn(false);
// };

// }