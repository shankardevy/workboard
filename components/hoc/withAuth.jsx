import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const initializeAuth = useAuthStore((state) => state.initializeAuth);
    initializeAuth();  // Check authentication status on mount

    const router = useRouter();

    useEffect(() => {

      if (!isAuthenticated) {
        router.push("/"); // Redirect if not authenticated
      }
    }, [isAuthenticated, router]);

    // Prevent rendering if not authenticated
    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
