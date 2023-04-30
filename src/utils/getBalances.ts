import { currentWallet, walletEthBalance, walletSolBalance } from "../store/currents";
import { ethers } from "ethers";
import { Connection, PublicKey } from "@solana/web3.js";
// create an instance of the JSON RPC provider

// console.log(currentWallet)
function getBalances(walletAddress, network) {
    //   const provider = new ethers.providers.JsonRpcProvider(
    //     "https://eth-mainnet.g.alchemy.com/v2/BkQfT15QRQFdsweS6e4kjyvgnTIySNQS"
    // );
    // const provider = new ethers.providers.JsonRpcProvider(
    // the address to get the balance of
    // const address = "0x1234567890123456789012345678901234567890";

    // get the balance of the address
    console.log(walletAddress, network)
    if (network === "Ethereum") {


        const ethereumProvider = new ethers.providers.InfuraProvider('mainnet', 'b5f32cd516e94d3395a90e5ed9c59400');
        // const address = "0xF02c1c8e6114b1Dbe8937a39260b5b0a374432bB";
        ethereumProvider.getBalance(walletAddress).then((balance) => {
            // convert a currency unit from wei to ether
            const balanceInEth = ethers.utils.formatEther(balance);
            console.log(`balance: ${balanceInEth} ETH`);
            walletEthBalance.set(balanceInEth);
        });

        
        } else if (network === "Solana") {
            walletEthBalance.set("0");
            console.log("solana")
            // create a connection to the Solana cluster
            const connection = new Connection('https://solana-mainnet.g.alchemy.com/v2/z6xl9s4lV7hVIrau-CNy5jtQLCg6hLm2');

            // the address to get the balance of
            const address = new PublicKey(walletAddress);

            // get the balance of the address
            connection.getBalance(address).then((balance) => {
                const solBalance = balance / 10 ** 9;
                walletSolBalance.set(solBalance.toString());
                console.log(`Balance of ${address.toBase58()}: ${balance / 10 ** 9} SOL`);


            }).catch((error) => {
                console.error(error);
            });

        }
    }


    export default getBalances