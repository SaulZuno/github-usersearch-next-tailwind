import GithubIcon from "@/components/icons/GithubIcon";
import LocationIcon from "@/components/icons/LocationIcon"
import LinkIcon from "@/components/icons/LinkIcon"
import TwitterIcon from "@/components/icons/TwitterIcon"
import BuildingIcon from "@/components/icons/BuildingIcon"
import { User } from "@/interfaces/user";

interface Props {
  user: User;
}

const UserCardInfo = ({user}: Props) => {
  return (
    <article className='p-4 grid-areas rounded-xl bg-blue-900 text-white'>
      <div className="grid section-logo h-24 w-24 place-content-center rounded-full bg-gray-200 p-1 lg:mx-auto mr-3">
        <GithubIcon className="relative top-2 h-full w-full" />
      </div>
      <div className="section-title">
        <h2 className="text-3xl font-bold">{user?.name}</h2>
        <p>@{user?.login}</p>
      </div>
      <p className="section-date lg:text-right"> {new Date(user?.created_at || "").toLocaleDateString("es", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}</p>
      <p className="section-description mt-8 leading-loose">{user?.bio || "Sin user bio"}</p>
      <div className="section-number mt-4 flex justify-around bg-blue-950 p-8 rounded-xl text-center">
        <article>
          <p>Repos</p>
          <p className="font-bold text-xl">{user?.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="font-bold text-xl">{user.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="font-bold text-xl">{user.following}</p>
        </article>
      </div>
      <div className="section-social md:grid md:grid-cols-2 mt-4 space-y-3">
        <article className="flex space-x-2">
          <i>
            <LocationIcon className="fill-white h-full w-full" width={"1rem"}/>
          </i>
          <span>{user?.location || "No information"}</span>
        </article>
        <article className="flex space-x-2">
          <i>
            <LinkIcon className="fill-white h-full w-full" width={"1rem"} />
          </i>
          <a href={user?.blog || ""}>{user?.blog || "No information"}</a>
        </article>
        <article className="flex space-x-2">
          <i>
            <TwitterIcon className="fill-white h-full w-full" width={"1rem"} />
          </i>
          <a href={`https://twiter.com${user?.twitter_username || ""}`}>{user.twitter_username || "No information"}</a>
        </article>
        <article className="flex space-x-2">
          <i>
            <BuildingIcon className="fill-white h-full w-full" width={"1rem"}/>
          </i>
          <span>{user?.company || "No information"}</span>
        </article>
      </div>  
    </article>
  )
}

export default UserCardInfo