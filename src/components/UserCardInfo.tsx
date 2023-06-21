import GithubLogo from "@/components/icons/GithubIcon";

const UserCardInfo = () => {
  return (
    <article className='p-2 grid-areas rounded-xl bg-blue-900 text-white'>
      <div className="grid section-logo h-20 w-20 place-content-center rounded-full bg-gray-200 p-1">
        <GithubLogo className="relative top-2 h-full w-full" />
      </div>
      <div className="section-title">
        <h2>The Octocat</h2>
        <p>@octocat</p>
      </div>
      <p className="section-date">Joined 25 Jan 2011</p>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore harum in excepturi itaque, odit reprehenderit porro aut tenetur nemo maxime eum libero ducimus tempora tempore repellendus culpa quae. Eaque.</p>
      <div>
        <article className="section-number flex justify-around bg-blue-950">
          <p>Repos</p>
          <p>8</p>
        </article>
        <article>
          <p>Followers</p>
          <p>3938</p>
        </article>
        <article>
          <p>Following</p>
          <p>9</p>
        </article>
      </div>
      <div className="section-social md:grid md:grid-cols-2">
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San Francisco</p>
        </article>
      </div>  
    </article>
  )
}

export default UserCardInfo