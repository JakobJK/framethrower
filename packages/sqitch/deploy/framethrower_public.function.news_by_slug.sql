-- deploy flipr:framethrower_public.function.news_by_slug to pg

begin;

  create or replace function framethrower_public.news_by_slug(slug_ text) returns framethrower_public.v_post as $$
    select * from framethrower_public.v_post
    where slug = slug_
  $$ language sql stable;

  grant execute on function framethrower_public.news_by_slug(text) to framethrower_anonymous, framethrower_inactive, framethrower_banned, framethrower_user, framethrower_moderator, framethrower_admin;

  -- We need to rename this function, because of name clashing in PostGraphile
  COMMENT ON FUNCTION framethrower_public.news_by_slug(text) IS E'@name getPostBySlug';
commit;
