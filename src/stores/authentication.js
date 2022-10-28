import { defineStore } from "pinia";
import  router  from "../router";
import { signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
//import { useUserStore } from "./books";

///// OPTIONS STORE
export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        userData: {},
        loadingUser: false,
        loading: false,
        user: null
    }),
    actions: {
        signIn(email, password) {
            console.log('llamando sign in')
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('usuario loggeado', user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },
        newUser(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
            
                    const user = userCredential.user;
                    console.log('usuario creado', user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },
        async newUserAwait(email, password) {
            try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log('usuario creado', userCredential.user)
        } catch(error) {
            alert(errorMessage);
        }
        },
        async login(email, password) {
            this.loadingUser = true;
            try {
                const { user } = await signInWithEmailAndPassword(auth,
                    email,
                    password
                );
                this.userData = { email: user.email, uid: user.uid };
                router.push("/FerLex");
            } catch (error) {
                console.log(error);
                this.userData = {};
            } finally {
                this.loadingUser = false;
            }
        },
        async registerUser(email, password) {
            this.loadingUser = true;
            try {
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                this.userData = { email: user.email, uid: user.uid };
                router.push("/");
            } catch (error) {
                console.log(error);
                this.userData = {};
            } finally {
                this.loadingUser = false;
            }
        },
        logOut(){
            signOut(auth).then(() => {
                console.log('usuario fuera')
                router.push('/');
              }).catch((error) => {
                alert(error);
              });
        },
        async signOutUser() {
            this.loading = true;
            try {
                await signOut(auth);
            } catch (error) {
                console.log(error);
            } finally {
                this.userData = {};
                this.loading = false;
                router.push("/SignIn");
            }
        },
        currentUser() {
            return new Promise((resolve, reject) => {
                const unsubcribe = onAuthStateChanged(
                    auth,
                    (user) => {
                        if (user) {
                            this.userData = {
                                email: user.email,
                                uid: user.uid,
                            };
                        }
                        resolve(user);
                    },
                    (e) => reject(e)
                );
                // Según la documentación, la función onAuthStateChanged() devuelve
                // La función de cancelación de suscripción para el observador
                unsubcribe();
            });
        },
        
    },
});