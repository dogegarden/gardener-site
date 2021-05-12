import useAuth from './useAuth'
import useRouter from './useRouter'

const useRequireAuth = (redirectUrl = "/signup") => {
  const auth = useAuth();
  const router = useRouter();
  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.user === false) {
      router.push(redirectUrl);
    }
  }, [auth, router]);
  return auth;
}

export default useRequireAuth