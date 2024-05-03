import React from 'react'
import Account from './Account'
import SearchBar from './SearchBar'
function Accounts() {
    return (
        <div>
            <SearchBar/>
            <div className=' mt-[100px] w-[92%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <Account />
                <Account />
                <Account />
                <Account />
                <Account />
                <Account />
                <Account />
                <Account />
            </div>
        </div>

    )
}

export default Accounts
