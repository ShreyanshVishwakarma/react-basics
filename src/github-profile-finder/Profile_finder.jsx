import { useEffect, useState } from 'react';

export default function Profile_finder(){
    const [username, setUsername] = useState('ShreyanshVishwakarma');
    const [info , setData] = useState({});
    
    function handleSubmit(){
       githubFetchUserData(); 
    }

    async function githubFetchUserData(){
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json();
        console.log(data);
        setData(data);
    }

    useEffect(()=>{
        githubFetchUserData();
    },[])

    return (
        <>
            <div className = "flex items-center justify-center space-x-6 mt-4">
                <input type="text" className="p-1 bg-gray-300 rounded text-black" onChange={(e)=>setUsername(e.target.value) } value={username} placeholder="Enter username"/>
                <button className = "bg-slate-200 p-1 rounded" onClick={handleSubmit}>Search</button>
            </div>

            <div>
                <img src={info.avatar_url} alt="profile icon" />
                <h2>{"Name :"+info.name}</h2>
                <h3>{"Locatoin: "+info.location}</h3>
                <p>{"Bio: " + info.bio}</p>
                <p>{`Followers: ${info.followers}`}</p>
                <p>{`Following: ${info.following}`}</p>
                <p>Repositories</p>
                <p>Twitter</p>
            </div>
        </>
    )
}