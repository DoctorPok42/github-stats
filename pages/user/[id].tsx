import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserGroup, faBuilding, faLocationDot, faLink, faHashtag, faBookBookmark} from "@fortawesome/free-solid-svg-icons";
import Head from 'next/head'

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
          <div className="bio">
            <h1>{user.name !== "Not Found" ? user.name : "Not Found"}</h1>
            <h2>( {user.login} )</h2>

            <div className="follow">
              <FontAwesomeIcon id="icon" icon={faUserGroup} />
              <h4><span>{user.message !== 'Not Found' ? user.followers : "NaN"}</span> followers</h4>
              <h4><span>{user.message !== 'Not Found' ? user.following : "NaN"}</span> following</h4>
            </div>
          </div>
        </div>
        
        <div className="body">
          <div className="bio">
            {user.company !== null ? user.company.substr(0,1).includes("@") ? <h2><a href={`https://github.com/${user.company.substr(1)}`} target="_blank"><FontAwesomeIcon id="icon" icon={faBuilding} /> {user.company}</a></h2> : <h2><FontAwesomeIcon id="icon" icon={faBuilding} /> {user.company} </h2> : null}
            {user.location !== null ? <h2><FontAwesomeIcon id="icon" icon={faLocationDot} /> {user.location}</h2> : null}
            {user.blog !== "" ? <h2><a href={user.blog} target="_blank"><FontAwesomeIcon id="icon" icon={faLink} /> {user.blog}</a></h2> : null}
            {user.twitter_username !== null ? <h2><a href={`https://twitter.com/${user.twitter_username}`} target="_blank"><FontAwesomeIcon id="icon" icon={faHashtag} /> {user.twitter_username}</a></h2> : null}
          </div>
          <div className="repos">
            
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
            'Authorization': 'token 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',
            'Content-Type': 'application/json'            
            }
    })
    const user = await fetchuser.json()

    if (user.message === 'Not Found') {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return {
        props: { user},
    }
}