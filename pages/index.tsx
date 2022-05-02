import Head from 'next/head'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const [usersvalue, userssetValue] = useState(null);

  return (
    <main className="container">
      <Head>
        <title>GitHub Stats</title>
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

      <div id="search">
      <input type="text" className="txt" placeholder={"Search a GitHub user"} value={usersvalue} onChange={(e) => {
              userssetValue(e.target.value)
      }}/>
      <button className="search-button" onClick={() => {
          window.location.href = `/user/${usersvalue}`
        }}>
        <FontAwesomeIcon id="icon" icon={faMagnifyingGlass} />
      </button>
      </div>
    </main>
  )
}
