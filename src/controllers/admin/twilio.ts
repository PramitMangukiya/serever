const twilio = require('twilio');

// Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken, {
    lazyLoading: true
});

// Function to generate a random OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
}

// Function to send OTP
export async function sendOTP() {
    const otp = generateOTP();
    console.log("otp => ", otp);
    try {
        const message = await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: "+19725097885", // Twilio phone number (ensure it's in E.164 format)
            to: "+918866005024" // Recipient's phone number with country code
        });

        console.log(`OTP sent: ${message.sid}`);
        return otp; // Return OTP to use for verification
    } catch (error) {
        console.error(`Failed to send OTP: ${error}`);
        throw error;
    }
}
