-- Deploy framethrower:framethrower_public.function.delete_own_news_comment to pg

begin;

  create or replace function framethrower_public.delete_own_news_comment(_id uuid) returns framethrower_public.news_comment as $$
    update framethrower_public.news_comment set status = 'deleted' where id = _id and profile_id = current_setting('jwt.claims.id', true)::uuid returning news_comment.*;
  $$ language sql security definer;
  grant execute on function framethrower_public.delete_own_news_comment(uuid) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;