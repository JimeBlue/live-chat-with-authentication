import { projectAuth } from "../firebase/config";
import { ref } from "vue";
let error = null;

// Function to sign user up
const signup = async (email, password, displayName) => {
  // So as not constantly show error value to user
  error = null;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete signup");
    }
    await res.user.updateProfile({ displayName });
    error = null;

    return res;
  } catch (err) {
    console.log(err.message);
    error = err.message;
  }
};

//Function returning error and the signup function above.
const useSignup = () => {
  return { error, signup };
};

export default useSignup;
