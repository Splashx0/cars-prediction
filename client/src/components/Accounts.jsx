import React from 'react'
import Account from './Account'

function Accounts() {

    return (
        <div>
            {/**this is the content of the Accounts component that has all the user accounts */}
            <div className=' mt-[60px] w-[92%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                <a href="/userquizzes" target='_blank'><Account /></a>
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