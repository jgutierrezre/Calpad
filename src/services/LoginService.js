export const loginWithEth = async () => {
    if (window.web3) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        window.userAddress = accounts[0];
        window.localStorage.setItem('userAddress', accounts[0])
      } catch (error) {
        console.error(error)
      }
    } else {
      alert("No Web3 instance detected.");
    }
  }

export const logoutWithEth = async () => {
  window.userAddress = null
  window.localStorage.removeItem('userAddress')
}

export const getRole = (userAddress) => {
  if (userAddress){
    if (userAddress.toLowerCase() === "0x9c96F69880b26E00404a617ed1aB84992250F6a2".toLowerCase()){
      return "admin";
    } else {
      return "user";
    }
  } else {
    return "none"
  }
}