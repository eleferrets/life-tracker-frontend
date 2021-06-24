// const jwt = require("jsonwebtoken")
// const SECRET_KEY = "123supersecretkey4me"
// // You sign the jwt, then verify it for authentification
// const generateToken = (data) => jwt.sign(data, SECRET_KEY, {algorithm: "HS256", expiresIn: 10000})

// const validateToken = (token) => jwt.verify(token, SECRET_KEY)

// const testTokens = () => {
//     const user = {email: "person@gmail.com"}

//     const token = generateToken(user)
//     console.log("token", token)
//     const validatedToken = validateToken(token)
//     console.log("validatedToken", validatedToken)
// }
// testTokens()
// // const testEncoding = (str) => {
// //     // convert it into a Buffer of binary integers and encode it as base64
// //     const encodedString = Buffer.from(str).toString("base64")
// //     // Decoding the string
// //     // const decodedString = Buffer.from(encodedString, "base64").toString("ascii")
// // }

// // testEncoding("string_to_encode")