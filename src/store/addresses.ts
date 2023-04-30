import { writable } from "svelte/store";



type Address = {
    addressName: string,
    address: string,
    chain: string,
    isOwn: boolean
}

const savedAddresses = writable<Address[]>([
    {
        addressName:"address1",
        address:"0x1234hghfhhgh56789",
        chain:"Ethereum",
        isOwn:false
    },
    {
        addressName:"address2",
        address:"By123456789sdffsddsffds",
        chain:"Solana",
        isOwn:true
    },
    {
        addressName:"address3",
        address:"Gm1234ewfdfdsfdsf5fds6789",
        chain:"Solana",
        isOwn:true
    },
    {   
        addressName:"address4",
        address:"0x1234fggffdgdf56789",
        chain:"Ethereum",
        isOwn:false
    }
]
)
export default savedAddresses
export type {Address}
