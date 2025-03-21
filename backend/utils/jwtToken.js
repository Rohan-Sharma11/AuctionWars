export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken({
    expiresIn: process.env.JWT_EXPIRE || '1d' // Specify expiration time
  });

  const cookieExpireDays = parseInt(process.env.COOKIE_EXPIRE);

  if (isNaN(cookieExpireDays)) {
    console.error("Invalid COOKIE_EXPIRE value:", process.env.COOKIE_EXPIRE);
    return res.status(400).json({ success: false, message: "Invalid COOKIE_EXPIRE value" });
  }

  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};