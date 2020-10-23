import React from 'react'

export default function  TableRow({email, phone, thumbnail, name}) {

    return(
        <tr>
            <td><img src={thumbnail}></img></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    )
}