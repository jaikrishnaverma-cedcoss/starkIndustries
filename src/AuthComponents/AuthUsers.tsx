
const withAuthentication = ({Component}:any) => {
    let isAuthenticated=true
    if (isAuthenticated) {
      return <Component  />;
    }
    return  <Component  />;
  };

export default withAuthentication;