const getSeverIp = (): string => {

  let  SERVER_IP ;// process.env.REACT_APP_Server_IP;

  if (window.location.hostname == "localhost") {
     SERVER_IP = "http://127.0.0.1:8080";
  } else {
    SERVER_IP = "http://15.165.107.70:8080";
  }

  return SERVER_IP;
};

export default getSeverIp;
