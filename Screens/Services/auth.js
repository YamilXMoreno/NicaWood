import { auth } from '../../firebase';
import { sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';


export const authSignUp = async (email, password) => {
  try {
    console.log(auth, email, password);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await sendEmailVerification(userCredential.user);

    const user = userCredential.user;
    console.log('User has been Registered:', user);
    return userCredential; 
  } catch (error) {
    console.error('Error creating user:', error.code, error.message);
    throw error;
  }
};

export const authLogIn = async (email, password) => {
  try {
    console.log(auth, email, password)
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    await sendEmailVerification(userCredential.user);

    const user = userCredential.user;
    console.log('User Logged In: ' + user);
    return user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const authForgotPassword = async (email) => {
  try {
    console.log(email);
    await sendPasswordResetEmail(auth, email);

    console.log('Password reset email sent successfully');
    return true; 
  } catch (error) {
    console.error('Error sending password reset email:', error.code, error.message);
    throw error;
  }
};

export const emailVerification = async () => {
  const user = auth.currentUser;
  try {
    await sendEmailVerification(user, {
      handleCodeInApp: true,
      url: 'https://ecommerce-2d5c5.firebaseapp.com',
    }).then(() => {
      showEmailAlert(user.email);
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Email Verification Error: ', errorCode, errorMessage);
    throw error;
  }
};

export const saveUserData = async (userId, user) => {
  // Implementation of saving user data (if needed)
  // This function might involve interactions with your database or other services
  console.log('User Data Saved:', userId, user);
};
