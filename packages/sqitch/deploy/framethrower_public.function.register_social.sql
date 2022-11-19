-- Deploy flipr:framethrower_public.function.register_reel to pg

begin;
  create or replace function framethrower_public.register_social(
    instagram_ text,
    twitter_ text,
    linkedin_ text,
    artstation_ text,
    vimeo_ text,
    youtube_ text,
    www_ text,
    facebook_ text
  ) returns framethrower_public.profile_social as $$
    insert into framethrower_public.profile_social (profile_id, instagram, twitter, linkedin, artstation, vimeo, youtube, www, facebook) values (
      current_setting('jwt.claims.id', true)::uuid, instagram_, twitter_, linkedin_, artstation_, vimeo_, youtube_, www_, facebook_
    ) on conflict (profile_id)
    do update set
      instagram = instagram_,
      twitter = twitter_,
      linkedin = linkedin_,
      artstation = artstation_,
      vimeo = vimeo_,
      youtube = youtube_,
      www = www_,
      facebook = facebook_
      where profile_social.profile_id = current_setting('jwt.claims.id', true)::uuid
      returning *;
  $$ language sql;
  grant execute on function framethrower_public.register_social(text, text, text, text, text, text, text, text) to framethrower_user, framethrower_inactive, framethrower_moderator, framethrower_admin;
commit;