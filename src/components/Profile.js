// {구조분해 할당 }

export default function Profile({ profileInfo }) {
  return (
    <>
      {profileInfo.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${profileInfo.profile_path}`} /> : <img src={`/images/profile.svg`} alt={profileInfo.name} />}
      <span>{profileInfo.name}</span>
    </>
  );
}
