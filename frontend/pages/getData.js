import React from 'react'

export default function getData({ data }) {
    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.id} {item.name} {item.detail}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://www.mecallapi.com/api/attractions`)
    const data = await res.json()
    console.log(data)
    return { props: { data } }
}
