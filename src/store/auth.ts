import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client("540767756654-ev577t9049mesqslitk19rmra48a090n.apps.googleusercontent.com");

 async function verifyToken(idToken:any) {
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: "540767756654-ev577t9049mesqslitk19rmra48a090n.apps.googleusercontent.com", // Specify the CLIENT_ID of the app that accesses the backend
    });
    const payload = ticket.getPayload();
    return payload;
  }

  export default verifyToken;