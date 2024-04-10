import {HelmetProvider} from "react-helmet-async";
import {AuthProvider} from "~/components/home/UserContext";
import Main from "~/components/Main";

export const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </HelmetProvider>
  )
};
