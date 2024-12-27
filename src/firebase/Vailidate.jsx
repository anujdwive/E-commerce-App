export const checkValidation = (email, password) => {
    // eslint-disable-next-line no-unused-vars
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    // eslint-disable-next-line no-unused-vars
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email id is not valid";
    if(!isPasswordvalid) return "Password is not valid"

    return null;
};