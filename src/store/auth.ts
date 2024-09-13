import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client("540767756654-ev577t9049mesqslitk19rmra48a090n.apps.googleusercontent.com");

 async function verifyToken(idToken) {
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: "540767756654-ev577t9049mesqslitk19rmra48a090n.apps.googleusercontent.com", // Specify the CLIENT_ID of the app that accesses the backend
    });
    const payload = ticket.getPayload();
  
    console.log('User ID:', payload['sub']); // Get user information
    console.log('Email:', payload['email']);
    return payload;
  }

  export default verifyToken;