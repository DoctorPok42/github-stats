import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from "react";

export default function User(props: { user: any; }) {

    const { user } = props;
    console.log(user);

  return (
    <main className="container">
      <Head>
        <title>{user.name !== "Not Found" ? user.name : "Not Found"} | GitHub Stats</title>
        <meta charSet="UTF8" />
        <meta name="theme-color" content="#d36e18" />
        <meta name="title" content="GitHub Stats" />
        <meta name="description" content="Application Web d'information"/>
        <meta name="author" content="DoctorPok" />
        <meta name="robots" content="index" />
        <script
          src="https://kit.fontawesome.com/73458f3ed9.js"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/b028783a83.js"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <div className="content">
        <div className="head">
          <div className="img">
            <img src={user.avatar_url} alt={user.name} />
          </div>
          <div className="info">
            <h1>{user.name !== "Not Found" ? user.name : "Not Found"}</h1>
            <h2>( {user.login} )</h2>
            <h4>{user.bio}</h4>
          </div>
        </div>
      </div>
    </main>
  )
}


export async function getServerSideProps (ctx: any) {

    const fetchuser = await fetch(`https://api.github.com/users/${ctx.params.id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'token ...',
            
            }
    })
    const user = await fetchuser.json()

    return {
        props: { user},
    }
}